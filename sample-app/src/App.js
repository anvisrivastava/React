import 'bootstrap/dist/css/bootstrap.min.css'
import {CricketerData} from "./data.js";
import Cricket from './components/Cricket.js';

function Header(){
    return(
        <h1>I am from header component and i m pushing my changes</h1>
    )
}

function App(){
    return(
        <>
         <h1>Hi i am from app component</h1>
         <h1><Header /></h1>
         <ul>
            <Cricket 
            name ={CricketerData[0].name}
            description ={CricketerData[0].description}
            image ={CricketerData[0].image}
            />
            <Cricket 
            {...CricketerData[1]}
            />
             <Cricket 
             {...CricketerData[2]}
             />
             <Cricket
              {...CricketerData[3]}
             />
         </ul>
         </> 
    )
}
export default App;
