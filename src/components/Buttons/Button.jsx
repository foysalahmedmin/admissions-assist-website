import { useState } from "react";

const Button = ({ style, className, value, icon, isLoading }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  return (
    <button
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      style={style}
      className={`${
        className && className.includes("btn")
          ? className
          : value
          ? `primary-btn ${className}`
          : `rounded-btn ${className}`
      } ${isMouseDown ? "scale-95" : "animate-pop"}`}
    >
      {value && <span>{value}</span>}
      {icon && !isLoading && (
        <span className="flex items-center my-auto">{icon}</span>
      )}
      {isLoading && (
        <div className="w-4 h-4 border-4 border-dashed rounded-full animate-spin border-white"></div>
      )}
    </button>
  );
};

export default Button;
