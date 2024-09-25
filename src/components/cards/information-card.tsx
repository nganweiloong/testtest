import { HtmlText, ImageConfig } from "acm-components";
import Image from "../image";
import CardLayout from "../ui/card-layout";
import IconBadge from "../ui/icon-badge";

export interface InformationCardProps {
  title: {
    text: string;
    icon?: ImageConfig;
  };
  badge: {
    text: string;
    bgColor: string;
    icon: ImageConfig;
  }[];
  info: {
    text: string;
    icon: ImageConfig;
  }[];
}

const InformationCard: React.FC<InformationCardProps> = ({ badge, title, info }) => (
  <CardLayout className="h-[386px] w-[260px]">
    <div className="flex items-center gap-2">
      <HtmlText className="ty-heading5" text={title.text} />
      {title.icon && <Image src={title.icon.src} alt={title.icon.alt} width={42} height={24} className="h-6" />}
    </div>
    <hr className="my-4 text-neutral-v2-10" />
    <div className="mb-4 space-y-2">
      {badge.map((item) => (
        <IconBadge key={item.text} {...item} />
      ))}
    </div>
    <div className="space-y-4 px-2">
      {info.map((item) => (
        <div className="flex items-start gap-1" key={item.text}>
          <Image src={item.icon.src} alt={item.icon.alt} width={16} height={16} className="pt-1" />
          <HtmlText className="ty-footnote" text={item.text} />
        </div>
      ))}
    </div>
  </CardLayout>
);

export default InformationCard;
