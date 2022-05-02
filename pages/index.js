import Head from "next/head";

import Form from "@components/Form/Form";
import ReposContainer from "@components/ReposContainer";
import SideBar from "@components/SideBar";
import Navbar from "@layout/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <Head>
        <title>Changera&rsquo;s GitHub Clone </title>
      </Head>

      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="repos-container">
          <Navbar />
          <Form />
          <ReposContainer />
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  --sidebar-width: 296px;
  --layout-gutter: 24px;
  --gap: 3rem;

  .container {
    margin-top: 2.4rem;

    display: flex;
    flex-direction: column;

    @media (min-width: 770px) {
      flex-direction: row;
      gap: var(--gap);

      .sidebar {
        width: var(--sidebar-width);
      }

      .repos-container {
        flex: 1;
      }
    }
  }
`;
