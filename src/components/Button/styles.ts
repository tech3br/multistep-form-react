import styled from "styled-components";

export const Container = styled.button<{ outline?: boolean }>`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;

  background-color: ${({ outline }) => (outline ? "transparent" : "#25cd89")};
  color: ${({ outline }) => (outline ? "#25cd89" : "#ffffff")};
  border: ${({ outline }) => (outline ? "1px solid #25cd89" : "none")};
`;
