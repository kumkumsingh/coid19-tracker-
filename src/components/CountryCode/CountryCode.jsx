import React , { useState , useEffect}from 'react';
import { NativeSelect  , FormControl } from '@material-ui/core';
import styles from './CountryCode.module.css'
import { fetchCountries } from '../../api'

const CountryCode = () =>{
    const [ fetchedCountries , setFetchedCountries] = useState([])
    useEffect(() =>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries])

    console.log('fetched countries ',fetchedCountries)
    return (
    <FormControl className={styles.formControl}>
        <NativeSelect>
            <option value="global">Global</option>
        </NativeSelect>
    </FormControl>
    )
}

export default CountryCode;