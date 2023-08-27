"use client";
import React from "react";
import { styled } from "styled-components";
import "../../globalStyles.css";

const Wrapper = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: 100vh;

  * {
    position: absolute;
  }

  #img {
    width: 971px;
    height: 618px;
    top: 141px;
    left: 469px;
    color: #f2f4f7;
    background-image: url("/assets/images/card-img.png");
    z-index: 0;
  }

  #heading {
    top: 353px;
    left: 168px;
    width: 973px;
    height: 174px;
    color: #ffffff;
    font-size: 144px;
    font-weight: 500;
    z-index: 1;
  }

  #para {
    top: 551px;
    left: 176px;
    width: 529px;
    height: 102px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    z-index: 1;
  }

  #button-bg {
    top: 677px;
    left: 168px;
    width: 200px;
    height: 48px;
    border-radius: 30px;
    color: #f2f2f2;
    background-color: #f2f2f2;
  }

  #button-text {
    top: 693px;
    left: 184px;
    width: 168px;
    height: 17px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
  }

  #ham {
    top: 32px;
    left: 30px;
    width: 30px;
    height: 21px;
    color: #ffffff;
    background-image: url("/assets/images/ham.png");
  }
`;

function CardPage() {
  return (
    <Wrapper>
      <div id="ham"></div>
      <h1 id="heading">EcoFarm Labs</h1>
      <p id="para">
        At EcoFarm Labs, we’re at the forefront of sustainable agricultural
        innovation. Our mission is to revolutionize farming practices by
        combining cutting-edge technology with eco-conscious methodologies. As a
        pioneer in the field of agri-tech, we specialize in developing and
        implementing advanced solutions that optimize crop production while
        minimizing environmental impact.
      </p>
      <div id="img"></div>
      <div id="button-bg"></div>
      <div id="button-text">Click Here to Get Started</div>
    </Wrapper>
  );
}

export default CardPage;
