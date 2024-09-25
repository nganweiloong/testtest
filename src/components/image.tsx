import NextImage, { ImageLoader, ImageProps } from "next/image";

const Image: React.FC<ImageProps> = (props) => {
  const loader: ImageLoader = ({ src, width, quality }) =>
    `https://resizer-acm.eco.astro.com.my/tr:w-${width},q:${quality || 75}/${src}`;

  return <NextImage {...props} loader={loader} />;
};

export default Image;
