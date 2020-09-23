import React, { useContext } from "react";
import ApplicationContext from "../utils/ApplicationContext";

export default function TodoModel() {
  const ctx = useContext(ApplicationContext);

  const JsonComponent = (value, replacer = null, space = 4) => {
    return (
      <pre>
        <code>{JSON.stringify(value, replacer, space)}</code>
      </pre>
    );
  };

  return (
    <ApplicationContext.Consumer>
      {({ todos }) => {
        return (
          <div className="json-element">
            <JsonComponent value={todos} />
          </div>
        );
      }}
    </ApplicationContext.Consumer>
  );
}
