import React, { useState } from 'react'
import { useEffect } from 'react';
import Editor from './Components/Editor'
const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("")
  const [srcDoc, setsrcDoc] = useState("");
  useEffect(()=> {
    const timeout = setTimeout(() => {
      setsrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `)
    }, 300);
    return ()=> {
      clearTimeout(timeout);
    };
    }, [html,css,js]);
    
  return (
    <>
    <div className="panel top-panel">
        <Editor title="HTML" language="xml" value={html} onChange={setHtml}/>
        <Editor title="CSS" language="css" value={css} onChange={setCss}/>
        <Editor title="JS" language="js" value={js} onChange={setJs}/>
    </div>
    <div className="panel">
    <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%"></iframe>
    </div>
    </>
  )
}

export default App
