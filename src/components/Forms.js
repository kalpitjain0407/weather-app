import React, { Component } from 'react'
import './Forms.css'

class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            country: ''
        }
    }
    changeCityInput = (event) => {
        const var_city = event.target.value
        this.setState({ city: var_city })
    }

    changeCountryInput = (event) => {
        const var_country = event.target.value
        this.setState({ country: var_country })
    }

    setWeather = () => {
        this.setState({state:this.state},()=>{this.props.getWeather(this.state.city,this.state.country)})
        // this.setState({city:'',country:''})
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" placeholder="Enter city" name="city" value={this.state.city} onChange={this.changeCityInput}></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter country" name="country" value={this.state.country} onChange={this.changeCountryInput}></input>
                </div>
                <button onClick={() => { this.setWeather() }}>Get Weather</button>
            </div>
        )
    }
}

export default Forms
