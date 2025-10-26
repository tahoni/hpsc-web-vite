import React, { MemoExoticComponent, ReactElement } from "react";

interface ContentWithStoriesProps {
  type: string;
  Contents: MemoExoticComponent<() => ReactElement>[];
}

/**
 * React memoised functional component that renders a list of story content components.
 *
 * This component receives an array of content components (`Contents`) through the props
 * and maps over the array to render each content component. Each rendered component
 * is assigned a unique key based on its index in the array.
 *
 * The `React.memo` wrapper is used to optimise rendering by memoising the component's
 * output, preventing unnecessary re-renders when the input props remain unchanged.
 *
 * @param {ContentWithStoriesProps} props - The props for the component, including an array of components to render as `Contents`.
 * @returns {ReactElement} JSX element that renders the list of story content components.
 */
const ContentWithStories = React.memo(
  (props: ContentWithStoriesProps): ReactElement => {
    return (
      <>
        {props.Contents.map(
          (Content: MemoExoticComponent<() => ReactElement>, index: number) => (
            <Content key={"type_" + index} />
          ),
        )}
      </>
    );
  },
);

export default ContentWithStories;
