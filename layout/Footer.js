import styled from "styled-components";

const footerLinks = [
  "terms",
  "privacy",
  "security",
  "status",
  "docs",
  "contact",
  "pricing",
  "api",
  "training",
  "blog",
  "about",
];

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">
        <span className="copyright">
          <svg
            aria-hidden="true"
            height={24}
            viewBox="0 0 16 16"
            width={24}
            data-view-component="true"
            className="octicon octicon-mark-github"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          <span>© 2022 GitHub, Inc.</span>
        </span>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 4rem 0;
  margin-top: 4rem;
  border-top: 1px solid #d0d7de;

  .footer-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
  }

  .copyright {
    color: #57606a;
    display: flex;
    gap: 0.8rem;
    align-items: center;

    span {
      font-size: 1.2rem;
    }

    svg {
      fill: currentColor;
    }
  }

  .footer-links {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;

    a {
      color: var(--link-hover-color);
      text-decoration: none;
      font-size: 1.3rem;
      text-transform: capitalize;
      line-height: 0.6;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 770px) {
    .footer-container {
      flex-direction: row;
      gap: 7rem;
    }

    .footer-links {
      justify-content: center;
    }
  }
`;
