import styled from "styled-components";
import Pagination from "./Pagination";
import RepoCard from "./RepoCard";

export default function ReposContainer() {
  return (
    <Container>
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />

      <Pagination />
    </Container>
  );
}
const Container = styled.div``;
