import ReactDOM from "react-dom";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NameForm from "./pages/NameForm";
import Thanks from "./pages/Thanks";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";
import Aliens from "./pages/Aliens";
import Zerkblatt from "./pages/Zerkblatt";
import Zargon from "./pages/Zargon";

export default function App() {

  const [namer, setNamer] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NameForm handleChange={(e)=>handleChange(e)}/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="thanks" element={<Thanks namer={namer}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:projectId" element={<Projects/>} />
          <Route path="aliens/*" Component={ Aliens }>
                <Route path="zerkblatt" Component={ Zerkblatt } />
                <Route path="zargon" Component={ Zargon } />              
        </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));