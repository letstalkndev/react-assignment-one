import React from 'react';


const UserInput = (props) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.change}></input>
        </div>
    );
}

export default UserInput;
