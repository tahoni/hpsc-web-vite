import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

export const leftShooterImage: string =
  "/assets/images/layout/shooter-left-transparent.png";
export const rightShooterImage: string =
  "/assets/images/layout/shooter-right-transparent.png";

export const leftShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: leftShooterImage,
    description: "Shooter",
  });

export const rightShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: rightShooterImage,
    description: "Shooter",
  });
