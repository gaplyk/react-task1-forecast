import React from 'react';
import axios from 'axios';
import Day from './Day'

const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=3&units=metric&mode=json&appid=e8c5885b3ac09b4e9b33d9f5505353c9';

class Forecast extends React.Component {
    constructor(){
        super();

        this.state = {
            data: {
                city: {
                    name: ""
                },
                list: []
            }
        }

    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city.length > 0){
            axios
                .get(forecastURL,{
                    params: {
                        q: nextProps.city
                    }
                })
                .then(function(response){
                    this.setState({
                        data: response.data
                    })
                }.bind(this))
                .catch(function(response){

                })
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.data.city.name}</h2>
                <div>
                    {this.state.data.list.map(function(day){
                        return <Day key={day.dt} day={day} />
                    })}
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    city: React.PropTypes.string
};

export default Forecast;