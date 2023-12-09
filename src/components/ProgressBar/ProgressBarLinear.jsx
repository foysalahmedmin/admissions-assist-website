const ProgressBarLinear = ({
  percentage,
  size,
  strokeSize,
  className,
  children,
}) => {
  const barWidth = parseInt(size) || "100%";
  const barHeight = strokeSize || 4;

  return (
    <div style={{ width: barWidth + "px" }} className={`${className} relative`}>
      <div className="">{children}</div>
      <svg
        width={barWidth}
        height={barHeight}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height={"100%"}
          rx={"5px"}
          ry={"5px"}
          fill="#E5E7EB" // Background color
        />
        <rect
          x="0"
          y="0"
          width={`${percentage}%`}
          height={"100%"}
          rx={"5px"}
          ry={"5px"}
          fill="#1BABA1" // Progress bar color
        />
      </svg>
    </div>
  );
};

export default ProgressBarLinear;
