import { MyName } from "./MyName";

export function FAQHeader({ toggleAccordion, question }) {

  return (
    <div>
      <span>{ question }</span>
      <button onClick={ toggleAccordion }>&#43;</button>
    </div>
  )
}