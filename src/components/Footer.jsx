import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0D63AC;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 ClearTrack. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
