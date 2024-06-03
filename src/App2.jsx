import { useState , useCallback, useEffect } from "react";
import {Link,NavLink} from 'react-router-dom'
// link used instead if <a> tag in react
import './index.css';
import Inputbox from "./Inputbox";

function App2() {
  // first project
  /*
  let [value , setValue] = useState(0);
  
  let [warning , displayWarning] = useState("");
  //let value = 0;

    function addValue(){
      //value = value+1;
      setValue(value+1);
      if(value>=0)displayWarning("")
    }

    function subValue(){
      //value = value-1;
      if(value>0){
        setValue(value-1);
      }
      else displayWarning("warning : can not go negative!");      
    }

    return (
      <>
      <button onClick={addValue}>Increase Value</button>
      <div>
        <h1>This is Value : {value}</h1>
      </div>
      <button onClick={subValue}>Decrease Value</button>
      <p>{warning}</p>
      </>

    )*/
    // 2nd project
/*
  const [colr,setColor] = useState("olive");
    function changeBg(){
        console.log("clicked");
    }
    const buttonStyle = {
      padding:'10px 20px',
      margin:'10px',
      border:'none',
      cursor:'pointer',
      borderRadius:'5px'
    }
    return (
      <>
      <div className="large-container" style={{backgroundColor:colr}}>
      <div className="button-placer">
        <button onClick={()=>{setColor("black")}} style={{...buttonStyle,backgroundColor:'black',color:'white'}}>Black</button>
        <button onClick={()=>{setColor("red")}} style={{...buttonStyle,backgroundColor:'red'}}>Red</button>
        <button onClick={()=>{setColor("blue")}} style={{...buttonStyle,backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>{setColor("white")}} style={{...buttonStyle,backgroundColor:'white'}}>White</button>
        <button onClick={()=>{setColor("green")}} style={{...buttonStyle,backgroundColor:'green'}}>Green</button>
      </div>
      </div>
      </>
    )
    */
   // third practise project  password generator
   /*
   let [placevalue , setPlacevalue] = useState("")
   let [paSize,setSize] = useState(8);
   let [num , setNum] = useState(false);
   let [char, setChar] = useState(false);

   let [copy , setCopy] = useState("Copy")

   function passwordGenerator(){
    let pass = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+="1234567890";
    if(char) str+="!@#$%^&*()_+\";'/|[]{}";
    for(let i=1;i<=paSize;i++){
      let x = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(x);
    }
    setPlacevalue(pass);
   }

   useEffect(()=>{setCopy("Copy");passwordGenerator()},[paSize,num,char])

   const copyItems = ()=>{
    window.navigator.clipboard.writeText(placevalue);
    setCopy("Copied !");
   }

   return (
    <center>
      <h1>Strong Password Generator</h1>
      <br/>
      <input type="text" size={30} value={placevalue} readOnly className="input-field"/>
      <button className="copy-button" onClick={copyItems}>{copy}</button>
      <br/><br/>
      <div className="input-form-values">
        <input type="range" name="slider" min={8} max={30} value={paSize} onChange={(e)=>{setSize(e.target.value)}}/>   Length of Password({paSize})  &nbsp; &nbsp; &nbsp;
        <input type="checkbox" onChange={()=>{setNum((prev)=>!prev);}}/> Number 
        &nbsp; &nbsp;
        <input type="checkbox" onChange={()=>{setChar((prev)=>!prev);}}/> Character 
      </div>
    </center>
   )
   */
  
   // fourth practice project currency converter and use of API's
/**/ /*//some mistakes in currency converter need to update with regard to API'calls
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('INR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [amount, setAmount] = useState(1);
    const [conversionResult, setConversionResult] = useState(null);
  
    useEffect(() => {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`) // Example API
        .then((response) => response.json())
        .then((data) => {
          const currencyOptions = Object.keys(data.rates).map((key) => ({
            value: key,
            label: key,
          }));
          setCurrencies(currencyOptions);
        });
    }, [fromCurrency]); // Trigger API call when fromCurrency changes
  
    const handleConvert = () => {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[toCurrency];
          setConversionResult((amount * rate).toFixed(2));
        });
    };
  
    return (
      <div className="mycontainer">
        <div className="currency-converter-big-box">
          <Inputbox
            label="From"
            options={currencies}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
          <Inputbox
            label="To"
            options={currencies}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
          <div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button className="convert-currency-button" onClick={handleConvert}>
              Convert {fromCurrency} to {toCurrency}
            </button>
          </div>
          {conversionResult && (
            <div className="result">
              <h3>{amount} {fromCurrency} = {conversionResult} {toCurrency}</h3>
            </div>
          )}
        </div>
      </div>
    );
    */
   // unit converter 
   /*
    let [Value,setvalue] = useState(0);
    let [result,setresult] = useState(0);
    let [convertfrom,setconfrom] = useState('metre');
    let [convertto , setconto] = useState(convertfrom);


    const quantities = {
        metre : {
          metre : 1,
          centimetre : 100,
          kilometre : 0.001,
          millimetre : 1000,
          micrometre : 1000000,
          mile : 0.000621371,
          yard : 1.09361 ,
          foot : 3.28084,
          inch : 39.3701 , 
          nautical_mile : 0.000539957
        }
    }
  const mykey = Object.keys(quantities.metre);

  const checkvalue = () => {
    setresult(Value * quantities.metre[convertto]);
  };

  
  return (
    <>
      <div className="mycontainer">
        <div className="currency-converter-big-box">
          <br/>
          <input type="number" min={0} value={Value} onChange={(e) => setvalue(e.target.value)} /><br/>
          convert from <br/>
          <select value={convertfrom} onChange={(e) => setconfrom(e.target.value)}>
            <option>meter</option>
          </select>
          <br/><br/>
          convert to
          <br/>
          <select value={convertto} onChange={(e) => setconto(e.target.value)}>
            {mykey.map((key) => (
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
  */
// react router project / practice

  return (
    <>

    </>
  )
}
  
  export default App2;