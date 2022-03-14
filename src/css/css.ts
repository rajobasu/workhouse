import styled from "styled-components";

export const globalTransitionSettings =
  "all 0.2s ease;  -moz-transition-property: none;";

export const colors = {
  black: "#000000",
  blackLight: "#A9ABB4",
  darkBlue: "#1e009f",
  lightBlue: "#4285F4",
  white: "#FFFFFF",
  yellow: "#ebb134",
  lightYellow: "#ffd77a",
  lightGreen: "#a3eea3",
  lightRed: "#f1a4a4",
};

export const margins = {
  size1: "4px",
  size2: "8px",
  size3: "16px",
  size4: "24px",
  size5: "48px",
  size6: "128px",
};

export interface TextType {
  color?: string;
  bold?: boolean;
  size?: string;
  center?: boolean;
}

export const Text = styled.p<TextType>`
  color: ${(p) => p.color || colors.black};
  font-weight: ${(p) => (p.bold ? "bold" : "normal")};
  font-size: 20px;
  text-align: ${(p) => (p.center ? "center" : "center")};
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  margin: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  margin: auto;
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

export const WhiteBaseContainer = styled(FlexColumn)`
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;

  align-items: center;
  text-align: center;
  horiz-align: center;
  max-width: 100vw;
  overflow: hidden;
`;

export const Clickable = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 0;
  flex-shrink: 0;
`;
