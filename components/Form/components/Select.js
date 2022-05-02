import styled from "styled-components";

export default function Select({ selectOptions }) {
  return (
    <StyledSelect>
      {selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  cursor: pointer;

  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  background: #f6f8fa;

  color: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border: 0.1rem solid var(--btn-border-color);
  box-shadow: var(--btn-shadow), var(--btn-inset-shadow);
`;
