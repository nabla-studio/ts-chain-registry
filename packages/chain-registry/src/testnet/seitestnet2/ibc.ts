import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-44',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'seitestnet2',
      client_id: '07-tendermint-127',
      connection_id: 'connection-107'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-75',
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