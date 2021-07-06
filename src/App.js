import Joinus from "./component/f1.js"
import Login from "./component/login.js"
import Search from "./component/search.js"
import Contactus from "./component/contactus.js"
import Download from "./component/downloads.js"
import Help from "./component/help.js"
import Home from "./component/home.js"
import Setting from "./component/setting.js"
import Mobileos from "./component/mobileos.js"
import Mobile from "./component/mobile.js"
import './App.css';

function App() {
  return (
    <div >
      <div className="Grid">
      <Joinus />
      <Login />
      <Search />
      <Setting />
      <Contactus />
      <Download />
      <Help />
      <Home />
      </div >
     
      <div className="new">
 <Mobileos />
      <Mobile/>
      </div>
    </div>
    
   
  );
}

export default App;
