import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["vipul", "vidhi", "chinky"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };

  const handleClick = () => {
    console.log("You clicked");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click</button>
      <button
        onClick={() => {
          handleClick2("Vipul");
        }}
      >
        Click
      </button>
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click
      </button>
    </main>
  );
};

export default Content;
