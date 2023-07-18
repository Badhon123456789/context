import './App.css';
import ComA from './ComA';
import { createContext } from 'react';
const FirstName = createContext()
const data = {
  name: 'Md. Mushfiqur Rahman',
  nickName: 'Badhon',
  class: '10',
  email: 'mushfiqurr15@gmail.com'
}

function App() {
  return <>
  <FirstName.Provider value={data}>
    <ComA/>
  </FirstName.Provider>
  </>;
}

export default App;
export {FirstName}
