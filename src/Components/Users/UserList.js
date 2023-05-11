import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const listJsx = props.userData.map((data) => {
    return <UserItem singleData={data} key={data.id} />;
  });

  return (
    <Card className={styles.users}>
      <ul>{listJsx}</ul>
    </Card>
  );
};

export default UserList;
