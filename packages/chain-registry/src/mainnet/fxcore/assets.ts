import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'fxcore',
  assets: [{
      description: 'The native staking token of the Function X',
      extended_description: 'FX coin is the native token on the Function X ecosystem. It is currently utilized as a governance token as well as a gas token on f(x)Core and f(x)EVM. The subnets that are built on the Function X ecosystem can also choose to utilize FX as their gas token.',
      denom_units: [{
          denom: 'FX',
          exponent: 0
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'FX',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      socials: {
        website: 'https://functionx.io',
        twitter: 'https://x.com/functionx_io'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'The cross chain token of the Function X',
      extended_description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      denom_units: [{
          denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      display: 'PUNDIX',
      name: 'Pundi X Token',
      symbol: 'PUNDIX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            contract: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          provider: 'Function X'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://x.com/PundiXLabs'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;