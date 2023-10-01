const StarRating = ({ rating, out_of }) => {
  return (
    <div className="flex gap-1 items-center">
      {Array.from(
        Array(
          Math.floor((out_of || 5) < rating ? out_of || 5 : rating || 0)
        ).keys()
      ).map((x, i) => (
        <span key={i} className="material-icons-outlined text-secondary">
          star
        </span>
      ))}
      {!Number.isInteger(rating) && (out_of || 5) >= rating && (
        <span className="material-icons-outlined text-secondary">
          star_half
        </span>
      )}
      {Array.from(
        Array(
          Math.ceil((out_of || 5) - Math.ceil(rating) > 0 && (out_of || 5) - Math.ceil(rating))
        ).keys()
      ).map((x, i) => (
        <span key={i} className="material-icons-outlined opacity-50">
          star
        </span>
      ))}
    </div>
  );
};

export default StarRating;
