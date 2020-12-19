import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCount} from '../reducers/reposReducer'
import './app.less';

const App = () =>  {
    const dispatch = useDispatch(); 
    const count = useSelector(state => state.count)


    function onCountClick () {
        dispatch(setCount(5));
    } 

    
    return (
        <div className="app">
            <button onClick={()=>onCountClick()}>
                COUNT
            </button>
            <br/>
            <div>{count}</div>
        </div>
    );
}; 

export default App;