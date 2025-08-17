import React, { MemoExoticComponent, ReactElement } from "react";
import ClubShirts from "./stories/ClubShirts.tsx";
import ContentWithStories from "../../../components/Content/ContentWithStories.tsx";

const MembersContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [ClubShirts];

  return (
    <section>
      <ContentWithStories type={"member"} Contents={Contents} />
    </section>
  );
});

export default MembersContent;
