import React from 'react';
import './App.css';
import Calculator from "./component/Calculator";

const datas = [
  {title:"-/+",type:"NEGATIVE-POSITIVE",value:"-"},
  {title:"CE",type:"RESET",value:"0"},
  {title:"C",type:"RESET",value:"0"},
  {title:"<=",type:"DELETE",value:"<="},
  {title:"1/x",type:"DOLE-4",value:"1/x"},
  {title:"x*x",type:"CORE-X",value:"x**"},
  {title:"2√a",type:"SCALES",value:"2√a"},
  {title:"000",type:"NUMBER",value:"000"},
  {title:"/",type:"OPE",value:"/"},
  {title:"X",type:"OPE",value:"x"},
  {title:"-",type:"OPE",value:"-"},
  {title:"+",type:"OPE",value:"+"},
  {title:1,type:"NUMBER",value:"1"},
  {title:2,type:"NUMBER",value:"2"},
  {title:3,type:"NUMBER",value:"3"},
  {title:4,type:"NUMBER",value:"4"},
  {title:5,type:"NUMBER",value:"5"},
  {title:6,type:"NUMBER",value:"6"},
  {title:7,type:"NUMBER",value:"7"},
  {title:8,type:"NUMBER",value:"8"},
  {title:9,type:"NUMBER",value:"9"},
  {title:0,type:"NUMBER",value:"0"},
  {title:",",type:"DOTS",value:","},
  {title:"=",type:"RESULT",value:"="},
];


function App() {
  return (
    <div>
      <Calculator datas={datas} />
    </div>
  );
}

export default App;
