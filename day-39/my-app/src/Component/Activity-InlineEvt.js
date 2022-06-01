
import {useState} from 'react';

export function User() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault(); // prevents form getting submitted
        console.log(`send ${name} and ${age} to the backend`);
        setName('');
        setAge('');
    }

    return (<div className = 'form-group'>
        <h3>Simple Form</h3>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>
                    Enter name <input type = 'text' onChange = {(e) => {setName(e.target.value)}} value = {name}
                    className = 'form-control' autoComplete='off' name = 'name'></input>
                </label>
            </div>

            <div>
               <label>
                Enter age <input type = 'number' onChange = {(e) => {setAge(e.target.value)}} value = {age}
                className = 'form-control' autoComplete='off' name = 'age'></input>
               </label>
            </div>
            <div>
                 <input type = 'submit' value = 'Submit' className = 'btn btn-secondary'></input>
            </div>
            <div>
                Hello {name}!, your age is {age}
            </div>
        </form>
    </div>);
} 