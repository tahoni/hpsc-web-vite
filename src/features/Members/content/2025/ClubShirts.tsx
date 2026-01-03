import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import { clubShirts2024Image } from "../../MemberConstants.tsx";

/**
 * `ClubShirts` is a React functional component that renders an article element displaying
 * the club shirts section with an image and related description.
 *
 * The component is memoized using `React.memo` to prevent unnecessary re-renders.
 *
 * It includes:
 * - A heading for the Club Shirts section.
 * - An image rendering the club shirts for 2024 with specified properties such as source,
 *   alternative description, fluidity, and width.
 *
 * This component does not take any props and returns a React element.
 */
const ClubShirts = React.memo((): ReactElement => {
  return (
    <article>
      <h3>Club Shirts</h3>
      <br />
      <Image
        src={clubShirts2024Image.image}
        alt={clubShirts2024Image.description}
        fluid
        width={640}
      />
    </article>
  );
});

export default ClubShirts;
