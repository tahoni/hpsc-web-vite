import { VideoProps } from "./VideoProps";

export type YouTubeVideoProps = VideoProps

export const YouTubeVideo = (props: YouTubeVideoProps) => {
  return (
    <iframe
      // width={props.width ?? 560}
      width="100%"
      // height={props.height ?? 315}
      height="100%"
      src={props.url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
