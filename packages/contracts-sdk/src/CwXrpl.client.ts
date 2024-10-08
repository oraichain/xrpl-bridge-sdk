/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {Addr, Uint128, InstantiateMsg, Relayer, ExecuteMsg, Evidence, OperationResult, TransactionResult, TokenState, Action, Expiration, Timestamp, Uint64, Cw20Coin, Coin, QueryMsg, MigrateMsg, AvailableTicketsResponse, BridgeState, BridgeStateResponse, Config, CosmosToken, CosmosTokensResponse, FeesCollectedResponse, OwnershipForString, OperationType, PendingOperationsResponse, Operation, Signature, PendingRefundsResponse, PendingRefund, Boolean, ProcessedTxsResponse, ProhibitedXrplAddressesResponse, TransactionEvidence, TransactionEvidencesResponse, XrplTokenResponse, XRPLToken, XrplTokensResponse} from "./CwXrpl.types";
export interface CwXrplReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
  xrplTokens: ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }) => Promise<XrplTokensResponse>;
  xrplToken: ({
    key
  }: {
    key: string;
  }) => Promise<XrplTokenResponse>;
  cosmosTokens: ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }) => Promise<CosmosTokensResponse>;
  cosmosToken: ({
    key
  }: {
    key: string;
  }) => Promise<CosmosToken>;
  pendingOperations: ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: number;
  }) => Promise<PendingOperationsResponse>;
  availableTickets: () => Promise<AvailableTicketsResponse>;
  feesCollected: ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }) => Promise<FeesCollectedResponse>;
  pendingRefunds: ({
    address,
    limit,
    startAfterKey
  }: {
    address: Addr;
    limit?: number;
    startAfterKey?: Addr[][];
  }) => Promise<PendingRefundsResponse>;
  bridgeState: () => Promise<BridgeStateResponse>;
  transactionEvidence: ({
    hash
  }: {
    hash: string;
  }) => Promise<TransactionEvidence>;
  transactionEvidences: ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }) => Promise<TransactionEvidencesResponse>;
  processedTx: ({
    hash
  }: {
    hash: string;
  }) => Promise<Boolean>;
  processedTxs: ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }) => Promise<ProcessedTxsResponse>;
  prohibitedXrplAddresses: () => Promise<ProhibitedXrplAddressesResponse>;
  ownership: () => Promise<OwnershipForString>;
}
export class CwXrplQueryClient implements CwXrplReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.xrplTokens = this.xrplTokens.bind(this);
    this.xrplToken = this.xrplToken.bind(this);
    this.cosmosTokens = this.cosmosTokens.bind(this);
    this.cosmosToken = this.cosmosToken.bind(this);
    this.pendingOperations = this.pendingOperations.bind(this);
    this.availableTickets = this.availableTickets.bind(this);
    this.feesCollected = this.feesCollected.bind(this);
    this.pendingRefunds = this.pendingRefunds.bind(this);
    this.bridgeState = this.bridgeState.bind(this);
    this.transactionEvidence = this.transactionEvidence.bind(this);
    this.transactionEvidences = this.transactionEvidences.bind(this);
    this.processedTx = this.processedTx.bind(this);
    this.processedTxs = this.processedTxs.bind(this);
    this.prohibitedXrplAddresses = this.prohibitedXrplAddresses.bind(this);
    this.ownership = this.ownership.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  xrplTokens = async ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }): Promise<XrplTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      xrpl_tokens: {
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  xrplToken = async ({
    key
  }: {
    key: string;
  }): Promise<XrplTokenResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      xrpl_token: {
        key
      }
    });
  };
  cosmosTokens = async ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }): Promise<CosmosTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cosmos_tokens: {
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  cosmosToken = async ({
    key
  }: {
    key: string;
  }): Promise<CosmosToken> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cosmos_token: {
        key
      }
    });
  };
  pendingOperations = async ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: number;
  }): Promise<PendingOperationsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pending_operations: {
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  availableTickets = async (): Promise<AvailableTicketsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      available_tickets: {}
    });
  };
  feesCollected = async ({
    relayerAddress
  }: {
    relayerAddress: Addr;
  }): Promise<FeesCollectedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      fees_collected: {
        relayer_address: relayerAddress
      }
    });
  };
  pendingRefunds = async ({
    address,
    limit,
    startAfterKey
  }: {
    address: Addr;
    limit?: number;
    startAfterKey?: Addr[][];
  }): Promise<PendingRefundsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pending_refunds: {
        address,
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  bridgeState = async (): Promise<BridgeStateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bridge_state: {}
    });
  };
  transactionEvidence = async ({
    hash
  }: {
    hash: string;
  }): Promise<TransactionEvidence> => {
    return this.client.queryContractSmart(this.contractAddress, {
      transaction_evidence: {
        hash
      }
    });
  };
  transactionEvidences = async ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }): Promise<TransactionEvidencesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      transaction_evidences: {
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  processedTx = async ({
    hash
  }: {
    hash: string;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      processed_tx: {
        hash
      }
    });
  };
  processedTxs = async ({
    limit,
    startAfterKey
  }: {
    limit?: number;
    startAfterKey?: string;
  }): Promise<ProcessedTxsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      processed_txs: {
        limit,
        start_after_key: startAfterKey
      }
    });
  };
  prohibitedXrplAddresses = async (): Promise<ProhibitedXrplAddressesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      prohibited_xrpl_addresses: {}
    });
  };
  ownership = async (): Promise<OwnershipForString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {}
    });
  };
}
export interface CwXrplInterface extends CwXrplReadOnlyInterface {
  contractAddress: string;
  sender: string;
  createCosmosToken: ({
    decimals,
    description,
    initialBalances,
    name,
    subdenom,
    symbol
  }: {
    decimals: number;
    description?: string;
    initialBalances: Cw20Coin[];
    name?: string;
    subdenom: string;
    symbol?: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  mintCosmosToken: ({
    denom,
    initialBalances
  }: {
    denom: string;
    initialBalances: Cw20Coin[];
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  registerCosmosToken: ({
    bridgingFee,
    decimals,
    denom,
    maxHoldingAmount,
    sendingPrecision
  }: {
    bridgingFee: Uint128;
    decimals: number;
    denom: string;
    maxHoldingAmount: Uint128;
    sendingPrecision: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  registerXrplToken: ({
    bridgingFee,
    currency,
    issuer,
    maxHoldingAmount,
    sendingPrecision
  }: {
    bridgingFee: Uint128;
    currency: string;
    issuer: string;
    maxHoldingAmount: Uint128;
    sendingPrecision: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  recoverTickets: ({
    accountSequence,
    numberOfTickets
  }: {
    accountSequence: number;
    numberOfTickets?: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  recoverXrplTokenRegistration: ({
    currency,
    issuer
  }: {
    currency: string;
    issuer: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  saveSignature: ({
    operationId,
    operationVersion,
    signature
  }: {
    operationId: number;
    operationVersion: number;
    signature: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  saveEvidence: ({
    evidence
  }: {
    evidence: Evidence;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  sendToXrpl: ({
    deliverAmount,
    recipient
  }: {
    deliverAmount?: Uint128;
    recipient: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateXrplToken: ({
    bridgingFee,
    currency,
    issuer,
    maxHoldingAmount,
    sendingPrecision,
    state
  }: {
    bridgingFee?: Uint128;
    currency: string;
    issuer: string;
    maxHoldingAmount?: Uint128;
    sendingPrecision?: number;
    state?: TokenState;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateCosmosToken: ({
    bridgingFee,
    denom,
    maxHoldingAmount,
    sendingPrecision,
    state
  }: {
    bridgingFee?: Uint128;
    denom: string;
    maxHoldingAmount?: Uint128;
    sendingPrecision?: number;
    state?: TokenState;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateXrplBaseFee: ({
    xrplBaseFee
  }: {
    xrplBaseFee: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  claimRefund: ({
    pendingRefundId
  }: {
    pendingRefundId: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  claimRelayerFees: ({
    amounts
  }: {
    amounts: Coin[];
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  haltBridge: (_fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  resumeBridge: (_fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  rotateKeys: ({
    newEvidenceThreshold,
    newRelayers
  }: {
    newEvidenceThreshold: number;
    newRelayers: Relayer[];
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateProhibitedXrplAddresses: ({
    prohibitedXrplAddresses
  }: {
    prohibitedXrplAddresses: string[];
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  cancelPendingOperation: ({
    operationId
  }: {
    operationId: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwnership: (action: Action, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwXrplClient extends CwXrplQueryClient implements CwXrplInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createCosmosToken = this.createCosmosToken.bind(this);
    this.mintCosmosToken = this.mintCosmosToken.bind(this);
    this.registerCosmosToken = this.registerCosmosToken.bind(this);
    this.registerXrplToken = this.registerXrplToken.bind(this);
    this.recoverTickets = this.recoverTickets.bind(this);
    this.recoverXrplTokenRegistration = this.recoverXrplTokenRegistration.bind(this);
    this.saveSignature = this.saveSignature.bind(this);
    this.saveEvidence = this.saveEvidence.bind(this);
    this.sendToXrpl = this.sendToXrpl.bind(this);
    this.updateXrplToken = this.updateXrplToken.bind(this);
    this.updateCosmosToken = this.updateCosmosToken.bind(this);
    this.updateXrplBaseFee = this.updateXrplBaseFee.bind(this);
    this.claimRefund = this.claimRefund.bind(this);
    this.claimRelayerFees = this.claimRelayerFees.bind(this);
    this.haltBridge = this.haltBridge.bind(this);
    this.resumeBridge = this.resumeBridge.bind(this);
    this.rotateKeys = this.rotateKeys.bind(this);
    this.updateProhibitedXrplAddresses = this.updateProhibitedXrplAddresses.bind(this);
    this.cancelPendingOperation = this.cancelPendingOperation.bind(this);
    this.updateOwnership = this.updateOwnership.bind(this);
  }

  createCosmosToken = async ({
    decimals,
    description,
    initialBalances,
    name,
    subdenom,
    symbol
  }: {
    decimals: number;
    description?: string;
    initialBalances: Cw20Coin[];
    name?: string;
    subdenom: string;
    symbol?: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_cosmos_token: {
        decimals,
        description,
        initial_balances: initialBalances,
        name,
        subdenom,
        symbol
      }
    }, _fee, _memo, _funds);
  };
  mintCosmosToken = async ({
    denom,
    initialBalances
  }: {
    denom: string;
    initialBalances: Cw20Coin[];
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint_cosmos_token: {
        denom,
        initial_balances: initialBalances
      }
    }, _fee, _memo, _funds);
  };
  registerCosmosToken = async ({
    bridgingFee,
    decimals,
    denom,
    maxHoldingAmount,
    sendingPrecision
  }: {
    bridgingFee: Uint128;
    decimals: number;
    denom: string;
    maxHoldingAmount: Uint128;
    sendingPrecision: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register_cosmos_token: {
        bridging_fee: bridgingFee,
        decimals,
        denom,
        max_holding_amount: maxHoldingAmount,
        sending_precision: sendingPrecision
      }
    }, _fee, _memo, _funds);
  };
  registerXrplToken = async ({
    bridgingFee,
    currency,
    issuer,
    maxHoldingAmount,
    sendingPrecision
  }: {
    bridgingFee: Uint128;
    currency: string;
    issuer: string;
    maxHoldingAmount: Uint128;
    sendingPrecision: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register_xrpl_token: {
        bridging_fee: bridgingFee,
        currency,
        issuer,
        max_holding_amount: maxHoldingAmount,
        sending_precision: sendingPrecision
      }
    }, _fee, _memo, _funds);
  };
  recoverTickets = async ({
    accountSequence,
    numberOfTickets
  }: {
    accountSequence: number;
    numberOfTickets?: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      recover_tickets: {
        account_sequence: accountSequence,
        number_of_tickets: numberOfTickets
      }
    }, _fee, _memo, _funds);
  };
  recoverXrplTokenRegistration = async ({
    currency,
    issuer
  }: {
    currency: string;
    issuer: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      recover_xrpl_token_registration: {
        currency,
        issuer
      }
    }, _fee, _memo, _funds);
  };
  saveSignature = async ({
    operationId,
    operationVersion,
    signature
  }: {
    operationId: number;
    operationVersion: number;
    signature: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      save_signature: {
        operation_id: operationId,
        operation_version: operationVersion,
        signature
      }
    }, _fee, _memo, _funds);
  };
  saveEvidence = async ({
    evidence
  }: {
    evidence: Evidence;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      save_evidence: {
        evidence
      }
    }, _fee, _memo, _funds);
  };
  sendToXrpl = async ({
    deliverAmount,
    recipient
  }: {
    deliverAmount?: Uint128;
    recipient: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      send_to_xrpl: {
        deliver_amount: deliverAmount,
        recipient
      }
    }, _fee, _memo, _funds);
  };
  updateXrplToken = async ({
    bridgingFee,
    currency,
    issuer,
    maxHoldingAmount,
    sendingPrecision,
    state
  }: {
    bridgingFee?: Uint128;
    currency: string;
    issuer: string;
    maxHoldingAmount?: Uint128;
    sendingPrecision?: number;
    state?: TokenState;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_xrpl_token: {
        bridging_fee: bridgingFee,
        currency,
        issuer,
        max_holding_amount: maxHoldingAmount,
        sending_precision: sendingPrecision,
        state
      }
    }, _fee, _memo, _funds);
  };
  updateCosmosToken = async ({
    bridgingFee,
    denom,
    maxHoldingAmount,
    sendingPrecision,
    state
  }: {
    bridgingFee?: Uint128;
    denom: string;
    maxHoldingAmount?: Uint128;
    sendingPrecision?: number;
    state?: TokenState;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_cosmos_token: {
        bridging_fee: bridgingFee,
        denom,
        max_holding_amount: maxHoldingAmount,
        sending_precision: sendingPrecision,
        state
      }
    }, _fee, _memo, _funds);
  };
  updateXrplBaseFee = async ({
    xrplBaseFee
  }: {
    xrplBaseFee: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_xrpl_base_fee: {
        xrpl_base_fee: xrplBaseFee
      }
    }, _fee, _memo, _funds);
  };
  claimRefund = async ({
    pendingRefundId
  }: {
    pendingRefundId: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_refund: {
        pending_refund_id: pendingRefundId
      }
    }, _fee, _memo, _funds);
  };
  claimRelayerFees = async ({
    amounts
  }: {
    amounts: Coin[];
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_relayer_fees: {
        amounts
      }
    }, _fee, _memo, _funds);
  };
  haltBridge = async (_fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      halt_bridge: {}
    }, _fee, _memo, _funds);
  };
  resumeBridge = async (_fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      resume_bridge: {}
    }, _fee, _memo, _funds);
  };
  rotateKeys = async ({
    newEvidenceThreshold,
    newRelayers
  }: {
    newEvidenceThreshold: number;
    newRelayers: Relayer[];
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      rotate_keys: {
        new_evidence_threshold: newEvidenceThreshold,
        new_relayers: newRelayers
      }
    }, _fee, _memo, _funds);
  };
  updateProhibitedXrplAddresses = async ({
    prohibitedXrplAddresses
  }: {
    prohibitedXrplAddresses: string[];
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_prohibited_xrpl_addresses: {
        prohibited_xrpl_addresses: prohibitedXrplAddresses
      }
    }, _fee, _memo, _funds);
  };
  cancelPendingOperation = async ({
    operationId
  }: {
    operationId: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      cancel_pending_operation: {
        operation_id: operationId
      }
    }, _fee, _memo, _funds);
  };
  updateOwnership = async (action: Action, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ownership: action
    }, _fee, _memo, _funds);
  };
}