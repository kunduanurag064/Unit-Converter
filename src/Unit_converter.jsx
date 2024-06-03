import { useState , useCallback, useEffect } from "react";
import './index.css';
import {distance, weight,speed,default1} from './quantities/Unit_conversion_quantities.js';
import {quantities} from './quantities/Unit_conversion_quantities.js';

function Unit_converter() {

    let [Value,setvalue] = useState(0);
    let [result,setresult] = useState(0);
    let [convertfrom,setconfrom] = useState('');
    let [convertto , setconto] = useState(convertfrom);
    let [whichquant , setQuan] = useState('');

  //const mykey = Object.keys(`${whichquant}.${convertfrom}`);
  const getOptions = () => {
    if (whichquant === 'distance') {
      return Object.keys(distance);
    }
    else if (whichquant === 'speed') {
      return Object.keys(speed);
    }
    else if (whichquant === 'weight') {
      return Object.keys(weight);
    }
    else{
        return Object.keys(default1);
    }
  };
  const myquant = Object.keys(quantities);

  const checkvalue = () => {
    //console.log(convertfrom);
    //console.log(convertto);
    let conversionFactor ;
    if(whichquant==='distance') conversionFactor = distance[convertfrom][convertto];
    if(whichquant==='speed') conversionFactor = speed[convertfrom][convertto];
    if(whichquant==='weight') conversionFactor = weight[convertfrom][convertto];
    //if(whichquant==='distance') conversionFactor = distance[convertfrom][convertto];
    setresult(Value * conversionFactor);
  };


  
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:20}}>Unit Converter </h1>
      <div className="mycontainer">
        <div className="currency-converter-big-box">
          <br/>
          <label>Select Quantity to convert    :: &nbsp; </label>
          <select value={whichquant} onChange={(e)=>setQuan(e.target.value)}>
            <option>select --- </option>
            {
            myquant.map((key)=>(
                <option value={key} key={key}>{key}</option>
            ))
          }

          </select>
          <br/><br/>
          <input type="number" min={0} value={Value} onChange={(e) => setvalue(e.target.value)} /><br/>
          convert from <br/>
          <select value={convertfrom} onChange={(e) => setconfrom(e.target.value)}>
            <option>select --- </option>
          {
            
            getOptions().map((key)=>(
                <option value={key} key={key}>{key}</option>
            ))
          }
          </select>
          <br/><br/>
          convert to
          <br/>
          <select value={convertto} onChange={(e) => setconto(e.target.value)}>
            <option>Select ---</option>
            {getOptions().map((key) => (
              <option value={key} key={key}>{key}</option>
            ))}
          </select>
          <br/><br/>
          <button onClick={checkvalue}>Convert</button>
          <br/><br/>
          <input type="text" value={result} readOnly />
        </div>
      </div>
    </>
  );
}
  
  export default Unit_converter;