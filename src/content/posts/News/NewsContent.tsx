import React, { MemoExoticComponent, ReactElement } from "react";
import ContentWithStories from "../../../components/Content/ContentWithStories.tsx";

const EventContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [];

  return (
    <section>
      <ContentWithStories type={"news"} Contents={Contents} />
    </section>
  );
});

export default EventContent;
