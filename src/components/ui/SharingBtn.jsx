import {
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";
import PropType from "prop-types";
const SharingBtn = ({ url, title }) => {
  return (
    <div>
      <div className="flex gap-2 justify-center p-2">
        <TelegramShareButton url={url} title={`====${title}====`} className="">
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <FacebookShareButton
          url={url}
          hashtag="#sorakhmer"
          quote={`====${title}====`}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <LineShareButton url={url} title={`====${title}====`}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
        <TwitterShareButton url={url} title={`====${title}====`}>
          <XIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

SharingBtn.propTypes = {
  url: PropType.string,
  title: PropType.string,
};
export default SharingBtn;
