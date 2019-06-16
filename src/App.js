import React from 'react';
import './App.css';
import GetWeather from './components/getWeather';
import InputWeather from './components/inputWeather';

class App extends React.Component {

    state = {
        city: undefined,
        temp: undefined,
        sky: undefined,
        humidity: undefined,
        clouds: undefined
    };

    // ca82cb87e0bacd052eb9c5b2394e70f5
    // api.openweathermap.org/data/2.5/weather?q=London,uk&appid=


    getCityMethod = async (e) => {
        e.preventDefault();
        this.state.city = 'darova';
        let hTrg = this;
        let city = e.target.elements.city.value;
        let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca82cb87e0bacd052eb9c5b2394e70f5`);
        let resp = await data.json();
        console.log(JSON.stringify(resp));

        hTrg.setState({city: city});
        hTrg.setState({temp: resp.main.temp});
        hTrg.setState({sky: resp.weather[0].description});
        hTrg.setState({humidity: resp.main.humidity});
        hTrg.setState({clouds: resp.clouds.all});
    };

    render() {
        return (
            <div className="App">
                <div className="form-group">
                    <InputWeather setWeather={this.getCityMethod}/>
                </div>
                <div className="form-group">
                    <GetWeather state={this.state}/>
                </div>

            </div>
        );
    }
}

export default App;
