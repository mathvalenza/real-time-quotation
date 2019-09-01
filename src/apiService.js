const mock = {
  by: 'default',
  valid_key: false,
  results: {
    currencies: {
      source: 'BRL',
      USD: {
        name: 'Dollar',
        buy: 4.1421,
        sell: 4.1459,
        variation: -0.71,
      },
      EUR: {
        name: 'Euro',
        buy: 4.5559,
        sell: 4.557,
        variation: -1.199,
      },
      GBP: {
        name: 'Pound Sterling',
        buy: 5.0418,
        sell: null,
        variation: -0.732,
      },
      ARS: {
        name: 'Argentine Peso',
        buy: 0.0697,
        sell: null,
        variation: -3.329,
      },
      BTC: {
        name: 'Bitcoin',
        buy: 42205.068,
        sell: 42205.068,
        variation: -0.068,
      },
    },
    stocks: {
      IBOVESPA: {
        name: 'BM&F BOVESPA',
        location: 'Sao Paulo, Brazil',
        points: 101134.609,
        variation: 0.61,
      },
      NASDAQ: {
        name: 'NASDAQ Stock Market',
        location: 'New York City, United States',
        points: 7962.88,
        variation: -0.13,
      },
      CAC: {
        name: 'CAC 40',
        location: 'Paris, French',
        variation: 0.56,
      },
      NIKKEI: {
        name: 'Nikkei 225',
        location: 'Tokyo, Japan',
        variation: 1.19,
      },
    },
    available_sources: [
      'BRL',
    ],
  },
  execution_time: 0.0,
  from_cache: true,
};

export default mock;
