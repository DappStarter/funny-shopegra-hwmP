require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong reflect saddle arrow guess narrow equal gauge'; 
let testAccounts = [
"0x4164930a3de9a9613f6c4348a679b539f62366d3976e8796b7d2367f00bbfd1b",
"0x112cdfc6a42921daf8e2ca17d384af9aeb1efecc0eba5d80429ec4ed696dc0c4",
"0xb45573ab55e85e824ffa61e73890b9080fcc109258c99d6943537a331a5f3723",
"0xd294b1c69d4105ae92def98a352e04abae5c8478ef44494e95d9dbd075062306",
"0x07ab237ab85fc3248e999a32faa89b75c481b39e36fde5bfe80cbe8ffb7da76c",
"0xccde7e89da4740809518eb20a1f4ae17b17ca1b0a4c22a2142b5e53ccf574d33",
"0x4d0f083e523e95530298d7af59af6391165657d665d3beaa3c5c14b6456e62c6",
"0xa6eb1d6541e22a26e48466ad57c450002642317dd7477e6066f1c6d4079cadbe",
"0xb7704e55998fbe2866fef2ec49c97b3f8e992d868439bc40aa26e34d2a4d568f",
"0x07187ee94fbf00bc0e7c390e332205c2ff362c25dca9998dbb4535fe616efb1c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

