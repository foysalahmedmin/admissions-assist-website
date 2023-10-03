const ProgressBarCircle = ({ percentage, size, strokeSize }) => {
const circleSize = size || '48'
  const strokeWidth = strokeSize || 4;
  const radius = circleSize / 2 - strokeWidth;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
      >
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeWidth={`${strokeWidth}px`}
          r={radius}
          className="stroke-line fill-none"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          strokeWidth={`${strokeWidth}px`}
          r={radius}
          transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
          className="stroke-primary fill-none"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="font-bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressBarCircle;
