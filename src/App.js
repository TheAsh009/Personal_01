import './App.css';
import Quiz from './quiz/quiz';
import { useRef, useState } from 'react';

function App() {


  const questionData = [{
    Question: "1. Which of the following is used in React.js to increase performance?",
    Options: [{ option: "Virtual DOM" },
    { option: "Original DOM" },
    { option: "Both A and B" },
    { option: "None of the above" }],
    Correct_Answer: "1",
    Flag: "1"
  },
  {
    Question: "2. What is ReactJS?",
    Options: [{ option: "Server-side framework" },
    { option: "user interface framework" },
    { option: "both a and b" },
    { option: "none of the above" }],
    Correct_Answer: "2",
    Flag: "2"
  },
  {
    Question: "3. Identify the one which is used to pass data to components from outside",
    Options: [{ option: "Render with arguments" },
    { option: "setState" },
    { option: "PropsTypes" },
    { option: "props" }],
    Correct_Answer: "4",
    Flag: "3"
  },
  {
    Question: "4. Who created React.js?",
    Options: [{ option: "Jordan Mike" },
    { option: "Jordan Walke" },
    { option: "Tim Lee" },
    { option: "Jordan Lee" }],
    Correct_Answer: "2",
    Flag: "4"
  },
  {
    Question: "5. In which language is React.js written?",
    Options: [{ option: "Python" },
    { option: "JavaScript" },
    { option: "Java" },
    { option: "PHP" }],
    Correct_Answer: "2",
    Flag: "5"
  },
  {
    Question: "6. What is Babel?",
    Options: [{ option: "JavaScript compiler" },
    { option: "JavaScript interpreter" },
    { option: "JavaScript transpiler" },
    { option: "none of the above" }],
    Correct_Answer: "1",
    Flag: "6"
  },
  {
    Question: "7. Identify the command used to create a react app.",
    Options: [{ option: "npm install create-react-app" },
    { option: "npm install -g create-react-app" },
    { option: "install -g create-react-app" },
    { option: "none of the above" }],
    Correct_Answer: "2",
    Flag: "7"
  },
  {
    Question: "8. Which of the following port is the default where webpack-dev-server runs?",
    Options: [{ option: "3000" },
    { option: "3306" },
    { option: "3030" },
    { option: "8080" }],
    Correct_Answer: "4",
    Flag: "8"
  },
  {
    Question: "9. How many elements can a valid react component return?",
    Options: [{ option: "1" },
    { option: "2" },
    { option: "3" },
    { option: "4" }],
    Correct_Answer: "1",
    Flag: "9"
  },
  {
    Question: "10. A state in React.js is also known as?",
    Options: [{ option: "The internal storage of the component" },
    { option: "External storage of the component" },
    { option: "Permanent storage" },
    { option: "All of the above" }],
    Correct_Answer: "1",
    Flag: "10"
  },
  ];

  let [finalResult, setFinalResult] = useState(0);
  const [question, setQuestion] = useState([questionData[0]]);
  const [qnaId, setQnaId] = useState(2);
  const [check, setCheck] = useState(false);
  let result=useRef(0);
  let rValue="";

  function handleNext(qid) {
    const tempQna = questionData.filter((element) => element.Flag == qid);
      
    // console.log(tempQna);
    setQuestion([...tempQna]);
    setQnaId(qid + 1);
   
  }



  function handleSubmit(result) {
    // console.log(tempValue);
    
     setFinalResult(result);

  }

  function handleSubmit1() {
    setCheck(true)
  }
  function handleRestart() {
    setQuestion([questionData[0]]);
    setQnaId(1);
    setFinalResult(0);
    setCheck(false)
  }


  return (
    <>
      <h1 className='heading'>Quiz</h1>
      <div className='mainDiv'>
        {(check && ((finalResult >= 12) ? <h1>Congratulation {finalResult * 2}/20</h1> :
          <div className='failedDiv'>
            <h1> Congratulation {finalResult * 2}/20</h1>
            <button onClick={handleRestart}>Restart</button>
          </div>))}
        {
          question.map((x, index) => {
            return (<div key={index}>
              <Quiz key={index} Question={x.Question} Options={x.Options} cAnswer={x.Correct_Answer} Flag={x.Flag} handleSubmit={handleSubmit} />
              {(x.Flag != 10) ? <button onClick={() => handleNext(qnaId)}>Next</button> : <button onClick={handleSubmit1}>Submit</button>}
            </div>
            )
          })
        }


      </div>
    </>
  );
}

export default App;
