import React, { Component } from 'react'

export default class App extends Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

// create your App component here
