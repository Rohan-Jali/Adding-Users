import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <li>
        {props.singleData.username} {props.singleData.age}
      </li>
    </div>
  );
};

export default UserItem;
