import React, { MemoExoticComponent, ReactElement } from "react";
import ClubShirts from "./stories/ClubShirts.tsx";

const MembersContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [ClubShirts];
  return (
    <article>
      {Contents.map(
        (Content: MemoExoticComponent<() => ReactElement>, index: number) => (
          <article>
            <Content key={"member_" + index} />
          </article>
        ),
      )}
    </article>
  );
});

export default MembersContent;
