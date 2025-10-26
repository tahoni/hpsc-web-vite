import React from "react";
import NewsContent from "../../content/posts/News/NewsContent.tsx";

/**
 * NewsPage is a React functional component wrapped with React.memo for performance optimization.
 * It renders the NewsContent component as part of its JSX structure.
 * React.memo ensures that the component only re-renders when its props change.
 */
const NewsPage = React.memo(() => {
  return (
    <>
      <NewsContent />
    </>
  );
});

export default NewsPage;
