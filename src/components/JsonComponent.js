import React from "react";

// Reusable component i can use, for rendering any generated data, i might add

export default function JsonComponent(value, replacer = null, space = 4) {
  return (
    <pre>
      <code>{JSON.stringify(value, replacer, space)}</code>
    </pre>
  );
}
