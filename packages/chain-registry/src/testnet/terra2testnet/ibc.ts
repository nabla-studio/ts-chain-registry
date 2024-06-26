import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujiratestnet',
      client_id: '07-tendermint-73',
      connection_id: 'connection-48'
    },
    chain_2: {
      chain_name: 'terra2testnet',
      client_id: '7-tendermint-568',
      connection_id: 'connection-508'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-541',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;