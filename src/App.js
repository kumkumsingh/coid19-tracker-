import React from 'react';
import { Cards , Chart , CountryCode } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from './images/image.png'

class App extends React.Component{
    state = {
        data:{},
        country : ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data:fetchedData})

        console.log('checking data', fetchedData)
    }
    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data:fetchedData , country: country})
        console.log('fetchedDatafor country', this.state.data)

    }
    render(){

        const { data , country} = this.state;
        return(
            <div className={styles.container}>
            <img  className={ styles.image } src={coronaImage} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryCode handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;
