const Button = ({ style, className, text, icon, type, isLoading, ...rest }) => {
  // console.log(...rest);
  return (
    <button
      {...rest}
      style={style}
      className={`${
        className && className.includes("btn")
          ? className
          : text
          ? `primary-btn ${className}`
          : `rounded-btn ${className}`
      }`}
      type={type || "button"}
    >
      {text && <span>{text}</span>}
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
