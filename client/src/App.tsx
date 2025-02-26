import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchpage from "./pages/SearchPage";
import Main from "./layouts/Main";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home />} />
          <Route path="/search-page" element={<Searchpage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;