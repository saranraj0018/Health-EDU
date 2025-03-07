import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/Searchpage";
import SearchPage2 from "./pages/Searchpage2";
import CollegeHome from "./pages/CollegeHome";
import Main from "./layouts/Main";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/search-page-2" element={<SearchPage2 />} />
          <Route path="/college-home" element={<CollegeHome />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;