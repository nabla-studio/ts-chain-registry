import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composabletestnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-273',
      connection_id: 'connection-237'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-329',
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