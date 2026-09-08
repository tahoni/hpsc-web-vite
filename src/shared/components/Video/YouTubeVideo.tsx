import { VideoProps } from "./VideoProps";

export type YouTubeVideoProps = VideoProps;

/**
 * A React functional component for rendering a YouTube video using an iframe.
 *
 * The `YouTubeVideo` component takes properties to configure the video URL and optionally its dimensions.
 * By default, the width is set to "100%" and the height is set to "100%".
 *
 * @param props - The properties to configure the YouTube video iframe.
 */
export const YouTubeVideo = (props: YouTubeVideoProps) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={props.url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
