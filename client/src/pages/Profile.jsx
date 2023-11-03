import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div className="container my-1">
      <>
        {user ? (
          <div className="container my-1">
            <h1>
              {" "}
              This is {user.firstName} {user.lastName} profile
            </h1>
          </div>
        ) : null}
      </>
      <Link to="/">← Back to Games</Link>
    </div>
  );
};

export default Profile;
