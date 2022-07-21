import React, { Component } from "react";

class AddItems extends Component{

    state = {
        name: "",
        age: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })    
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        
        if(e.target.name.value === ''){
            return false;
        } else{

            this.props.addItems(this.state)
        this.setState({
            name: "",
            age: ""
        })
        }

    }
    render() {

        return(

            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder ="Add Name...." onChange={this.handleChange} id="name" value={this.state.name}/>
                <input type="number" placeholder ="Add Age...." onChange={this.handleChange} id="age" value={this.state.age}/>
                <input type="submit" value="Add"/>
            
            </form>
            </div>

        )

    }




}

export default AddItems;