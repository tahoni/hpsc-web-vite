import React, { ReactElement } from "react";

const MembersContent = React.lazy(
  () => import("../../content/posts/Members/MembersContent.tsx"),
);

/**
 * A React functional component wrapped with React.memo for optimization.
 * The MembersPage component represents a page that renders the `MembersContent` component.
 * It is structured to prevent unnecessary re-renders by leveraging React.memo.
 *
 * This component is useful for displaying `MembersContent` and ensures a stable output
 * unless the props passed to it (if any in future extension) change.
 */
const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <MembersContent />
    </>
  );
});

export default MembersPage;
