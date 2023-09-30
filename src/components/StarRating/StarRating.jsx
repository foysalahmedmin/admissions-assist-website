const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 items-center text-secondary">
      {Array.from(Array(Math.floor(rating)).keys()).map((x, i) => (
        <span className="material-icons-outlined">star</span>
      ))}
      {!Number.isInteger(rating) && (
        <span className="material-icons-outlined">star_half</span>
      )}
    </div>
  );
};

export default StarRating;
