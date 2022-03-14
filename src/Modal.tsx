import React, { ComponentPropsWithoutRef } from "react";
import {
  Clickable,
  colors,
  globalTransitionSettings,
  margins,
} from "./css/css";
import styled from "styled-components";
import closeSvg from "./res/images/close.svg";
import { useHotkeys } from "react-hotkeys-hook";

interface Props extends ComponentPropsWithoutRef<"div"> {
  showModal: boolean;
  handleClose?: () => void;
}

export const Modal: React.FC<Props> = ({
  showModal,
  handleClose,
  children,
  ...rest
}) => {
  useHotkeys(
    "esc",
    (e) => {
      e.preventDefault();
      if (handleClose) handleClose();
    },
    {},
    []
  );

  return (
    <Backdrop onClick={handleClose} isVisible={showModal} {...rest}>
      <Content onClick={(e) => e.stopPropagation()} isVisible={showModal}>
        {handleClose && (
          <TopRightFixedContainer>
            <Clickable onClick={handleClose}>
              <img
                src={closeSvg}
                alt={"close modal"}
                style={{ color: colors.black }}
              />
            </Clickable>
          </TopRightFixedContainer>
        )}
        {children}
      </Content>
    </Backdrop>
  );
};

const Backdrop = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${margins.size6};

  transition: ${globalTransitionSettings};
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  visibility: ${(p) => (p.isVisible ? "visible" : "hidden")};
`;

const Content = styled.div<{ isVisible: boolean }>`
  width: 100%;
  max-width: 600px;
  background-color: ${colors.white};
  padding: ${margins.size4};
  border: 5px;
  text-align: start;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;

  transform: ${globalTransitionSettings};
  transform: translateY(${(p) => (p.isVisible ? 0 : "-50px")});
`;

const TopRightFixedContainer = styled.div`
  position: absolute;
  top: ${margins.size3};
  right: ${margins.size3};
`;
