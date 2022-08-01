type objFromApi = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

export const useServiceConverter = () => {
  const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  const _getData = async (url = BASE_URL, ...valuta: string[]) => {
    const res = await fetch(url)
      .then(res => res.json())
      .catch(e => {
        console.error(e);
      });

    return valuta.length === 0
      ? res
      : res.filter((item: objFromApi) => valuta.some(element => element === item.cc));
  };

  const onFormCurrencies = async (url = BASE_URL) => {
    const res: any = await _getData(BASE_URL);
    const currencies = {};

    res.forEach((object: objFromApi) => {
      const { cc, rate } = object;

      currencies[cc] = rate;
    });

    return currencies;
  };

  return {
    onFormCurrencies,
  };
};
