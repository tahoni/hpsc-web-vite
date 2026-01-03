import React, { MemoExoticComponent, ReactElement } from "react";
import { ContentWithStories } from "@components/Content";
import { WorldShootsContent } from "./content/2025";

/**
 * EventsContent is a React functional component memoised using React.memo.
 * It represents a section specifically designed for rendering event-related content.
 * Within this component, it uses the `ContentWithStories` component to display
 * the provided list of event content components.
 *
 * The component uses a memoised array `Contents` which contains other React components
 * (like `WorldShootsContent`) that will be rendered as part of the event-related section.
 *
 * The `ContentWithStories` component is invoked with a fixed `type` value of "event",
 * ensuring it processes the content in the context of event-based data or functionality.
 *
 * The memoised nature of EventsContent ensures that it does not re-render unnecessarily,
 * improving performance when the props or state have not changed.
 *
 * @type {React.MemoExoticComponent<() => React.ReactElement>}
 */
const EventsContent: React.MemoExoticComponent<() => React.ReactElement> =
  React.memo((): ReactElement => {
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
