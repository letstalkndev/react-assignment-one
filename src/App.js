import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
    const [dataState, setDataState] = useState({
        data : [
            {input: 'first input', output: 'first output'},
            {input: 'second input', output: 'second output'},
        ]
    });

    const changeFirstInput = (event) => {
        setDataState({
            data : [
                {input: event.target.value, output: event.target.value},
                {input: 'second input', output: 'second output'},
            ]
        });
    }

    const changeSecondInput = (event) => {
        setDataState({
            data : [
                {input: 'first input', output: 'first output'},
                {input: event.target.value, output: event.target.value},
            ]
        });
    }



    return (
    <div className="App">
        <UserInput change={changeFirstInput} value={dataState.data[0].input} />
        <UserOutput value={dataState.data[0].output}/>

        <UserInput change={changeSecondInput} value={dataState.data[1].input} />
        <UserOutput value={dataState.data[1].output}/>

    </div>
    );
}

export default App;
