import React, { ReactElement } from "react";
import MembersContent from "../../content/posts/Members/MembersContent.tsx";

const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <MembersContent />
    </>
  );
});

export default MembersPage;
