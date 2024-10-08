export const XRPL_CONFIG = {
  // XRPLHDPath is the hd path used to derive xrpl keys.
  XRPLHDPath: "m/44'/144'/0'/0/0",
  // CoinType is the coin type of XRPL token.
  CoinType: 144,
  // XRPLIssuedTokenDecimals is XRPL decimals used on the coreum.
  XRPLIssuedTokenDecimals: 15,
  // XRPCurrencyDecimals is XRP decimals used on the coreum.
  XRPCurrencyDecimals: 6,
  // MaxTicketsToAllocate is the max supported tickets count to allocate.
  MaxTicketsToAllocate: 250,
  // MaxAllowedXRPLSigners max signers for the signers set.
  MaxAllowedXRPLSigners: 32,
  // MultiSigningReserveDrops is the reserve locked for the multi-signing account.
  MultiSigningReserveDrops: 2000000,
};

export const PROCESS_INTERVAL = 3000; // 3s interval

export const XRPL_ERROR_CODE = {
  // TecTxResultPrefix is `tec` prefix for tx result.
  TecTxResultPrefix: "tec",
  // TemTxResultPrefix is `tem` prefix for tx result.
  TemTxResultPrefix: "tem",
};

export enum XRPLTxResult {
  Success = "tesSUCCESS",
  TefNO_TICKET = "tefNO_TICKET",
  TefPAST_SEQ = "tefPAST_SEQ",
  TelINSUF_FEE_P = "telINSUF_FEE_P",
}
