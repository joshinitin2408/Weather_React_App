import React, { useEffect, useState } from 'react'

const Weat = () => {
    const [search, setSearch] = useState('pune')
    const [data, setData] = useState('')
    const [data1, setData1] = useState('')
    console.log(data1)
    // const {coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod} = data//
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b11b2cead68e564b5f16de42dd46c417`
            const response = await fetch(url)
            const reJson = await response.json()
            setData(reJson.main)
            const {main:weathermode } = reJson.weather[0]
            const {speed} = reJson.wind
            const {country} = reJson.sys
            const myweatherinfo = {
                weathermode,
                speed,
                country,
            }
            setData1(myweatherinfo)
        }
        fetchApi()
    }, [search])
    return (
        <>
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow my-4 mx-4">
                    <div class="card-header">
                        <form>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Type City Name Here" onChange={(e) => {
                                        setSearch(e.target.value)
                                    }} />
                                </div>

                            </div>
                        </form>
                    </div>
                    {!data ? (
                        <p>'No Data Found !!!'</p>
                    ) : (
                        <>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">{search}<big class="text-muted">/{data1.country}</big></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li> <b>Weather Type :</b> {data1.weathermode}</li>
                                    <li> <b>Temprature :</b> {data.temp} <span>&#8451;, </span> <b>Minimum Temprature :</b> {data.temp_min} <span>&#8451;, </span> <b>Maximun Temprature :</b> {data.temp_max} <span>&#8451;</span></li>
                                    <li> <b>Wind Speed :</b> {data1.speed} <b>KM/H</b> </li>
                                    <li><b>Humidity :</b> {data.humidity}</li>
                                </ul>
                            </div></>)}

                </div>

            </div>
        </>
    )
}

export default Weat