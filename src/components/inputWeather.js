import React from 'react';

class InputWeather extends React.Component {
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form className="w-25" onSubmit={this.props.setWeather}>
                    <div className="form-group">
                        <label style={{color: "white", backgroundColor: "black"}} htmlFor="city">Введите город</label>
                        <input type="text" className="form-control" id="city" name="city"
                               placeholder="Введите название города"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Получить погоду</button>
                </form>
            </div>
        );
    }
}

export default InputWeather;