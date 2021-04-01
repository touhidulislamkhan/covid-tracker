import React, { Component } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import { fetchData } from './api'

import coronaImg from './images/image.png'


export default class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });

    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImg} className={styles.image} alt='Covid' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
