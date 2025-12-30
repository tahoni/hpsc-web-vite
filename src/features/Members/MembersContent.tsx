import React, { MemoExoticComponent, ReactElement } from "react";
import ClubShirts from "./content/ClubShirts";
import { ContentWithStories } from "@components/Content";

/**
 * MembersContent is a memoized React functional component that renders a section containing
 * member-related content. The component uses React.memo to optimise rendering performance
 * by memoising the output and preventing unnecessary re-renders.
 *
 * This component uses an array of content components, which are passed to the ContentWithStories
 * component for rendering. It is designed to handle "member" type content specifically.
 *
 * The component relies on external dependencies such as React.memo, and assumes the existence of
 * reusable components like ContentWithStories and ClubShirts.
 */
const MembersContent = React.memo((): ReactElement => {
  const Contents: MemoExoticComponent<() => ReactElement>[] = [ClubShirts];

  return (
    <section>
      <ContentWithStories type={"member"} Contents={Contents} />
    </section>
  );
});

export default MembersContent;
