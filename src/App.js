import Song from "./components/Song";
import { MyContext } from "./components/MyContext";
import {Actor} from './components/Actor'



export default function App() {

  return (
    
    <MyContext.Provider value={'Mambo No 5'}>
      <Song />
      <Actor />
    </MyContext.Provider>

  );
}

