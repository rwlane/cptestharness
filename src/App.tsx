import { 
  useRef, 
  useState 
} from 'react';

import {
  Box,
} from '@mui/material';

import { MyTextfield } from './components/MyTextfield';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dataRef = useRef("initial name");

  const receiveData = (s: any) => {
    console.log("Data: "+s);
    dataRef.current = s;
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box>
        <MyTextfield sendData={receiveData} data={dataRef.current} />
      </Box>
      <Box>
        <div style={{width: "100%"}}>Data: {dataRef.current}</div>
      </Box>
    </>
  )
}

export default App
