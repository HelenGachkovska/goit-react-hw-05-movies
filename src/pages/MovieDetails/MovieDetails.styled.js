import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  font-size: 20px;
  margin-left: 30px;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #7e7d7d;
  background-color: #d1d1d1;
  color: #000;

  :hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12), 0px 2px 3px rgba(0, 0, 0, 0.14),
      0px 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  padding-bottom: 20px;
  gap: 30px;
  border-bottom: 2px solid #000;
`;

export const MovieInfo = styled.div`
  padding: 20px 40px;
`;

export const InfoBox = styled.div`
  margin-left: 30px;
  padding: 10px 10px 10px 0;
  border-bottom: 2px solid #000;
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: #000;
  :hover {
    font-weight: 500;
  }
`;

export const InfoItem = styled.li`
  list-style: none;
`;

export const InfoList = styled.ul`
  padding: 0;
`;

export const Text = styled.p`
  margin-left: 30px;
`;
