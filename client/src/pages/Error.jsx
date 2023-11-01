import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <h1>Error! Something went wrong</h1>
      <button type="button" className="btn btn-primary">
        <Link to="/"> Click to go back</Link>
      </button>
    </div>
  );
};

export default Error;
