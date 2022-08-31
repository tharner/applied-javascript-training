/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

// Establish root element in DOM tree from which we will render our app component tree
import { createRoot } from 'react-dom/client';
import { HelloWorld } from './components/HelloWorld';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
//import './components/CarTool.css';

const colorList = [
  {id: 1, name: 'red', hexcode: 'ff0000'},
  {id: 2, name: 'green', hexcode: '00ff00'},
  {id: 3, name: 'blue', hexcode: '0000ff'},
]

const carList = [
  {id: 1, make: 'ford', model: 'maverick', year: 2023, color: 'Blue', price: '$23000'},
  {id: 2, make: 'ford', model: 'escape', year: 2023, color: 'Red', price: '$37000'},
]


const rootElement = document.querySelector('#root');

/*const HelloWorld = () => {
  // Rendered/converted to look like: return React.createElement('h1', null, 'Hello')
  // Use in a declarative, easier to use way
  return <h1>Hello</h1>;
};*/

const root = createRoot(rootElement);

// JSX
//root.render([<HelloWorld />,<CarTool/>])
root.render(
  <>
  <ColorTool colors={colorList} header="Color Tool"/>
  <CarTool cars={carList} header="Car Tool"/>
  </>
)

/*
root.render(
  <>
  <ToolHeader headerName={colorToolHeader}/>
  <ColorTool colors={colorList}/>
  <ToolHeader headerName={carToolHeader}/>
  <CarTool cars={carList}/>
  </>
)*/


//root.render(<HelloWorld/>); // if you put CarTool into HelloWorld

// h1 - Intrinsic element (when referring to html tags)
// HelloWorld - Custom Component (not intrinsic, elements that return other elements, capitalize)
// JSX - intrinsic vs custom based on casing of first character (why the const HelloWorld is capitalized)


// In other languages, you control the versions/configurations your program is run with (.NET, JAVA, Python, etc)
// No control in JS (JS is a compiled language, distribute source code and gets compiled in user's runtime - one of the reasons it is the fastest scripting language in existence)
// If you have to support an old browser, you're limited to using what that old browser supports (modern js through a transpiler to work in all browsers)
// Transpile JS to JS, any other language/latest version of JS to JS (because many people prefer working in other languages)
// New languages could be included in JS source code if you have the right transpiler
// React - babel transpiler (and that's how you can use JSX) - plugin that knows how to handle it


// The actual element of the component itself is not rendered in react (only intrinsic HTML elements) - only renders real elements



