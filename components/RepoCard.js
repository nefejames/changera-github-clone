import styled from "styled-components";
import BorderBottomLine from "./Form/components/borderBottomLine";
export default function RepoCard() {
  return (
    <Card>
      <div className="repo-card-container">
        <div className="project-title-box">
          <a className="title" href="#">
            angular-contact-manager
          </a>
          <span className="repo-visibility">Public</span>
        </div>

        <span className="project-description">
          A CRUD app I built while learning Angular.
        </span>

        <div className="project-details">
          <span className="repo-lang-box">
            <span className="repo-lang-color"></span>
            <span className="repo-programming-lang">TypeScript</span>
          </span>
          <span className="last-updated">Updated 14 days ago</span>
        </div>
      </div>
      <BorderBottomLine />
    </Card>
  );
}

const Card = styled.div`
  --accent-grey: #57606a;
  color: #57606a;

  .repo-card-container {
    padding: 2.4rem 0;
  }

  .project-title-box {
    margin-bottom: 0.7rem;

    .title {
      font-size: 2rem;
      font-weight: 600;
      word-break: break-all;
      color: var(--link-hover-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .repo-visibility {
      color: var(--accent-grey);
      border: 1px solid #d0d7de;
      display: inline-block;
      padding: 0 0.7rem;
      font-weight: 500;
      line-height: 18px;
      border-radius: 2em;
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  .project-description {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  .project-details {
    margin-right: 1.6rem;

    display: flex;
    align-items: center;
    font-size: 1.2rem;

    .repo-lang-box {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      margin-right: 1.6rem;

      .repo-lang-color {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background: #2b7489;
      }
    }

    .last-updated {
    }
  }
`;
