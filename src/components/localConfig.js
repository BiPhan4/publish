// local jackal config for the outpost 
export const lSignerChain = 'puppy-1'

export const local = {
signerChain: lSignerChain,
enabledChains: [lSignerChain],
queryAddr: 'http://localhost:58578',
txAddr: 'http://localhost:58577',
chainConfig: { // local chain config
    chainId: lSignerChain,
    chainName: 'jackal localnet',
    rpc: 'http://localhost:58577',
    rest: 'http://localhost:58579',
    bip44: {
        coinType: 118
    },
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
