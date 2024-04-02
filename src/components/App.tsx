import "./App.scss";
import { Header } from "./Header/Header";
import { Personal } from "./Personal/Personal";
import { Details } from "./Details/Details";
import { Agree } from "./Agree/Agree";

function App() {
  return (
    <>
      <main className="cv-main">
        <Header />
        <Personal />
        <Details />
        <Agree />
      </main>
    </>
  );
}

export { App };
