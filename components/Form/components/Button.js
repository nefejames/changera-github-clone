import styled from "styled-components";

export default function Button({
  btnText,
  textColor,
  bgColor,
  padding,
  fullWidth,
  icon,
}) {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      padding={padding}
      fullWidth={fullWidth}
    >
      {icon ? icon : null}

      {btnText}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  color: ${(props) => (props.textColor ? props.textColor : "#24292f")};
  background: ${(props) => (props.bgColor ? props.bgColor : "#f6f8fa")};
  padding: ${(props) => (props.padding ? props.padding : "0.8rem 1.6rem")};
  font-size: var(--font-lg);
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => props.fullWidth && "100%"};
  border-radius: 0.6rem;
  border: 1px solid var(--btn-border-color);

  display: flex;
  justify-content: center;

  transition: 0.5s ease-in-out;
  transition-property: all;

  svg {
    fill: currentColor;
    margin-right: 0.5rem;
  }

  &:hover {
    background: var(--btn-hover-bg-color);
  }
`;
