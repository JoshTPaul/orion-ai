"use client";
import React from "react";
import { styled } from "styled-components";
import "../../globalStyles.css";

const Wrapper = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e4e7ec;
  font-family: Inter;
  flex-grow: 1;
  display: grid;
  place-items: center;

  #card-bg {
    width: 400px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 24px;
    color: #ffffff;
    background-color: #ffffff;
  }

  #card-heading {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #101828;
  }

  #card-img {
    width: 268px;
    height: 121px;
    border-radius: 4px;
    color: #f2f4f7;
    background-color: red;
    margin-bottom: 1rem;
  }

  #card-para {
    font-size: 14px;
    margin-bottom: 1rem;
    color: black;
  }

  button {
    height: 33px;
  }
  #card-button-1-bg {
    background-color: #101828;
    color: #fcfdfd;
    border-radius: 4px;
    outline: none;
  }

  #card-button-2-bg {
    background-color: #ffffff;
    color: #101828;
    border-radius: 4px;
    outline: 1px solid #e4e7ec;
    margin-left: 0.5rem;
  }
`;

function CardPage() {
  return (
    <Wrapper>
      <div id="card-bg">
        <div id="card-heading">Card Heading</div>
        <div id="card-img"></div>
        <p id="card-para">
          Cards are used to group information about subjects and their related
          actions.
        </p>
        <button id="card-button-1-bg">
          <span id="card-button-1-text">Button</span>
        </button>
        {/* <button id="card-button-2-bg">
          <span id="card-button-2-text">Button</span>
        </button> */}
      </div>
    </Wrapper>
  );
}

export default CardPage;
