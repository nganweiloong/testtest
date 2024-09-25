import { ImageConfig } from "acm-components";
import Image from "../image";
import CardLayout from "../ui/card-layout";

export interface ImageCardProps {
  image: ImageConfig;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <CardLayout className="h-[358px] w-[241px] overflow-hidden p-0 md-v2:h-[386px] md-v2:w-[260px] md-v2:p-0">
    <Image src={image.src} alt={image.src} width={260} height={386} className="h-full w-full" />
  </CardLayout>
);

export default ImageCard;
