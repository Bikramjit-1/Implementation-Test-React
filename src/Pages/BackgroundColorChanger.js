import React from "react";
import { useParams } from "react-router";

export const BackgroundColorChanger = () => {
  let params = useParams();

  return (
    <main style={{ height: "100vh", backgroundColor: params.colorname }}>
      Background Color Changer
    </main>
  );
};
