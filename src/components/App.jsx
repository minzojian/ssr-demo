import React from "react";
import styled from "@emotion/styled";

function App() {
  const MyDiv = styled("div")({ fontSize: 12, color: "red" });

  return (
    <div>
      <MyDiv>Text2</MyDiv>
    </div>
  );
}

export default App;
