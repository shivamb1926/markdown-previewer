import React from 'react';
import marked from 'marked';
import Split from 'react-split'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import copy from 'copy-to-clipboard'; 



function App() {
  
  marked.setOptions({
    breaks: true
  });

  const initialText = `# Markdown Previewer \n## Edit the textarea to get started\n\n### [Markdown Syntax](https://www.markdownguide.org/cheat-sheet)\n\n##### Tip: Adjust width using the middle bar`;
  
  const [text, setText] = React.useState(initialText);
  
  const handleChange = (e) => {
     setText(e.target.value);
  };
  
  const copyToClipboard = () => {
    copy(text);
  }
  
  const clear = () => {
    setText("");
  }

  return(
    <div className="app">
      <Navbar copyToClipboard={copyToClipboard} clear={clear}/>
      <Split className="split">
        <div className="editor-window">
          <textarea value={text} onChange={handleChange} className="editor" id="editing"/>
        </div>
        <div className="preview" dangerouslySetInnerHTML = {{__html: marked(text)}}>
        </div>
      </Split>
      <Footer />
    </div>
  )
}

export default App;
