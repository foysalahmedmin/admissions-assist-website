import { twMerge } from "tailwind-merge";

const StarRating = ({ rating, out_of, starSize, starColor, className }) => {
  const star_color = starColor || "#ff7f45"
  const star_size = parseInt(starSize) || 24;
  const gap = starSize / 5;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: gap + "px" }}>
      {Array.from(
        Array(
          Math.floor((out_of || 5) < rating ? out_of || 5 : rating || 0)
        ).keys()
      ).map((x, i) => (
        <span
          key={i}
          style={{
            fontSize: star_size + "px",
            color: star_color,
          }}
          className={twMerge("material-icons-outlined", className)}
        >
          star
        </span>
      ))}
      {!Number.isInteger(rating) && (out_of || 5) >= rating && (
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
            (out_of || 5) - Math.ceil(rating) > 0 &&
              (out_of || 5) - Math.ceil(rating)
          )
        ).keys()
      ).map((x, i) => (
        <span
          key={i}
          style={{
            fontSize: star_size + "px",
            opacity: "0.5",
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
