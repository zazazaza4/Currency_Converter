export const useServiceConverter = () => {
    const BASE_URL = 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD'; 

    const getData = async (url = BASE_URL, ...valuta) => {
        const res = await fetch(url)
        .then( res => res.json())
        .catch( e => {
            console.error(e);
        }) 

        return valuta.length === 0 ? res : res.filter( item => valuta.some( element => element === item.cc));
    }


    const availableCurrencies = async (url = BASE_URL) => {
       const res = await getData(BASE_URL);

       return res.map( item => item.cc);
    }

    const currencyCurrencies = async (from, to, amount) => {
        const res = await getData(BASE_URL, from, to);

        res.then( res => {
            console.log(res)
        })
    }
    
    return {
        getData,
        availableCurrencies,
        currencyCurrencies
    }
}