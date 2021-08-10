import React from "react";
import { SafeEnvorimentContainer } from "./SafeEnvoriment.style";
import { Container } from "@material-ui/core";

const SafeEnvoriment = () => {
  return (
    <SafeEnvorimentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvorimentContainer>
  );
};

export default SafeEnvoriment;
