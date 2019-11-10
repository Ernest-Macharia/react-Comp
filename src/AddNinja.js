import React, { Component } from 'react'
class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        hobbie: null

    }
    enableChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    enableSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.enableSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.enableChange}/>
                    <label htmlFor="name">Age</label>
                    <input type="text" id="age" onChange={this.enableChange}/>
                    <label htmlFor="name">Hobbie</label>
                    <input type="text" id="hobbie" onChange={this.enableChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddNinja;