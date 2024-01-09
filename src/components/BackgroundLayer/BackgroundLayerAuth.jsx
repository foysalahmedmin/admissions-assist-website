/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {twMerge} from "tailwind-merge";

const BackgroundLayerAuth = ({
  image_url,
  bg_position,
  style,
  className,
  children,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${image_url || "/background/common.png"})`,
      }}
      className={twMerge("bg-no-repeat bg-cover bg-right", bg_position)}
    >
      <div
        style={style}
        className={twMerge("bg-primary-500 bg-opacity-80", className)}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundLayerAuth;
