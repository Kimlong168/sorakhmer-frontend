import { Helmet } from "react-helmet";
import PropType from "prop-types";
function MetadataHeader({
  title = "Sorakhmer",
  description = "Welcome to Sorakhmer",
  image = "https://sorakhmer-frontend.netlify.app/assets/sorakhmer-logo-ox1bq9ws.png",
}) {
  return (
    <Helmet>
      <title>My Awesome Website</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://www.sorakhmer.com" />
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}

MetadataHeader.propTypes = {
  title: PropType.string,
  description: PropType.string,
  image: PropType?.string,
};

export default MetadataHeader;
