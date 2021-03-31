import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="google.com.br">
        <FaHome size={24} />
      </a>
      <a href="google.com.br">
        <FaUserAlt size={24} />
      </a>
      <a href="google.com.br">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
