
import React ,{Component} from "react";

import {dataA ,dataB} from "../props/calculatorProp";
import { useDispatch } from "react-redux";
import { operator } from "../actions/counter";

interface MyComponentProps {
    data: (dataA | dataB);
}

const Btnculator: React.FC<MyComponentProps>  = ( {data}) => {

    const dispatch = useDispatch();

return (
    <button 
        className='btn-calcu' 
        onClick={()=> dispatch(operator(data.type,data.value))}>
        {data.title}
    </button>
  );
};

export default Btnculator;
