import React from 'react';

class Day extends React.Component {
    convertDate( date ) {
        let d = new Date(date * 1000);
        return d.getUTCMonth() + '/' + d.getDate()
    }
    render() {
        return (
            <div>
                <h3>{this.convertDate(this.props.day.dt)}</h3>
                
                <div>Day: {this.props.day.temp.day}</div>
                <div>Night: {this.props.day.temp.night}</div>
                <div>Humidity: {this.props.day.temp.humidity}</div>
            </div>
        )
    }
}

Day.propTypes = {
    day: React.PropTypes.object
};

export default Day;