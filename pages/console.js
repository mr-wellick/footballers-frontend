import React from "react";

const Console = () => {
  const { user_email, user_id } = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      Welcome {user_email} with id {user_id}
    </div>
  );
};

export default Console;
