import React, { MemoExoticComponent, ReactElement } from "react";
import ClubShirts from "./stories/ClubShirts.tsx";

const MembersContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [ClubShirts];
  return (
    <>
      {Contents.map((Content: MemoExoticComponent<() => ReactElement>, index: number) => (
        <Content key={"member_" + index} />
      ))}
    </>
  );
});

export default MembersContent;
