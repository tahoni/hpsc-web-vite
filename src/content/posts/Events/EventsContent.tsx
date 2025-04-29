import React, { MemoExoticComponent, ReactElement } from "react";
import WorldShoots from "./stories/Worldshoots.tsx";

const EventsContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [WorldShoots];
  return (
    <>
      {Contents.map(
        (Content: MemoExoticComponent<() => ReactElement>, index: number) => (
          <article>
            <Content key={"events_" + index} />
          </article>
        ),
      )}
    </>
  );
});

export default EventsContent;
