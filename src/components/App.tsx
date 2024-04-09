import "./App.scss";
import { Header } from "./Header/Header";
import { Personal } from "./Personal/Personal";
import { Details } from "./Details/Details";
import { Agree } from "./Agree/Agree";
import { cvData } from "./data";

const { header, personal, details, agree } = cvData;

function App() {
  return (
    <>
      <main className="cv-main">
        <Header data={header} />
        <Personal data={personal} />
        <Details data={details} />
        <Agree data={agree} />
      </main>
    </>
  );
}

export { App };
