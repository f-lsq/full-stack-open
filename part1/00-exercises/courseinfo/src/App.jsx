import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props);
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 34
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0]}/>
      <Content part={course.parts[1]}/>
      <Content part={course.parts[2]}/>
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App
