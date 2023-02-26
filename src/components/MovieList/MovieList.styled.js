import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  position: relative;
  margin-bottom: 5px;
  font-size: 18px;
  transition: transform 300ms ease-in, color 300ms ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.02);
    color: #2196f3;
  }
  &::before {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    content: "";
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("https://cdn-icons-png.flaticon.com/512/3658/3658959.png");
  }
`;
