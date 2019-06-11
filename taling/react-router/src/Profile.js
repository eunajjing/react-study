import React from "react";

const profileData = {
  jordan: {
    name: "1111",
    description: "11111111111"
  },
  james: {
    name: "2222",
    description: "222222222222"
  }
};

const Profile = ({
  match: {
    params: { username }
  }
}) => {
  const profile = profileData[username];

  if (!profile) {
    return <div>user not exist!</div>;
  }
  return (
    <div>
      <h3>
        {username} - {profile.name}
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
