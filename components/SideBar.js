import styled from "styled-components";
import Image from "next/image";
import { Button } from "./Form/components";

import { getGitHubUserData } from "redux/gitHubSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const userLinks = [
  {
    label: "Lagos, Nigeria",
    icon: (
      <svg
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
    ),
  },
  {
    label: "nefejames@yahoo.com",
    icon: (
      <svg
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
        ></path>
      </svg>
    ),
  },
  {
    label: "https://daddynefs.vercel.app",
    icon: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
      >
        <path
          fillRule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        ></path>
      </svg>
    ),
  },
  {
    label: "@nefe_james",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 273.5 222.3"
        width="16"
      >
        <path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"></path>
      </svg>
    ),
  },
];

export default function SideBar({}) {
  const dispatch = useDispatch();
  const { userData, loading } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getGitHubUserData());
  }, [dispatch]);

  if (loading && !userData) {
    return <p>loading...</p>;
  }

  if (userData.items) {
    return (
      <StyledSideBar>
        <div className="user-container">
          <div className="avatar">
            <Image alt="GitHub user" src="/default-img.png" layout="fill" />
          </div>

          <div className="user-name-info">
            <h1>Emadamerho-Atori Nefe</h1>

            <span className="username">{userData.items[0].login}</span>
          </div>
        </div>

        <p className="user-bio">
          Front end web developer and technical writer - always learning{" "}
        </p>

        <Button btnText="Edit profile" padding="0.5rem 1.6rem" fullWidth />

        <div className="user-stats">
          <a href="#">
            <svg
              text="muted"
              fill="#8b949e"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
              ></path>
            </svg>
            <span>31</span>
            followers
          </a>{" "}
          ·{" "}
          <a href="#">
            <span>139</span>
            following
          </a>
        </div>

        <div className="user-links">
          <ul>
            {userLinks.map((link) => (
              <li key={link.label}>
                {link.icon} {link.label}{" "}
              </li>
            ))}
          </ul>
        </div>
      </StyledSideBar>
    );
  } else return <p>loading...</p>;
}

const StyledSideBar = styled.div`
  --accent-grey: #57606a;
  margin-bottom: 2rem;

  .user-container {
    display: flex;

    .avatar {
      width: 8rem;
      height: 8rem;
      margin-right: 16px;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
    }

    @media (min-width: 770px) {
      flex-direction: column;
      margin-bottom: 0;

      .avatar {
        width: 100%;

        height: 296px;
        margin-right: 0;
      }
    }
  }

  .user-name-info {
    margin-top: 1.6rem;

    h1 {
      font-size: var(--font-3xl);
      line-height: 1.25;
      font-weight: 600;
    }

    .username {
      color: var(--accent-grey);
      font-size: var(--font-2xl);
      line-height: 24px;
      font-weight: 300;
    }
  }

  .user-bio {
    font-size: var(--font-xl);
    margin: 1.6rem 0;
  }

  button {
    margin-bottom: 1.6rem;
  }

  .user-stats {
    display: flex;
    align-items: center;
    font-size: var(--font-lg);
    margin-bottom: 1.6rem;

    a {
      color: var(--accent-grey);
      text-decoration: none;

      display: flex;
      align-items: center;

      svg {
        fill: currentColor;
        margin-right: 0.4rem;
      }

      span {
        color: var(--grey-primary);
        margin-right: 0.4rem;
        font-weight: 600;
      }

      &:first-child {
        margin-right: 0.4rem;
      }

      &:last-child {
        margin-left: 0.4rem;
      }

      &:hover {
        color: var(--link-hover-color);

        span {
          color: inherit;
        }
      }
    }
  }

  .user-links {
    li {
      font-size: var(--font-lg);
      padding: 0.3rem 0;
      list-style: none;
      display: flex;
      gap: 0.8rem;

      &:not(:first-child) {
        &:hover {
          cursor: pointer;
          color: var(--link-hover-color);
          text-decoration: underline;
        }
      }
    }

    svg {
      fill: var(--accent-grey);
    }
  }
`;
