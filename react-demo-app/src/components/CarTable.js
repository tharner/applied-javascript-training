import { CarViewRow } from "./CarViewRow"

export const CarTable = (props) => {

    /*
    return (
        <>
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
    )*/

    return (
        <>
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
                {props.cars.map(car => <CarViewRow key={car.id} car={car}></CarViewRow>)}
            </tbody>
        </table>
        </>
    )
}