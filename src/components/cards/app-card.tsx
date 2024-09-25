import { HtmlText, ImageConfig } from "acm-components";
import { Button } from "acm-components/v2";
import Image from "../image";
import CardLayout from "../ui/card-layout";

export interface AppCardProps {
  icon: ImageConfig;
  price: {
    display: string;
    rrp?: string;
  };
  title: string;
  description: string;
  poster: ImageConfig;
  ctaButton: {
    text: string;
    onClick: () => void;
  };
}

const AppCard: React.FC<AppCardProps> = ({ icon, price, title, description, poster, ctaButton }) => (
  <CardLayout className="h-[386px] w-[260px]">
    <div className="relative h-full">
      <div className="mb-4 flex justify-between gap-1">
        <Image src={icon.src} alt={icon.alt} width={48} height={48} className="h-12 w-12 rounded-sm" />
        <div className="flex flex-col items-end">
          <HtmlText className="ty-heading4" text={price.display} />
          {price.rrp && <HtmlText className="text-neutral-v2-40 ty-caption" text={price.rrp} />}
        </div>
      </div>
      <div className="space-y-2">
        <p className="ty-heading5">{title}</p>
        <p className="ty-footnote">{description}</p>
      </div>

      <div className="absolute bottom-0 w-full">
        <Image
          src={poster.src}
          alt={poster.alt}
          width={228}
          height={118}
          className="h-[118px] w-[228px] rounded-sm md-v2:w-[212px]"
        />
        <hr className="mb-[18px] mt-4 text-neutral-v2-10" />
        <Button onClick={ctaButton.onClick} size="small" className="w-full">
          {ctaButton.text}
        </Button>
      </div>
    </div>
  </CardLayout>
);

export default AppCard;
