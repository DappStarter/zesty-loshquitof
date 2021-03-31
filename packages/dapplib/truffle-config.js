require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strategy dash soap athlete install entry bridge snake'; 
let testAccounts = [
"0x1563ce3d237959362fc73a9e9b00ba42a1514388dc1d512f5207fe1daa6547e1",
"0xa19a8b5f12078dfaf010aafb275b411c3208587bf79e8cad0ec18e60ad11fb3c",
"0x708fa3691b8dca178f52aa9b3f7531658bdc4087c2257e17f2db10d5e23b3655",
"0xa02a85138c1f42a0f9c2cdc78e46765cdda117deba56692ba06ba89b74372b95",
"0x9d8e8cc4995aefc4db6d597aec762b1a1a65b9d89ee154a7318600d2d6a0ae8a",
"0x9d9469bf477d949844e2546daec5875c9da7c22fcb552c73d771251c2a2d3fa6",
"0x939f370d0bdfc8ed4652b1c5752e398fb6f2c397541842a574320cc8d23be65c",
"0xb0971aa5e50b68c6a169587eb0cc83b9584e18281efce21357ca4c2506b4cef0",
"0x5269481ccabf5d978b9f2137a4cbcef1765d8c6f2c8073a5207ecc32f9d733d2",
"0x73f130bd5e65a91a44241aac319806c6f68ce64345328ba2ed56291165d7fc36"
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
            version: '^0.5.11'
        }
    }
};
