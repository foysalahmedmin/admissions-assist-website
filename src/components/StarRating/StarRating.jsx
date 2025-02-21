<<<<<<< HEAD
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
>>>>>>> update-project/main

const StarRating = ({
  rating,
  out_of,
  starSize,
  starColor,
  className,
  clickable = false,
  setRating,
}) => {
  const [rating_show, setRating_show] = useState(rating || 0);
  const star_color = starColor || "#ff7f45";
  const star_size = parseInt(starSize) || 24;
  const gap = starSize / 5;
  useEffect(() => {
<<<<<<< HEAD
    if (setRating) {
      setRating(rating_show);
    }
  }, [rating_show]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: gap + "px" }}>
      {Array.from(
        Array(
          Math.floor(
            (out_of || 5) < rating_show ? out_of || 5 : rating_show || 0
          )
        ).keys()
      ).map((x, i) => (
=======
    !setRating && setRating_show(rating);
    if (setRating) {
      setRating(rating_show);
    }
  }, [rating_show, rating]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: gap + "px" }}>
      {Array?.from(
        Array(
          Math?.floor(
            (out_of || 5) < rating_show ? out_of || 5 : rating_show || 0
          )
        ).keys()
      )?.map((x, i) => (
>>>>>>> update-project/main
        <span
          onClick={() => setRating_show(i + 1)}
          key={i}
          style={{
            fontSize: star_size + "px",
            color: star_color,
            cursor: clickable ? "pointer" : "",
          }}
          className={twMerge("material-icons-outlined", className)}
        >
          star
        </span>
      ))}
      {!Number.isInteger(rating_show) && (out_of || 5) >= rating_show && (
        <span
          style={{
            fontSize: star_size + "px",
            color: star_color,
          }}
          className={twMerge("material-icons-outlined", className)}
        >
          star_half
        </span>
      )}
      {Array.from(
        Array(
          Math.ceil(
            (out_of || 5) - Math.ceil(rating_show) > 0 &&
              (out_of || 5) - Math.ceil(rating_show)
          )
        ).keys()
      ).map((x, i) => (
        <span
          onClick={() => setRating_show(rating_show + i + 1)}
          key={i}
          style={{
            fontSize: star_size + "px",
            opacity: "0.5",
            cursor: clickable ? "pointer" : "",
          }}
          className={twMerge("material-icons-outlined", className)}
        >
          star
        </span>
      ))}
    </div>
  );
};

export default StarRating;
