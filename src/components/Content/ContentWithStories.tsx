import React, { MemoExoticComponent, ReactElement } from "react";

interface ContentWithStoriesProps {
  type: string;
  Contents: MemoExoticComponent<() => ReactElement>[];
}

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
