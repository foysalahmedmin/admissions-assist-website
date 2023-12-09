const ProgressBarCircle = ({
  percentage,
  size,
  strokeSize,
  className,
  children,
}) => {
  const circleSize = size || "100%";
  const strokeWidth = strokeSize || 4;
  const radius = circleSize / 2 - strokeWidth;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={`${className} relative inline-block`}>
      <svg
        width={circleSize}
        height={circleSize}
        className="transform -rotate-90"
      >
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth + "px"}
          strokeLinecap="round"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="transparent"
          stroke="#1BABA1"
          strokeWidth={strokeWidth + "px"}
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div
        style={{ padding: strokeWidth + "px" }}
        className="absolute inset-0 h-full w-full flex items-center justify-center text-center overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};

export default ProgressBarCircle;
