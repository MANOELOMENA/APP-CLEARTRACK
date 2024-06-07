import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';
import LogoImage from '../../public/logo.png'; // Importe o caminho da imagem da logo

const HeaderContainer = styled.header`
  background-color: #0D63AC;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  z-index: 1000;
`;

const Title = styled.h1`
  position: relative;
  left: -475px;
  margin: 0;
  font-size: 1.5em;
`;

const Logo = styled.img`
  width: 40px; /* Ajuste conforme necessário */
  height: auto;
  margin-right: 10px; /* Adiciona margem para separar a logo do texto */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Title>CLEARTRACK</Title>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
