import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  main {
    padding: 0 1rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
  }
`;
