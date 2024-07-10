

import { useState } from 'react';
import './App.css'

function App() {

  const [currentQuestion , setCurrentQuestion] = useState(0)
  const [score , setScore] = useState(0)
  const [showScore , setShowScore] = useState(false)
  
  const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyperlinks and Text Markup Language', 'Hypertext Markup Language', 'Home Tool Markup Language'],
        correctOption: 'Hypertext Markup Language'
    },
    {
        question: 'Who is making the Web standards?',
        options: ['Google', 'The World Wide Web Consortium', 'Microsoft'],
        correctOption: 'The World Wide Web Consortium'
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        options: ['<heading>', '<h6>', '<h1>'],
        correctOption: '<h1>'
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<linebreak>', '<br>', '<break>'],
        correctOption: '<br>'
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        options: ['<body bg="yellow">', '<background>yellow</background>', '<body style="background-color:yellow;">'],
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        options: ['<strong>', '<b>', '<i>'],
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        options: ['<italic>', '<i>', '<em>'],
        correctOption: '<em>'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        options: ['<a>http://www.w3schools.com</a>', '<a href="http://www.w3schools.com">W3Schools</a>', '<a url="http://www.w3schools.com">W3Schools.com</a>'],
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        options: ['*', '/', '<'],
        correctOption: '/'
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        options: ['<a href="url" target="new">', '<a href="url" new>', '<a href="url" target="_blank">'],
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        options: ['<table> <tr> <td>', '<table> <head> <tfoot>', '<table> <tr> <tt>'],
        correctOption: '<table> <tr> <td>'
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        options: ['True', 'False'],
        correctOption: 'True'
    },
    {
        question: 'How can you make a numbered list?',
        options: ['<dl>', '<ul>', '<ol>', '<list>'],
        correctOption: '<ol>'
    },
];

let handlerSubmit =(questionSelected)=>{
  // console.log( questionSelected)

  if(questionSelected === questions[currentQuestion].correctOption){
    setScore( score +1)
  }
  if (currentQuestion +1 < questions.length){
    setCurrentQuestion(currentQuestion +1)
  }else{
    setShowScore(true)
  }
}


return (
  <>
    <h1>Quiz Application</h1>


    {/* {`You  got ${score} question right out of ${questions.length} `} */}

    {
      showScore ? ( <p> You  got {score} question right out of {questions.length} </p>)
      : ( <>
        <h3>{questions[currentQuestion].question}</h3>
        {
          questions[currentQuestion].options.map((option, index) => {
            return <button key={index} onClick={()=>handlerSubmit(option)}>{option}</button>
          })
        }
        </>)
    }

  
  </>
)
}

export default App
