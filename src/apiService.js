export default {
  by: 'default',
  valid_key: true,
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
        buy: 42081.911,
        sell: 42081.911,
        variation: -0.36,
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
    bitcoin: {
      blockchain_info: {
        name: 'Blockchain.info',
        format: [
          'USD',
          'en_US',
        ],
        last: 9584.49,
        buy: 9584.49,
        sell: 9584.49,
        variation: -0.36,
      },
      coinbase: {
        name: 'Coinbase',
        format: [
          'USD',
          'en_US',
        ],
        last: 9587.005,
        variation: -0.304,
      },
      bitstamp: {
        name: 'BitStamp',
        format: [
          'USD',
          'en_US',
        ],
        last: 9594.0,
        buy: 9594.0,
        sell: 9587.93,
        variation: -0.343,
      },
      foxbit: {
        name: 'FoxBit',
        format: [
          'BRL',
          'pt_BR',
        ],
        last: 40469.4,
        variation: -0.567,
      },
      mercadobitcoin: {
        name: 'Mercado Bitcoin',
        format: [
          'BRL',
          'pt_BR',
        ],
        last: 40220.00003,
        buy: 40220.00003,
        sell: 40409.78965,
        variation: -0.816,
      },
      omnitrade: {
        name: 'OmniTrade',
        format: [
          'BRL',
          'pt_BR',
        ],
        last: 40770.0,
        buy: 40770.0,
        sell: 41199.99,
        variation: -1.146,
      },
      xdex: {
        name: 'XDEX',
        format: [
          'BRL',
          'pt_BR',
        ],
        last: 40438.0,
        variation: -0.397,
      },
    },
    taxes: [{
      date: '2019-08-29',
      cdi: 5.9,
      selic: 5.9,
      daily_factor: 1.00022751,
    }],
  },
  execution_time: 0.0,
  from_cache: true,
};
