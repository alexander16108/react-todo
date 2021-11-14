import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import TodoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css";

ReactDOM.render(
<React.StrictMode>
<Router>
<Routes>
    <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </Router>
  </React.StrictMode>,
document.getElementById("root"));
