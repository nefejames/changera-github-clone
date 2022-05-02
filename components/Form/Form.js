import styled from "styled-components";
import { Button, Input, Select } from "./components";
import BorderBottomLine from "./components/borderBottomLine";

const typeOptions = [
  "Type",
  "All",
  "Public",
  "Private",
  "Source",
  "Fork",
  "Archived",
  "Mirrors",
  "Templates",
];

const languageOptions = [
  "Language",
  "All",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Angular",
];

const sortOptions = ["Sort", "last updated", "Name", "Stars"];

export default function Form() {
  return (
    <Container>
      <form>
        <Input />

        <div className="select-box">
          <Select selectName="type" selectOptions={typeOptions} />
          <Select selectName="language" selectOptions={languageOptions} />
          <Select selectName="sprt" selectOptions={sortOptions} />
        </div>

        <Button
          btnText="New"
          bgColor="#2da44e"
          textColor="#fff"
          icon={
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
          }
        />
      </form>
      <BorderBottomLine />
    </Container>
  );
}

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 1.6rem 0;

    input {
      flex: 1;
      order: 1;
      margin-bottom: 0.8rem;
    }

    .select-box {
      order: 2;
      display: flex;
      gap: 0.5rem;
    }

    button {
      order: 0;
      margin-bottom: 2.4rem;
    }

    @media (min-width: 770px) {
      flex-direction: row;

      input {
        order: 0;
        margin-bottom: 0;
      }

      .select-box {
        order: 1;
        margin: 0 1.6rem;
      }

      button {
        order: 2;
        margin-bottom: 0;
      }
    }
  }
`;
