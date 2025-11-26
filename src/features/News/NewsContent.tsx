import React, { MemoExoticComponent, ReactElement } from "react";
import { ContentWithStories } from "@components/Content";

const EventContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [];

  return (
    <section>
      <ContentWithStories type={"news"} Contents={Contents} />
    </section>
  );
});

export default EventContent;
