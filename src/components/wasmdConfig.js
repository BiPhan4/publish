// local wasmd chain config
export const wSignerChain = 'wasmd-1'

export const wasmd = {
signerChain: wSignerChain,
enabledChains: [wSignerChain],
queryAddr: 'http://localhost:56385',
txAddr: 'http://localhost:56389',
chainConfig: { // wasmd chain config
    chainId: wSignerChain,
    chainName: 'wasmd localnet',
    rpc: 'http://localhost:56389',
    rest: 'http://localhost:56386',
    bip44: {
        coinType: 118
    },
    stakeCurrency: {
        coinDenom: 'stake',
        coinMinimalDenom: 'ustake',
        coinDecimals: 6
    },
    bech32Config: {
        bech32PrefixAccAddr: 'wasm',
        bech32PrefixAccPub: 'wasmpub',
        bech32PrefixValAddr: 'wasmvaloper',
        bech32PrefixValPub: 'wasmvaloperpub',
        bech32PrefixConsAddr: 'wasmvalcons',
        bech32PrefixConsPub: 'wasmvalconspub'
    },
    currencies: [
        {
        coinDenom: 'stake',
        coinMinimalDenom: 'ustake',
        coinDecimals: 6
        }
    ],
    feeCurrencies: [
        {
        coinDenom: 'stake',
        coinMinimalDenom: 'ustake',
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
