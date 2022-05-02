import Form from "@components/Form/Form";
import ReposContainer from "@components/ReposContainer";
import SideBar from "@components/SideBar";
import Navbar from "@layout/Navbar";
import Head from "next/head";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <StyledHome>
      <Head>
        <title>Changera&rsquo;s GitHub Clone </title>
      </Head>

      {!session && (
        <h2 className="not-logged-in">
          You have to log in to view the protected content
        </h2>
      )}

      {session && (
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
      )}
    </StyledHome>
  );
}

// search sidebar-main area css styles - responsive

const StyledHome = styled.div`
  --sidebar-width: 296px; //296
  --layout-gutter: 24px; //16px
  --gap: 3rem;

  .not-logged-in {
    font-size: 3rem;
    margin-top: 3rem;
  }

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

  .sidebar {
    /* background: blue; */
    /* outline: 1px solid red; */
  }

  .repos-container {
    /* background: red; */
    /* outline: 1px solid blue; */
  }
`;
