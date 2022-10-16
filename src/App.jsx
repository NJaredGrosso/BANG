import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoryID" element={ <BrowserRouter/> }/>
            <Route path="/comic/:comicID" element={<ItemDetailContainer/>}/>
            <Route path="*" element={ <h2>Direccion no encontrada</h2> } />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
