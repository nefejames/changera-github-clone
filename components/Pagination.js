import styled from "styled-components";
import { StyledButton } from "./Form/components/Button";

export default function Pagination() {
  return (
    <StyledPagination>
      <PaginationButton>Previous</PaginationButton>
      <PaginationButton>Next</PaginationButton>
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.6rem 0;
`;

const PaginationButton = styled(StyledButton)`
  color: var(--link-hover-color);

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    opacity: 0.6;
    cursor: auto;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;

    &:hover {
      color: #fff;
      background: var(--link-hover-color);
    }
  }
`;
