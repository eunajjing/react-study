import React from "react";

const profileData = {
  jordan: {
    name: "jordan",
    description: "개발자"
  },
  james: {
    name: "james",
    description: "학생"
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
