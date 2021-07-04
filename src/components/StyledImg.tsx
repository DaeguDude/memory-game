import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 0.5rem;
  box-shadow: 0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.45);

  &:hover {
    cursor: pointer;
  }
`;

export { StyledImg };
