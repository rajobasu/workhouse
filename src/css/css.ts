import styled from "styled-components";

export const colors = {
  black: "#000000",
  blackLight: "#A9ABB4",
  darkBlue: "#1e009f",
  lightBlue: "#4285F4",
  white: "#FFFFFF",
  yellow: "#ebb134",
  lightYellow: "#ffd77a",
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
  align-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: ${margins.size5};
  padding-bottom: ${margins.size5};
`;

export interface TextType {
  color?: string;
  bold?: boolean;
  size?: string;
}

export const Text = styled.p<TextType>`
  color: ${(p) => p.color || colors.black};
  font-size: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
`;

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: ${colors.yellow};
  margin: 0 auto;
  width: 200px;
  padding: 3px;
  border-radius: 10px;

  &:hover {
    background-color: ${colors.lightYellow};
  }
`;
