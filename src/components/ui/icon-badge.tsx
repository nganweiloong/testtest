import { HtmlText, ImageConfig } from "acm-components";
import { Badge } from "acm-components/v2";
import Image from "../image";

interface IconBadgeProps {
  icon: ImageConfig;
  text: string;
  bgColor: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ icon, text, bgColor }) => (
  <Badge
    className="flex h-fit w-fit items-center gap-1 rounded-xs bg-gradient-p-green-v2 px-2 py-0.5"
    style={{ backgroundImage: `${bgColor}` }}
  >
    <Image src={icon.src} alt={icon.alt} width={16} height={16} />
    <HtmlText className="ty-footnote" text={text} />
  </Badge>
);

export default IconBadge;
