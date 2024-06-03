import React from "react"
import './index.css';

function Inputbox({ label, options, value, onChange }) {
    
    return (
      <>
        <div className="currency-input">
            <b>
            <h3 style={{float:'left'}}>{label}</h3>
            <h3 style={{float:'right'}}>Currency Type</h3>
            <br/><br/><br/>
            <input type="number" placeholder="0" min={0}/>
            <select value={value} onChange={onChange} style={{float:'right'}}>
            {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
            </select>
            </b>
        </div>
      </>
    )
  }
  
  export default Inputbox
  