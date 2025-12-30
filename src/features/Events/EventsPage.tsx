import React, { ReactElement } from "react";
import EventsContent from "./EventsContent";

/**
 * EventsPage is a memoized React functional component that serves as a wrapper
 * for the EventsContent component. It is used to render the content related to events
 * and optimises re-rendering by leveraging React.memo.
 *
 * This component does not accept any props.
 *
 * @type {React.MemoExoticComponent<() => ReactElement>}
 * @returns {ReactElement} The rendered JSX for the EventsPage, which includes the EventsContent component.
 */
const EventsPage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  (): ReactElement => {
    return (
      <>
        <EventsContent />
      </>
    );
  },
);

export default EventsPage;
