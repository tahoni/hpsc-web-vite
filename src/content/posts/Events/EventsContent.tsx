import React, { MemoExoticComponent, ReactElement } from "react";
import ContentWithStories from "../../../components/Content/ContentWithStories.tsx";
import WorldShootsContent from "./stories/WorldShoots/Worldshoots.tsx";

const EventsContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [
    WorldShootsContent,
  ];

  return (
    <section>
      <ContentWithStories type={"event"} Contents={Contents} />
    </section>
  );
});

export default EventsContent;
