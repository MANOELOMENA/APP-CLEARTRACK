import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import perfil from '../../public/perfil.png'

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const NavButton = styled(NavLink)`
  margin-left: 15px;
  text-decoration: none;
`;

const Button = styled.button`
  background-color: white;
  color: #000;
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #000;
    color: white;
    border-color: #000;
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavButton as={NavLink} to="/" exact>
        <Button>Home</Button>
      </NavButton>
      <NavButton as={NavLink} to="/sobre">
        <Button>Sobre</Button>
      </NavButton>
      <NavButton as={NavLink} to="/contato">
        <Button>Contato</Button>
      </NavButton>
      <UserImage src={perfil} alt="User" />
    </NavBarContainer>
  );
};

export default NavBar;

