import React, { useState } from "react";
// import $ from "jquery";
import {returnAppInfo,updateAppInfo} from '../UniversalFunctions'

export default function SignIn() {
    const [info,setInfo] = useState({
        email:'',
        password:''
    });

    const updateField = event => {
        setInfo({
            ...info,
            [event.currentTarget.name]:event.currentTarget.value
        });
    }

    function redirect(restaurant) {
        const parsed = JSON.parse(restaurant);
        // alert(restaurant)
        if (parsed.url !== 'failedToFindUrl') {
            document.location.href = parsed.url;
        } else {
            alert('Failed Login')
        }
    }

    const submitCredentials = () => {
        fetch('/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        })
        .then((res) => res.text().then(function (text) {
            // const textHsh = JSON.parse(text);
            const textHsh = JSON.parse(text);
            if (!textHsh.hasOwnProperty("removeEmployees")) {
                textHsh["removeEmployees"] = []
            }; 
            // console.log(text)
            // console.log(textHsh)
            // console.log(JSON.stringify(textHsh))
            // console.log(textHsh);
            // const nE = textHsh.newEmployees;
            // delete textHsh["newEmployees"];
            // const one = JSON.stringify(textHsh);
            // const tw = JSON.stringify(nE);
            // console.log(JSON.parse(one));
            // console.log(JSON.parse(tw));
            // const nE = JSON.stringify(text.newEmployees);
            // var nHsh = text; nHsh["newEmployees"] = JSON.stringify()
            localStorage.setItem('DashboardHsh',JSON.stringify(textHsh));
            // localStorage.setItem('DashboardHshNE',JSON.stringify(nE));
            window.location.replace(`http://localhost:3000${textHsh.url}/dashboard`)
          }))
        .catch((err) => console.log('error'))
      }

    
      const handleSubmit = (event) => {
        event.preventDefault();
        submitCredentials();
      }
    
    return (
        <div>
            <form className="container">
                <div className="smallContainer">
                    <label>Email</label>
                    <input name="email" onChange={updateField}></input>
                </div>
                <div className="smallContainer">
                    <label>Password</label>
                    <input name="password" onChange={updateField}></input>
                </div>
                <div className="buttonContainer">
                    <div className="add-button" onClick={handleSubmit}></div>
                </div>
                <a href="http://localhost:3000/forgot-password">Forgott Password</a>
            </form>
        </div>
    )
}