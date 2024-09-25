import { ImageConfig } from "acm-components";

interface VideoSource {
  type: "video";
  src: string;
  alt: string;
  fallbackImageUrl: string;
}

interface ImageSource extends ImageConfig {
  type: "image";
}

export type MediaSource = VideoSource | ImageSource;
