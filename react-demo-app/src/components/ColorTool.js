import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm"

export const ColorTool = (props) => {

    /*(const colors = [
        {id: 1, name: 'red', hexcode: 'ff0000'},
        {id: 2, name: 'green', hexcode: '00ff00'},
        {id: 3, name: 'blue', hexcode: '0000ff'},
    ]*/


    // Rendered/converted to look like: return React.createElement('h1', null, 'Hello')
    // Use in a declarative, easier to use way

    // fragment - wrap elements in empty angle brackets
    // React.createElement('h1', null, 'Hello');
    // React.createElement('span',null, 'test');
    // fragment is NOT added to the DOM tree
    /*return ( <div>
        <ul>
            {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
        </ul>
    </div>
    );*/

    /*return ( <div>
        <ToolHeader header={props.header}/>
        <ul>
            {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
        </ul>
    </div>
    );*/

    return ( <div>
        <ToolHeader header={props.header}/>
        <ColorList colors={props.colors}/>
        <ColorForm/>
    </div>
    )

    
    //return <h1>Hello</h1>;
  };