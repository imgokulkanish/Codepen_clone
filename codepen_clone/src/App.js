import React, { useEffect, useState } from "react";
import Editor from "./Components/Editor";
import useLocalstorage from "./Hooks/useLocalstorage";
import Header from "./Components/Header";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Form from "./Components/Form_Component/Form";

const App = () => {
  const [html, setHtml] = useLocalstorage("html", "");
  const [css, setCss] = useLocalstorage("css","");
  const [js, setJs] = useLocalstorage("js","");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
  return (
    <>
       {/* <Router>
         <Switch> */}
        <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
      <div className="panel top-panel">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        
        />
        </div>
        <div className="panel">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
      </Route>
      <Route exact path="/login">
          <Form />
        </Route>
        </Switch>
        </Router>
    </>
    
  );
};

export default App;