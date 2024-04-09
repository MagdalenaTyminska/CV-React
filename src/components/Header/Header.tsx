import "./Header.scss";
import { CVHeader } from "../types";

type Props = {
  data: CVHeader;
};

const Header = ({ data: { name, lastName, position, photo } }: Props) => {
  return (
    <header className="cv-header">
      <div className="header-1">
        <h1>
          {name} {lastName}
        </h1>
        <small>{position}</small>
      </div>
      <img
        className="cv-photo"
        src={photo}
        alt={`${name}${lastName} profile photo`}
      />
    </header>
  );
};

export { Header };
