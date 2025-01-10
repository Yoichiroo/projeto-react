import './App.css'
import FunctionalComponent from'./components/FunctionalComponent.jsx'
import ClassComponent from './components/ClassComponent.jsx'
import PropsExample from './components/PropsExample.jsx'

function App() {
  return (
    <>
      <h1>APARECEU</h1>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <PropsExample nome ="Lídia" idade={18} ></PropsExample>
    </>
  )
}

export default App
