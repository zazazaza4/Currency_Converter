type objFromApi = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

export const useServiceConverter = () => {
    const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'; 

    const getData = async (url = BASE_URL, ...valuta: string[]) => {
      const res = await fetch(url)
        .then((res) => res.json())
        .catch((e) => {
          console.error(e);
        });

      return valuta.length === 0
        ? res
        : res.filter((item: objFromApi) => valuta.some((element) => element === item.cc));
    };


    const availableCurrencies = async (url = BASE_URL) => {
       const res = await getData(BASE_URL);

       return res.map((item: objFromApi) => item.cc);
    }

    const currencyCurrencies = async (from: string, to: string, amount: number) => {
        const res = await getData(BASE_URL, from, to);
        
        res.then((res: objFromApi) => {
          console.log(res);
        });
    }
    
    return {
        getData,
        availableCurrencies,
        currencyCurrencies
    }
}