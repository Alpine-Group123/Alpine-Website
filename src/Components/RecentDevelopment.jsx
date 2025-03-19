const RecentDevelopment = function ({ icons, title, description }) {
  return (
    <div className="col-sm shadow p-3 rounded m-4">
      <h4 className="text-left">{title}</h4>
      <p>{description}</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default RecentDevelopment;
