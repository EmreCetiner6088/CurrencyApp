import React from 'react'
import axios from 'axios'
import '../css/Currency.css'
import { useState } from 'react'


    let API_KEY = "fca_live_W1jIDka5JALcZwcJ7UIQfOTKP43vNgsMzn568hiT"
    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"


function Currency() {

    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)
    
    
    async function convert() {
        let conclusion = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        let convert_result = amount * conclusion.data.data[toCurrency]
        convert_result = convert_result.toFixed(2)
        setResult(convert_result)
    }
    return (
        <div className="currency">
            <div>
                <h1 className='textCurrency'>Para Birimi Çevirme</h1>
            </div>
            <div className='currencyContainer'>
                <input type="number" className='fromAmount' value={amount} onChange={(e) => {
                    setAmount(e.target.value)
                }}/>
                <select className='fromCurrency' value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <h1 className='arrow'> --{'>'} </h1>
                <select className='toCurrency' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <input type="text" className='toAmount' value={result} onChange={e => setResult(e.target.value)}/>
            </div>
            <div className='buttonContainer'>
            <button onClick={convert}>Çevir</button>
            </div>
        </div>
    )
}

export default Currency
