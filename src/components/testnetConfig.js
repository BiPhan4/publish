export const tSignerChain = 'lupulella-2'

export const testnet = {
    signerChain: tSignerChain,
    enabledChains: [tSignerChain],
    queryAddr: 'https://testnet-grpc.jackalprotocol.com',
    txAddr: 'https://testnet-rpc.jackalprotocol.com',
    chainConfig: {
      chainId: tSignerChain,
      chainName: 'Jackal Testnet II',
      rpc: 'https://testnet-rpc.jackalprotocol.com',
      rest: 'https://testnet-api.jackalprotocol.com',
      bip44: {
        coinType: 118
      },
      coinType: 118,
      stakeCurrency: {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
      },
      bech32Config: {
        bech32PrefixAccAddr: 'jkl',
        bech32PrefixAccPub: 'jklpub',
        bech32PrefixValAddr: 'jklvaloper',
        bech32PrefixValPub: 'jklvaloperpub',
        bech32PrefixConsAddr: 'jklvalcons',
        bech32PrefixConsPub: 'jklvalconspub'
      },
      currencies: [
        {
          coinDenom: 'JKL',
          coinMinimalDenom: 'ujkl',
          coinDecimals: 6
        }
      ],
      feeCurrencies: [
        {
          coinDenom: 'JKL',
          coinMinimalDenom: 'ujkl',
          coinDecimals: 6,
          gasPriceStep: {
            low: 0.002,
            average: 0.002,
            high: 0.02
          }
        }
      ],
      features: []
    }
  }

export const mSignerChain = 'jackal-1'

export const mainnet = {
signerChain: mSignerChain,
enabledChains: [mSignerChain],
queryAddr: 'https://grpc.jackalprotocol.com',
txAddr: 'https://rpc.jackalprotocol.com',
chainConfig: { // mainnet chain config
    chainId: mSignerChain,
    chainName: 'Jackal',
    rpc: 'https://rpc.jackalprotocol.com',
    rest: 'https://api.jackalprotocol.com',
    bip44: {
        coinType: 118
    },
    coinType: 118,
    stakeCurrency: {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
    },
    bech32Config: {
        bech32PrefixAccAddr: 'jkl',
        bech32PrefixAccPub: 'jklpub',
        bech32PrefixValAddr: 'jklvaloper',
        bech32PrefixValPub: 'jklvaloperpub',
        bech32PrefixConsAddr: 'jklvalcons',
        bech32PrefixConsPub: 'jklvalconspub'
    },
    currencies: [
        {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
        }
    ],
    feeCurrencies: [
        {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        gasPriceStep: {
            low: 0.002,
            average: 0.002,
            high: 0.02
        }
        }
    ],
    features: []
}
}


export const lSignerChain = 'test-1'

export const local = {
signerChain: lSignerChain,
enabledChains: [lSignerChain],
queryAddr: 'http://localhost:26657',
txAddr: 'http://localhost:26657',
chainConfig: { // mainnet chain config
    chainId: lSignerChain,
    chainName: 'test-1',
    rpc: 'http://localhost:26657',
    rest: '',
    bip44: {
        coinType: 118
    },
    coinType: 118,
    stakeCurrency: {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
    },
    bech32Config: {
        bech32PrefixAccAddr: 'jkl',
        bech32PrefixAccPub: 'jklpub',
        bech32PrefixValAddr: 'jklvaloper',
        bech32PrefixValPub: 'jklvaloperpub',
        bech32PrefixConsAddr: 'jklvalcons',
        bech32PrefixConsPub: 'jklvalconspub'
    },
    currencies: [
        {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
        }
    ],
    feeCurrencies: [
        {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        gasPriceStep: {
            low: 0.002,
            average: 0.002,
            high: 0.02
        }
        }
    ],
    features: []
}
}