import React from "react";
import { DivRatingStyled } from "./DivRatingStyled";

interface InfoRatingProps {
  notation: number;
}

const Rating: React.FC<InfoRatingProps> = ({ notation }) => {
  return (
    <>
      <DivRatingStyled rating={notation} />
    </>
  );
};

export default Rating;
