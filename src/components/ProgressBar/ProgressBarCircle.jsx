const ProgressBarCircle = ({
  percentage,
  size,
  strokeSize,
  percentSize,
  className,
  text,
}) => {
  const circleSize = size || "48";
  const strokeWidth = strokeSize || 4;
  const radius = circleSize / 2 - strokeWidth;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={`relative ${className}`}>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
        className="transform -rotate-90"
      >
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth={`${strokeWidth}px`}
          strokeLinecap="round"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          fill="transparent"
          stroke="#1BABA1"
          strokeWidth={`${strokeWidth}px`}
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span
            style={{ fontSize: percentSize }}
            className="text-lg font-bold text-title mb-2"
          >
            {percentage}%
          </span>
          {text || ""}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCircle;
