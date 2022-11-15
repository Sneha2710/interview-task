import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './Component/add.js';
import List from './Component/list.js';


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}></Route>
      <Route path='/list' element={<List/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;