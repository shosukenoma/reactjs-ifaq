import { useState } from "react";
import { FAQContent } from "./FAQContent";
import { FAQHeader } from "./FAQHeader";
import { MyName } from "./MyName";

export function FAQContainer( {question, answer} ) {
  const [isHidden, setIsHidden] = useState(true);
  const toggleAccordion = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div>
      <FAQHeader toggleAccordion={ toggleAccordion } question={ question }/>
      { !isHidden && <FAQContent answer={ answer }/> }
    </div>
  )  
}