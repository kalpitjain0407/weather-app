import React, { Component } from 'react'
import './Weather.css'

const Weather = (props) => {
    const { city, country, temperature, description, error } = props
    return (
        // <div className="weather__info">
        //     {city && country && <p className="weather__key">Location: <span className="weather__value">{city},{country}</span></p>}
        //     {temperature && <p className="weather__key">Temperature: <span className="weather__value">{temperature}</span></p>}
        //     {description && <p className="weather__key">Description: <span className="weather__value">{description}</span></p>}
        //     {error && <p className="weather__value">{error}</p>}
        // </div>
        <div>
            <div>
                {city && country && temperature && description &&
                    <div className="weather__info">
                        <p className="weather__key">Location: <span className="weather__value">{city},{country}</span></p>
                        <p className="weather__key">Temperature: <span className="weather__value">{temperature}</span></p>
                        <p className="weather__key">Description: <span className="weather__value">{description}</span></p>
                    </div>
                }
            </div>
            <div>
                {(city === undefined || country === undefined || temperature === undefined || description === undefined) && error &&
                    <div className="weather__info"><p className="weather__value">{error}</p></div>
                }
            </div>
        </div >
    )
}

export default Weather
