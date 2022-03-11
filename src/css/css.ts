import styled from "styled-components";

export const colors = {
  black: "#000000",
  blackLight: "#A9ABB4",
};

export const margins = {
  size1: "4px",
  size2: "8px",
  size3: "16px",
  size4: "24px",
  size5: "48px",
  size6: "128px",
};

export const WhiteBaseContainer = styled.div`
  background-color: azure;
  align-content: center;
  align-items: center;
`;

export interface TextType {
  color?: string;
  bold?: boolean;
  size?: string;
}

export const Text = styled.p<TextType>`
  color: ${(p) => p.color || colors.black};
  margin-bottom: ${margins.size2};
`;
