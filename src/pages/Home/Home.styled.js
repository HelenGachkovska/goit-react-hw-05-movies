import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  list-style: none;
`;

export const ItemLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  :hover {
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  margin-left: 30px;
  font-size: 30px;
  font-weight: 700;
`;
