import "./Header.scss";
import photo from "../../assets/photo.jpg";

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

const cvData: CVData = {
  photo: photo,
  name: "Magdalena",
  lastName: "Tymińska",
  position: "Junior Frontend Developer",
};

const Header = () => {
  return (
    <header className="cv-header">
      <div className="header-1">
        <h1>
          {cvData.name} {cvData.lastName}
        </h1>
        <small>{cvData.position}</small>
      </div>
      <img
        className="cv-photo"
        src={cvData.photo}
        alt={`${cvData.name}${cvData.lastName} profile photo`}
      />
    </header>
  );
};

export { Header };
