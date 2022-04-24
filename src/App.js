import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Nav from "./componets/Nav";
import Reviews from "./componets/Reviews";
import Welcome from "./componets/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/category/:category" element={<Reviews />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
