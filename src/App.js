import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FnClick from './components/FnClick';
import ClsClick from './components/ClsClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameList1 from './components/NameList1';
import StyleSheet from './components/StyleSheet';

function App() {
  return (
    <div className="App">
      <StyleSheet></StyleSheet>
      {/* <NameList1></NameList1> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <ClsClick></ClsClick> */}
      {/* <FnClick></FnClick> */}
      {/* <Counter va="2"></Counter> */}

      <Greet name="Jojo" stand="many">
        {/*this is children of this tag*/}
        <p>this is children</p> 
      </Greet>
      {/* <Welcome name="xxx" stand="yyy"></Welcome> */}
      {/* <Greet name="Jotaro" stand="StarP">
        <button>button children</button>
      </Greet>
      <Greet name="Dio" stand="World"></Greet> */}
    </div>
  );
}

export default App;
