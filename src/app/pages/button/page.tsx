"use client";
import React from "react";
import { styled } from "styled-components";

const But = styled.div`
  width: 306px;
  height: 105px;
  top: 32px;
  left: 32px;
  padding: 3px 5px 3px 54px;
  background: #da2121;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  display: grid;
  place-items: center;
  position: absolute;
`;

// Test

const Button = () => {
  return <But id="button">Lorem Ipsum</But>;
};

export default Button;
