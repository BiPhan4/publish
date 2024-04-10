// local wasmd chain config
export const wSignerChain = 'localwasm-1'

export const wasmd = {
signerChain: wSignerChain,
enabledChains: [wSignerChain],
queryAddr: 'http://localhost:59364',
txAddr: 'http://localhost:59363',
chainConfig: { // wasmd chain config
    chainId: wSignerChain,
    chainName: 'wasmd localnet',
    rpc: 'http://localhost:59363',
    rest: 'http://localhost:59375',
    bip44: {
        coinType: 118
    },
    stakeCurrency: {
        coinDenom: 'wsm',
        coinMinimalDenom: 'uwsm',
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
        coinDenom: 'wsm',
        coinMinimalDenom: 'uwsm',
        coinDecimals: 6
        }
    ],
    feeCurrencies: [
        {
        coinDenom: 'wsm',
        coinMinimalDenom: 'uwsm',
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
