import React from "react";
import apiclient from "../utils/apiclint";

const UserProfile = () => {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    apiclient
      .get("/profile")
      .then((res) => setProfile(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
