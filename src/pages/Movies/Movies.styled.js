import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchForm = styled.form`
  margin-top: 20px;
  margin-left: 30px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 4px;
  margin-right: 30px;
`;

export const Text = styled.p`
  margin-left: 30px;
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

export const Item = styled.li`
  list-style: none;
`;

