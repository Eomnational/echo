import React from 'react'
import Button,{ ButtonType,ButtonSize} from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import './styles/index.scss';
function App() {

  return (
    <>
      <div className='App'>
      
      <Menu defaultIndex={0} onSelect={(index) => {console.log(index)}}>
        <MenuItem index={0}>cool0</MenuItem>
        <MenuItem index={1}>cool1</MenuItem>  
        <MenuItem index={2}>cool2</MenuItem>
      </Menu>
       <Button onClick={(e)=>{e.preventDefault();alert('Hello')}}>Hello</Button>
       <Button className={"custom"} btnType={ButtonType.Primary} size={ButtonSize.Large}>Click me</Button>
       <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Go to Baidu</Button>
       <Button btnType={ButtonType.Link} href="https://www.baidu.com">Baidu</Button>
       
      
      </div>
     
    </>
  )
}

export default App
