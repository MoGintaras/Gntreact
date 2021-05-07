import {useState} from 'react'
import Validate from "../helpers/Validate";

function RecipeUpload() {
    const [inputs, setInputs] = useState({
        title: '',
        images: '',
        ingridients:'',
        preparation: ''
    })
    const [errors, setErrors] = useState({valid: true, fields: []})

    function sendToServer() {

        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputs)
        }

        fetch('http://localhost:3001/data', options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    function fill(e) {
        const {id, value} = e.target
        const stateObject = inputs
        stateObject[id] = value
        setInputs({...stateObject})
    }

    function valid() {
        const valid = Validate(inputs)

        if(valid.valid) {
            sendToServer()
        }

        return setErrors(valid)
    }

    return (
        <div className='uploadCard'>
            <div className="d-flex flex-column w-300 ">
            <input type="text" id="title" placeholder="title" onChange={(e) => fill(e)}/>
            <input type="text" id="images" placeholder="images" onChange={(e) => fill(e)}/>
            <button>add image</button>
            <input type="text" id="ingridients" placeholder="ingridients" onChange={(e) => fill(e)}/>
                <button>add ingridient</button>
            <input type="text" id="preparation" placeholder="preparation" onChange={(e) => fill(e)}/>
                <button>add prep</button>
            <button onClick={valid}>Upload</button>
            {!errors.valid ?
                <div>
                    {errors.fields.map((item, index) =>
                    {return !item.valid ? <div key={index}>{item.message}</div> : null})
                    }
                </div>
                : null}
             </div>
            <div className='preview'></div>
        </div>
    )
}

export default RecipeUpload