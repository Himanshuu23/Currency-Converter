import { useEffect } from "react"

export default function CurrencyComp({setSelectedTo, selectedTo, selectedFrom, setSelectedFrom, currencyList, inputFor, inputTo, setInputFrom, setInputTo, CURRENCY_LIST}) {
    
    function handleTargetFrom(e) {
        setSelectedFrom(e.target.value)
    }

    function handleTargetTo(e){
        setSelectedTo(e.target.value)
    }
    function handleSelectFrom() {
        if (CURRENCY_LIST[selectedTo] > CURRENCY_LIST[selectedFrom]) {
          setInputTo((inputFor * CURRENCY_LIST[selectedTo])/ CURRENCY_LIST[selectedFrom])
        } else {
          setInputTo((inputFor / CURRENCY_LIST[selectedTo])/ CURRENCY_LIST[selectedFrom])
        }
    }
    
    useEffect(() => {
      handleSelectFrom()
    }, [inputFor, selectedFrom, selectedTo])

    return(
        <div className='currency-container'>
            <input onChange={(e) => setInputFrom(e.target.value)} value={inputFor} type="number" style={{margin: '.5rem'}} /><h3 style={{display:'inline', margin: '1rem'}}>From : </h3><select onChange={(e) => handleTargetFrom(e)}>{Object.keys(currencyList).map(currency => {return <option key={currencyList[currency]} selected={selectedFrom == currency}>{currency}</option>})}</select >
            <h3 style={{display:'inline', margin: '1rem'}}>To : </h3><select onChange={(e) => handleTargetTo(e)}>{Object.keys(currencyList).map(currency => {return <option key={currency} selected={selectedTo == currency}>{currency}</option>})}</select>
            <div>{inputTo}</div>
        </div>
    )
}