import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Forgetpass from "./components/forgetpass";
import Cc1 from "./components/cc/cc1";
import Cc2 from "./components/cc/cc2";
import Cc3 from "./components/cc/cc3";
import Sqd1 from "./components/sqd/sqd1";
import Sqd2 from "./components/sqd/sqd2";
import Sqd3 from "./components/sqd/sqd3";
import Sqd4 from "./components/sqd/sqd4";
import Sqd5 from "./components/sqd/sqd5";
import Sqd6 from "./components/sqd/sqd6";
import Sqd7 from "./components/sqd/sqd7";
import Sqd8 from "./components/sqd/sqd8";
import Suggestion from "./components/sqd/suggestion";
import Thanks from "./components/sqd/thanks";
import Dost from "./components/sqd/dost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/cc1" element={<Cc1 />} />
        <Route path="/cc2" element={<Cc2 />} />
        <Route path="/cc3" element={<Cc3 />} />
        <Route path="/sqd1" element={<Sqd1 />} />
        <Route path="/sqd2" element={<Sqd2 />} />
        <Route path="/sqd3" element={<Sqd3 />} />
        <Route path="/sqd4" element={<Sqd4 />} />
        <Route path="/sqd5" element={<Sqd5 />} />
        <Route path="/sqd6" element={<Sqd6 />} />
        <Route path="/sqd7" element={<Sqd7 />} />
        <Route path="/sqd8" element={<Sqd8 />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/dost" element={<Dost />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
