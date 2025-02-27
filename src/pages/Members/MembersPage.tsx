import React, { ReactElement } from "react";

const MembersContent = React.lazy(() => import("../../content/posts/Members/MembersContent.tsx"));

const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <MembersContent />
    </>
  );
});

export default MembersPage;
