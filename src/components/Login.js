import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Wrap>
      <Container>
        <img className="img_1" src="/images/cta-logo-one.svg" alt="" />
        <Signup>Get all Here</Signup>
        <Description>All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</Description>
        <img className="img_2" src="/images/cta-logo-two.png" alt="" />
      </Container>
      <Content />
    </Wrap>
  );
}

export default Login;

const Wrap = styled.div`
  overflow: hidden;
  height: 100vh;
  display:flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
`;

const Content = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;

`;


const Container = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
text-align:center;
width:100%;

`

const Signup = styled.a`
  background: #0063e5;
  color: #f9f9f9;
  display: flex;
  height: 108px;
  justify-content:center;
  align-items:center;
  width: 85%;
  max-width: 750px;
  max-height:100%;
  font-weight: bold;
  text-align: center;
  padding: 16.5px 0;
  letter-spacing:1.5px;
  font-size: 19px;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-radius:4px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover{
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  width: 80%;
  max-width: 650px;
  max-height: 560px;
  margin-bottom: 12px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;