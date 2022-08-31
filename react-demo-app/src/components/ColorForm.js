import { useState } from "react";

export const ColorForm = () => {

    // array destructuring - assign first element to a variable, second element (updatefunction) assigning to a new local variable called setColorForm
    // tuple - related to each other, so that's why they "travel together", return state returns back as array (semantically acting like a tuple)
    const [ colorForm, setColorForm ] = useState({
        name:'',hexcode:''
    });

    const change = (evt) => {

        setColorForm({...ColorForm,colorForm,[ evt.target.name]: evt.target.value});


    };

    console.log(colorForm);


    

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" value={colorForm.name} onChange={change}/>
            </label>
            <label>
                Hexcode:
                <input type="text" name="hexcode" value={colorForm.hexCode} onChange={change}/>
            </label>
            <button type="button">Add Color</button>
        </form>
    )

};