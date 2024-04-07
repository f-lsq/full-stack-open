import React from 'react';

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greetings, app is created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10;
  return (
    <React.Fragment>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name='Tiffany' age={26+38}/>
      <Footer/>

    </React.Fragment>
  )
}

export default App

