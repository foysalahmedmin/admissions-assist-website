// eslint-disable-next-line react/prop-types
const Overview = ({ overview }) => {
  return (
    <section className="py-14" id="overview">
      <div className="container mx-auto">
        <h2 className="title text-3xl mb-7">Overview</h2>
        <p>{overview}</p>
      </div>
    </section>
  );
};

export default Overview;
