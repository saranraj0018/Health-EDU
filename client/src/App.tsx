import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;