import styled from "styled-components";

export default function Input({
  name = "query",
  type = "text",
  placeholder = "Find a repository…",
}) {
  return <StyledInput name={name} type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  border-radius: 0.6rem;
  padding: 0.8rem 1.6rem;
  padding-left: 1.2rem;
  font-size: var(--font-lg);
  outline: none;
  color: var(--grey-primary);
  border: 1px solid var(--btn-border-color);

  ::placeholder {
    color: #6e7781;
  }
`;
