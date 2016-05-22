import React from 'react';
import Tabs from './Tabs';
import Forecast from './Forecast'

class WeatherForecast extends React.Component {
    constructor() {
        super();

        this.state = {
            city: "",
            cities: ['New York', 'London', 'Kiev']
        };

        this.setCity = this.setCity.bind(this)
    }

    setCity(val){
        this.setState({
            city: val
        })
    }

    render() {
        return (
            <div>
                <Tabs list={this.state.cities} select={this.setCity}/>
                <Forecast city={this.state.city} />
            </div>
        )
    }
}

export default WeatherForecast