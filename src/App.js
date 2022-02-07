import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
