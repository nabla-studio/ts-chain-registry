export interface IBCChannelInfo {
  channel_id: string;
  client_id?: string;
  port_id: string;
  connection_id?: string;
}
export interface IBCInfo {
  $schema?: string;
  chain_1: {
    chain_name: string;
    client_id: string;
    connection_id: string;
  };
  chain_2: {
    chain_name: string;
    client_id: string;
    connection_id: string;
  };
  channels: {
    chain_1: IBCChannelInfo;
    chain_2: IBCChannelInfo;
    ordering: string;
    version: string;
    fee_version?: string;
    tags?: object;
  }[];
  operators?: {
    chain_1?: {
      address?: string;
    };
    chain_2?: {
      address?: string;
    };
    memo?: string;
    name?: string;
    discord_handle?: string;
  }[];
}
