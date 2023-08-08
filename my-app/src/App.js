import './App.css';
import Subcomponent from './Components/Subcomponent';
import './Components/Subcomponent.css';
import './Components/SubcomponentA.css';
import './Components/ComponentB.css';
import SubcomponentA from './Components/SubcomponentA';
import ComponentB from './Components/ComponentB';

function App(){
       return(

            <center>
            <div id="d1">       
            <center>
            <p>Hello wala world!!!</p>
            </center>
            </div><br></br><Subcomponent></Subcomponent><br></br>
            <SubcomponentA></SubcomponentA><br></br>
            <ComponentB></ComponentB>
            </center>
       );
}
export default App;