import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Nav from "./componets/Nav";
import Categories from "./componets/Categories";
import Welcome from "./componets/Welcome";
import Review from "./componets/Review/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/categories/:category" element={<Categories />}></Route>
          <Route path="/review/:id" element={<Review />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
