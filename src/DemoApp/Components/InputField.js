import 'materialize-css';
import '../Demo.css'
import { Button } from "react-materialize";
import React, {Component} from 'react'

class InputField extends Component{
    render(){
        return(
            <div className="row topPadding">
                <div className="input-field col s6 offset-s3">
                    <input type="text" className="validate" id="inputField"></input>
                    <label>Enter Text</label>
                    
                </div>
            </div>
        );
    }
}

export default InputField;