import React from 'react';

class GetWeather extends React.Component {
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <table className="table table-dark w-75">
                    <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Temp</th>
                        <th scope="col">Sky</th>
                        <th scope="col">Humidity</th>
                        <th scope="col">Clouds</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{this.props.state.city}</th>
                        <td>{this.props.state.temp}</td>
                        <td>{this.props.state.sky}</td>
                        <td>{this.props.state.humidity}</td>
                        <td>{this.props.state.clouds}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GetWeather;