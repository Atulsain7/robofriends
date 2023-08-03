import { Component } from "react";
import React from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor(){
        super()
        this.state = {
        robots: [],
        searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    // this event is called in SearchBox input
    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }
    
    render(){
            const filterRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
                })
            if (robots.length === 0){
                return <h1>Loading</h1>
            }else{
                return (
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filterRobots}/>                            
                            </ErrorBoundary>
                        </Scroll>
                    </div>
        
                )
            }
        }
}

export default App;