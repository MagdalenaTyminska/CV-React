import "./Agree.scss";
import { CVAgree } from "../types";

type Props = {
  data: CVAgree;
};

const Agree = ({ data: { agree } }: Props) => {
  return <section className="cv-agree">{agree}</section>;
};

export { Agree };
