import type { ReactElement } from "react";
import Question from "@/components/Question";

export interface GameProps {}

export function Game(props: GameProps): ReactElement {
  const questions = [{
    url: "https://youtu.be/Fw4wdaSszu0?start=747&end=750",
    answers: ["せ", "か", "い", "よ", "わ", "れ", "に", "し", "た", "が", "え"],
  }];
  
  // const [showNextButton, setShowNextButton] = useState(false);
  
  return <Question data={questions[0]} />;
}
