import React, { useContext } from "react";
import ApplicationContext from "../utils/ApplicationContext";
import JsonComponent from "./JsonComponent";

export default function UserModel() {
  const ctx = useContext(ApplicationContext);

  return (
    <ApplicationContext.Consumer>
      {({ users }) => {
        return (
          <div className="json-element">
            <JsonComponent value={users} />
          </div>
        );
      }}
    </ApplicationContext.Consumer>
  );
}
