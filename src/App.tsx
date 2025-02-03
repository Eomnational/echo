import React from 'react'
import Button,{ ButtonType,ButtonSize} from './components/Button/button'

function App() {

  return (
    <>
      <div className='App'>
      <header className='App-header'>
       <Button onClick={(e)=>{e.preventDefault();alert('Hello')}}>Hello</Button>
       <Button className={"custom"} btnType={ButtonType.Primary} size={ButtonSize.Large}>Click me</Button>
       <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Go to Baidu</Button>
       <Button btnType={ButtonType.Link} href="https://www.baidu.com">Baidu</Button>
       
      </header>
      </div>
     
    </>
  )
}

export default App
