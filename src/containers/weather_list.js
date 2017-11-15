import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from "../components/chart"

class WeatherList extends Component {

    renderWeather(cityData){
        
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" units="k" /></td>
                <td><Chart data={pressures} color="green" units="nPa" /></td>
                <td><Chart data={humidities} color="purple" units="%" /></td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// Usgin {} you gain access to the inner STATE object: state: { weather: [adasdasdas]}
function mapStateToPropos({weather}) {
    return {weather}
}

export default connect(mapStateToPropos)(WeatherList)