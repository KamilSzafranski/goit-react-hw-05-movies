import styled from "styled-components";

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CastItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  flex-basis: calc((100%-90px) / 10);
`;

export const CastText = styled.p`
  padding: 5px 0;
  font-size: 14px;
`;

export const CastImage = styled.img`
  width: 100%;
`;
