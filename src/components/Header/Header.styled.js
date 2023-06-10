import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  justify-content: flex-start;
  margin-left: 30px;
  border-bottom: 2px solid #000;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Navlink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  &.active {
    color: #f00;
  }
`;
