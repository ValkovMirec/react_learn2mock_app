import React, { useContext } from "react";
import ApplicationContext from "../utils/ApplicationContext";
import JsonComponent from "./JsonComponent";

export default function TodoModel() {
  const ctx = useContext(ApplicationContext);

  return (
    <ApplicationContext.Consumer>
      {({ todos }) => {
        return (
          <div>
            <JsonComponent value={todos} />
          </div>
        );
      }}
    </ApplicationContext.Consumer>
  );
}
