import './App.css'
import { FAQContainer } from './FAQContainer'

function App() {

  const faqTextList = [
    { key: 0,
      question: "What's the most irregular food you have eaten?",
      answer: "Crocodile arm."
    },
    { key: 1,
      question: "How many times have you broken your bone?",
      answer: "Thankfully, zero."
    },
    { key: 2,
      question: "How many countries have you traveled to?",
      answer: "14 countries."
    },
  ]

  return (
    <>
      <h1>Infrequently Asked Questions</h1>
      { faqTextList.map(function(item) {
        return (
          <FAQContainer key={item.key} question={item.question} answer={item.answer} />
        )
      })}
      {/* <FAQContainer question={ faqTextList[0].question } answer={faqTextList[0].answer} />
      <FAQContainer question={ faqTextList[1].question } answer={faqTextList[1].answer}/>
      <FAQContainer question={ faqTextList[2].question } answer={faqTextList[2].answer}/> */}
    </>
  )
}

export default App
