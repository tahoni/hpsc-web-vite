import React, { ReactElement } from "react";
import EventsContent from "../../content/posts/Events/EventsContent";

const EventsPage = React.memo((): ReactElement => {
  return (
    <>
      <EventsContent />
    </>
  );
});

export default EventsPage;
