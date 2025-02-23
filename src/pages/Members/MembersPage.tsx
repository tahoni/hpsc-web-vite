import React, { ReactElement } from "react";

const MemberContent = React.lazy(() => import("../../content/posts/Members/Members.tsx"));

const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <MemberContent />
    </>
  );
});

export default MembersPage;
