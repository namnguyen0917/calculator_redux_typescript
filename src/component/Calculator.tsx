
import React from "react";
import listProps from "../props/calculatorProp";
import { useSelector } from "react-redux";
import Btn from "./Btnculator";

const Calculator: React.FC<listProps> = ({datas}) => {

    const counter = useSelector((pre:any) => pre.counter);

return (
    <div className="App-header">
        <div className="calculator">
        <h4>Calculator</h4> <hr/>

        <div className="result">{counter.count2}</div> <hr/>
        <div className="result">{counter.count}</div> <hr/>
        <div>
            
            {datas.map((data) => {
                return(
                    <span >
                        <Btn data={data} />
                    </span>
                    )
                })}
        </div>  
        </div>
    </div>
  );
};

export default Calculator;
