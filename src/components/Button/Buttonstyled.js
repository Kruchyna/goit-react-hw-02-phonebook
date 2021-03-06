import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.btnFontColor};
`;
