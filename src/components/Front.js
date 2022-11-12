import React, {useState} from 'react';
import "./front.css";
// import React from 'react'

const Front = () => {
     const [isLight,setIsLight]=useState(true);
  return (
    <div id="container" className={isLight===true ?"light-bg":"dark-bg"}>
        <div className={isLight=== true ? "light-text": "dark-text"}>
            <h1>Overreacted</h1>
        </div>
        <button className={isLight===true ? "light-clr" :"dark-clr"}
        onClick={()=>{
            setIsLight((prevValue)=>{
            return !prevValue;
            });
        }}
        >Toggle</button>
        <div className="data">
            <h3>The WET Codbase</h3>
            <div className={isLight===true ? "light-text": "dark-text"}>
                <p>
                    <em> Sunday 4th, 2020 11 min read</em>
                </p>
                <p>Come waste your time with me</p>
            </div>
            <h3>Goodby , Clean Code</h3>
            <div className={isLight===true ? "light-text": "dark-text"}>
                <p>
                    <em>Friday 22nd,2019 5 min read</em>
                </p>
                <p>Let Clean code guide you. Then let it go</p>
            </div>
            <h3>My decade In Review</h3>
            <div className={isLight===true ? "light-text": "dark-text"}>
                <p>
                    <em>Saturday 11th,2018 5 min read</em>
                </p>
                <p>A personal reflection</p>
            </div>
            <h3>What Are The React Team Principles</h3>
            <div className={isLight===true ? "light-text": "dark-text"}>
                <p>
                    <em>Thursday 4th,2015 5 min read</em>
                </p>
                <br/>
            </div>

        </div>
      
    </div>
  )
}

export default Front;
