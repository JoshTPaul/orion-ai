"use client";
import React from "react";
import { styled } from "styled-components";
import "../../globalStyles.css";

const But = styled.div`
  width: 306px;
  height: 105px;
  top: 32px;
  left: 32px;
  padding: 3px 5px 3px 5px;
  background: #da2121;
  color: #da2121;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  display: grid;
  place-items: center;
  position: absolute;

  #button_1_text {
    color: #ffffff;
    /* width: 198px; */
  }
`;

// Test

const Button = () => {
  return (
    <div style={{ background: "white", width: "100%", height: "100vh" }}>
      <But id="button_1">
        <p id="button_1_text">Lorem Ipsum</p>
      </But>
    </div>
  );
};

export default Button;
