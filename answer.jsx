const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
  
    const { questions } = quiz
    // destructuring
    const { question, choices } = questions[activeQuestion]
  
    return (
      <div>
        <h1>Quiz</h1>
        <h2>{question}</h2>
        <ul>
          {choices.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
  