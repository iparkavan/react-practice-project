import React from "react";

const Child = React.memo(
  ({ value, onClick }: { value: number; onClick: () => void }) => {
    console.log("Child component rendered");
    return (
      <div>
        Child: {value}
        <button onClick={onClick}>Change Value</button>
      </div>
    );
  },
);

export default Child;
