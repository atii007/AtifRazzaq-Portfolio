import Image, { StaticImageData } from "next/image";
import React from "react";

type themeProps = {
  color: string;
  img: StaticImageData;
  changeColor: (value: string) => void;
};

const ThemeItem = ({ color, img, changeColor }: themeProps) => {
  return (
    <Image
      src={img}
      alt=""
      className="theme_img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ThemeItem;
