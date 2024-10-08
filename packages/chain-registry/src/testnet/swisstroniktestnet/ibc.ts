import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3714',
      connection_id: 'connection-3238'
    },
    chain_2: {
      chain_name: 'swisstroniktestnet',
      client_id: '07-tendermint-31',
      connection_id: 'connection-18'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8295',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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