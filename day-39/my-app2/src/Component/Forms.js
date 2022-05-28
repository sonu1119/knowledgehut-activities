import { useState } from "react";

export function Forms() {
    let [name,setName]=useState('Guest');
    let [age,setAge]=useState(0);
    return(
        <div className='form-group'>
            <u><h1>Login form</h1></u>
            <div className='col-sm'>
                <form onSubmit={(evt)=>evt.preventDefault()}>
                    <label>Enter Username:
                       <input type='text' name='uname' className='form-control' autoComplete='off'
                        onChange={(evt)=>evt.target.name=='uname'?setName(evt.target.value):null}></input>
                    </label>
                    <br />
                    <label>Enter Age:
                       <input type='number' name='age' className='form-control' autoComplete='off'
                        onChange={(evt)=>evt.target.name=='age'?setAge(evt.target.value):null}></input>
                    </label>
                    <br />
                    <div>
                       <br /><button type='submit' value="Submit" className='btn btn-primary'>Login</button>
                    </div>
                       <br/>
                    <div>
                        Hello {name} ! Your age is {age}.
                    </div>
                </form>
            </div>
        </div>
    )
}









