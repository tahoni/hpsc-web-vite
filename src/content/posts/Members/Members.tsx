import ClubShirts from "./stories/ClubShirts.tsx";
import React, { MemoExoticComponent, ReactElement } from "react";

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
