import { GtmEvent, gtmPush } from "acm-components";

declare module "acm-components" {
  interface GtmEvent {
    content_duration?: string;
  }
}

type EventType = "clickEvent" | "slideEvent" | "video_play" | "video_stop";

export default function triggerEvent(event: EventType, params: GtmEvent = {}) {
  gtmPush({ event, content_type: "ACM Home", ...params });
}
