import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link, useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import ProductDetailCard from "./ProductDetailCard";
import RelatedProduct from "./RelatedProduct";
import Loading from "../../components/ui/Loading";
import DrawOutlineButton from "../../components/ui/DrawOutlineButton";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import OrderCheckoutForm from "../../components/form/OrderCheckoutForm";
import checkSocialMedia from "../../utils/checkSocialMedia";


const ProductDetailSection = () => {
  const { id: productParams } = useParams();
  const { productList, productCategoryList, contactList, language } =
    useContext(DataContext);
  const contactInfo = contactList.map((item) => item)[0];
  const [data, setData] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    telegram: "",
    message: "",
  });

  //   fetch data from firestore by id or param
  useEffect(() => {
    const productRef = doc(db, "products", productParams);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          setData(data);
          setQuantity(1);
          console.log("detail data", data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [productParams, productCategoryList]);

  //  get related content
  useEffect(() => {
    const filteredProducts = productList.filter((product) => {
      return (
        product.categoryId === data?.categoryId &&
        product.id !== productParams &&
        product.isActive
      );
    });

    setRelatedProduct(
      filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4)
    );
  }, [productList, data, productParams, productCategoryList]);

  // generate order id
  useEffect(() => {
    const fullNameWithoutSpaces = formData.fullName
      ? formData.fullName.replace(/\s/g, "")
      : "customer";
    setOrderId(
      `${fullNameWithoutSpaces}_${Math.floor(Date.now() / 1000).toString()}`
    );
  }, [formData.fullName]);

  // handle send order to telegram
  //bot token
  var telegram_bot_id = contactInfo
    ? contactInfo.telegramBotId
    : "6882060062:AAFvZvxBHu1kqu_n5BgPpsx4V1dGoSqHXBw";
  //chat id
  var chat_id = contactInfo ? contactInfo.chatId : "-1002126940474"; //channel id : we can send to both private and public channel

  const sendToTelegram = () => {
    // Send customer contact and information to telegram
    try {
      const send = async () => {
        const messageToSend = `===== New Order(buy now)  =====\n\nDate: ${new Date().toLocaleString()}\n\nOrderId: ${orderId}\n\nUpdate Status: https://sorakhmer-admin.netlify.app/orderDetail/${orderId}\n----------------------------------\nProduct: ${
          data.name
        }\n\nPrice: $${
          data.price
        }\n\nQuantity: ${quantity}\n\n💰Total Price: $${
          parseFloat(data.price) * quantity
        }\n----------------------------------\nCustomer Name: ${
          formData.fullName
        }\n\nPhone: ${formData.phoneNumber}\n\nAddress: ${
          formData.address
        }\n\n${formData.message ? `Message: ${formData.message}` : ""}\n\n${
          formData.telegram
            ? `${checkSocialMedia(formData.telegram)} : ${formData.telegram}`
            : ""
        }`;

        await axios.post(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            chat_id: chat_id,
            text: messageToSend,
          }
        );
        console.log("Message sent successfully!");
      };

      // excute function to send message to telegram
      send();
      // record order to database
      recordOrder();
      // clear form data
      setFormData({
        fullname: "",
        phone: "",
        address: "",
        description: "",
        email: "",
        socialMediaLink: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }

  };

  // record order to firestore database
  const recordOrder = () => {
    // data to be recorded
    const order = {
      orderId: orderId,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      contactLink: formData.telegram,
      address: formData.address,
      message: formData.message,
      cartItems: [
        {
          id: productParams,
          name: data.name,
          price: data.price,
          quantity: quantity,
          image: data.image,
        },
      ],
      total: parseFloat(data.price) * quantity,
      status: "pending",
      paymentMethod: "default",
      date: new Date().toLocaleString("en-GB"),
      timeStamp: new Date().getTime(),
    };

    const postCollectionRef = collection(db, "orders");
    addDoc(postCollectionRef, order);
  };

  // if the data is not fetched yet
  if (!data) {
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <section className="container p-4 md:pt-0">
      {/* back button */}
      <div className="mt-4">
        <Link to="/products">
          <DrawOutlineButton>
            <button className="group text-primary font-bold rounded px-3 py-1.5  flex items-center justify-center gap-1 ">
              <IoIosArrowBack className="group-hover:block hidden" />
              {language == "en" ? "Back" : "ត្រឡប់ក្រោយ"}
            </button>
          </DrawOutlineButton>
        </Link>
      </div>

      {/* detail product */}
      <div className="flex justify-between items-center" >
        <ProductDetailCard
          {...data}
          id={productParams}
          productCategoryList={productCategoryList}
          quantity={quantity}
          setQuantity={setQuantity}
          setIsOpenForm={setIsOpenForm}
        />
      </div>

      {/* order checkout form */}
      {isOpenForm && (
        <OrderCheckoutForm
          sendToTelegram={sendToTelegram}
          setIsOpenForm={setIsOpenForm}
          formData={formData}
          setFormData={setFormData}
          orderDetail={{
            orderId: orderId,
            productName: data.name,
            price: data.price,
            quantity: quantity,
            total: parseFloat(data.price) * quantity,
          }}
        />
      )}

      {/* related container */}

      <RelatedProduct relatedProduct={relatedProduct} />
    </section>
  );
};

export default ProductDetailSection;
