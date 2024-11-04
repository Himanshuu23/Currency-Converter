import { useState } from 'react'
import './App.css'
import CurrencyComp from './CurrencyComp.jsx'
import currencyList from './currencyApi.json'

export default function App() {

  const CURRENCY_LIST = currencyList.currencyList
  const [inputFor, setInputFrom] = useState(10)
  const [selectedFrom, setSelectedFrom] = useState('USD')
  const [selectedTo, setSelectedTo] = useState('INR')
  const [inputTo, setInputTo] = useState((inputFor * CURRENCY_LIST[selectedTo])/ CURRENCY_LIST[selectedFrom])

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyComp CURRENCY_LIST={CURRENCY_LIST} setSelectedTo={setSelectedTo} setSelectedFrom={setSelectedFrom} selectedTo={selectedTo} selectedFrom={selectedFrom} setInputTo={setInputTo} setInputFrom={setInputFrom} currencyList={CURRENCY_LIST} inputFor={inputFor} inputTo={inputTo} />
    </>
  )
} 