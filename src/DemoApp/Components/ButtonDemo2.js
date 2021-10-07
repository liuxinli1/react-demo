import 'materialize-css';
import '../Demo.css'
import { Button } from "react-materialize";
import React, {Component} from 'react'

const GetAllOption = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
};

class ButtonDemo2 extends Component{
    uploadWrapper = ()=>{
        this.onClickUpload()
        //this.onClickRefresh()
    }
    deleteWrapper = () =>{
        this.onClickDelete()
        //this.onClickRefresh()
    }

    onClickUpload(){
        var inputText = document.getElementById("inputField").value;
        if(inputText)
            var PostOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: inputText })
            };
            fetch("http://localhost:5000/routes/demo/data", PostOption)
            .then(response => {
                console.log(response)
                response.json()
                this.onClickRefresh()
            })
            .then(data =>{
                console.log(data)
            })
        console.log(inputText);

        //return this.onClickRefresh()
    }

    onClickRefresh(){
        fetch("http://localhost:5000/routes/demo/datas", GetAllOption)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            var outputText = document.getElementById("TextArea");
            var str = "";
            for(var i = 0; i < data.data.length; i++){
                str += "<p>" + `data id: ${data.data[i]._id}, text: ${data.data[i].text}` + "</p>";
            }
            outputText.innerHTML = str;
        })
    }

    // parseJson(data){
    //     console.log(data)
    //     var outputText = document.getElementById("TextArea");
    //     var str = "";
    //     for(var i = 0; i < data.data.length; i++){
    //         str += `data id: ${data.data[i]._id}, text: ${data.data[i].text}`;
    //     }
    //     outputText.innerHTML = str;
    // }


    onClickDelete(){
        var id = document.getElementById("inputField").value;
        var DeletetOption = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };
        if(id){
            console.log(id)
            fetch(`http://localhost:5000/routes/demo/del/${id}`, DeletetOption)
            .then(response =>{
                this.onClickRefresh()
            })
        }
    }

    render(){
        return(
            <div className="center">
                <Button onClick={this.uploadWrapper}>Upload</Button>

                <Button onClick={this.deleteWrapper}>Delete</Button>

                <Button onClick={this.onClickRefresh}>Refresh</Button>
            </div>
        );
    }
}

export default ButtonDemo2