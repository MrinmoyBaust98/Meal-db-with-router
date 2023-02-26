import "./App.css";
import Resturent from "./components/Resturent/Resturent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route
            exact
            path="/resturent"
            element={<Resturent></Resturent>}
          ></Route>
          <Route exact path="/" element={<Resturent></Resturent>}></Route>
          <Route
            exact
            path="/MealDetails/:idMeal"
            element={<MealDetails></MealDetails>}
          ></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route exact path="/Blog" element={<Blog></Blog>}></Route>
          <Route exact path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
