import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";


export const CarTool = (props) => {
    // Rendered/converted to look like: return React.createElement('h1', null, 'Hello')
    // Use in a declarative, easier to use way

    /*const cars = [
        {id: 1, make: 'ford', model: 'maverick', year: 2023, color: 'Blue', price: '$23000'},
        {id: 2, make: 'ford', model: 'escape', year: 2023, color: 'Red', price: '$37000'},
    ]*/

    // fragment - wrap elements in empty angle brackets
    // React.createElement('h1', null, 'Hello');
    // React.createElement('span',null, 'test');
    // fragment is NOT added to the DOM tree

    /*
    return ( <>
    <header>
        <h1>Car Tool</h1>
    </header>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Make</td>
                <td>Model</td>
                <td>Year</td>
                <td>Color</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Ford</td>
                <td>Maverick</td>
                <td>2023</td>
                <td>Blue</td>
                <td>$23000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ford</td>
                <td>Escape</td>
                <td>2023</td>
                <td>Red</td>
                <td>$37000</td>
            </tr>
        </tbody>
    </table>
    </>
    );*/

    /*return ( <>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Make</td>
                    <td>Model</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            {props.cars.map(car => <tr key={car.id}><td>{car.id}</td><td>{car.make}</td><td>{car.model}</td><td>{car.year}</td><td>{car.color}</td><td>{car.price}</td></tr>)}
            </tbody>
        </table>
        </>
        );*/

        /*return ( <>
            <ToolHeader header={props.header}/>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Make</td>
                        <td>Model</td>
                        <td>Year</td>
                        <td>Color</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                {props.cars.map(car => <tr key={car.id}><td>{car.id}</td><td>{car.make}</td><td>{car.model}</td><td>{car.year}</td><td>{car.color}</td><td>{car.price}</td></tr>)}
                </tbody>
            </table>
            </>
            );*/

            return ( <>
                <ToolHeader header={props.header}/>
                <CarTable cars ={props.cars}/>
                <CarForm/>
                </>
                );


    
    //return <h1>Hello</h1>;
  };