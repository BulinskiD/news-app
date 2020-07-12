import React from "react";
import Posts from "./components/Posts";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

const Container = styled(Box)`
  width: 80%;
  margin: 15px auto 0 auto;
`;

function App() {
  return (
    <Container>
      <Posts />
    </Container>
  );
}

export default App;
