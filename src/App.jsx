import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/products/:productId" exact Component={ProductDetails} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
