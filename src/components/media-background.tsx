"use client";

import React, { useImperativeHandle } from "react";
import { cn } from "acm-components";
import Image from "./image";
import { MediaSource } from "./types";

interface MediaBackgroundProps {
  mediaSource: MediaSource;
  backgroundWrapperClassname?: string;
}

export interface VideoRef {
  play: () => void;
  pause: () => void;
}

const MediaBackground = React.forwardRef<VideoRef, MediaBackgroundProps>(
  ({ mediaSource, backgroundWrapperClassname }, ref) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const isWebmVideo = mediaSource.src.endsWith(".webm");
    const mp4VideoUrl = mediaSource.src.replace(/\.webm$/, ".mp4");

    useImperativeHandle(ref, () => ({
      play: () => {
        if (videoRef.current && mediaSource.type === "video") {
          videoRef.current.play();
        }
      },
      pause: () => {
        if (videoRef.current && mediaSource.type === "video") {
          videoRef.current.pause();
        }
      },
    }));

    return (
      <div className={cn("-z-10 h-screen w-full", backgroundWrapperClassname)}>
        {mediaSource.type === "video" ? (
          <video
            autoPlay
            loop
            muted
            width={1234}
            height={616}
            ref={videoRef}
            playsInline
            poster={mediaSource.fallbackImageUrl}
            className="aspect-video h-full w-full object-cover"
          >
            {isWebmVideo && <source src={mediaSource.src} type="video/webm" />}
            <source src={isWebmVideo ? mp4VideoUrl || mediaSource.src : mediaSource.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            className="aspect-video h-full w-full object-cover"
            src={mediaSource.src}
            alt={mediaSource.alt}
            width={1234}
            height={616}
          />
        )}
      </div>
    );
  }
);

MediaBackground.displayName = "MediaBackground";
export default MediaBackground;
