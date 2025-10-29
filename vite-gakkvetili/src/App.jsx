import { useState } from 'react'
import CounterButtons from "./components/CounterButtons.jsx";
import CounterDisplay from './components/CounterDisplay.jsx';
import Header from './components/Header.jsx';
import Message from './components/Message.jsx';
import ResetButton from './components/ResetButton.jsx';


function App() {

const projectName = "clicker game"
const [counter, setCounter] = useState(0); //state variable

  return (
    <>
      
  <Header 
    projectName={projectName} 
  />

   <CounterDisplay
      count={counter}
   />

    <Message 
      count={counter}
    />

    <CounterButtons
        title={"Increase"}
        handleClick={() => 
          {
          setCounter(counter + 1);
        }}
      />
      <CounterButtons
        title={"Decrease"}
        handleClick={() => 
          {
          setCounter(counter - 1);
        }}
      />
      <CounterButtons
        title={"Reset"}
        handleClick={() => {setCounter(0)}}
      />

    </>
  )
}

export default App
