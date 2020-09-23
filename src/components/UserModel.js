import React, { useContext } from "react";
import ApplicationContext from "../utils/ApplicationContext";

export default function UserModel() {
  const ctx = useContext(ApplicationContext);
  return <div>hello user model</div>;
}
