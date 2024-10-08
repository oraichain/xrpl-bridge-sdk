import { Client, TransactionAndMetadata, Wallet } from "xrpl";

export interface XrplClient {
  wallet: Wallet;
  client: Client;
  relayerAddr: string;
}

export type BridgeSigners = {
  XRPLWeights: { [account: string]: number };
  XRPLWeightsQuorum: number;
  XRPLPubKeys: { [account: string]: string };
  OraiToXRPLAccount: { [account: string]: string };
};

export type XrplTransactionAndMetadataWrap = TransactionAndMetadata & {
  hash: string;
};

export interface RelayerAction {
  takeAction: () => Promise<any>;
}
