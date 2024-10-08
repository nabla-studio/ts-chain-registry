import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthubtestnet',
      client_id: '07-tendermint-53',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1010',
      connection_id: 'connection-911'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1637',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }];
export default info;