import React, { MemoExoticComponent, ReactElement } from "react";
import WorldShootsContent from "./stories/WorldShoots/Worldshoots.tsx";

const EventsContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [
    WorldShootsContent,
  ];
  return (
    <section>
      {Contents.map(
        (Content: MemoExoticComponent<() => ReactElement>, index: number) => (
          <Content key={"events_" + index} />
        ),
      )}
    </section>
  );
});

export default EventsContent;
