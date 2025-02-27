import ClubShirts from "./stories/Clubshirts/ClubShirts.tsx";
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
