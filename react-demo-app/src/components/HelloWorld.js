//import { CarTool } from "./CarTool";

export const HelloWorld = () => {
    // Rendered/converted to look like: return React.createElement('h1', null, 'Hello')
    // Use in a declarative, easier to use way

    // fragment - wrap elements in empty angle brackets
    // React.createElement('h1', null, 'Hello');
    // React.createElement('span',null, 'test');
    // fragment is NOT added to the DOM tree
    /*
    return ( <>
    <h1>Hello</h1>
    <span>test</span>
    <CarTool/>
    </>
    );*/

    return (
        <>
        <h1>Hello</h1>
        <span>test</span>
        </>
    )
    
    //return <h1>Hello</h1>;
  };