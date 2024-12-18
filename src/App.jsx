import { useState, useEffect } from 'react';
import StopTimer from './StopTimer';
import Accordion from './Accordion';
import TrafficLight from './TrafficLight';

function App() {
  
  return (
    <div className='bg-zinc-800 text-white'>
      {/* <StopTimer/> */}
      {/* <Accordion/> */}
      <TrafficLight/>
    </div>
  )
}

export default App
