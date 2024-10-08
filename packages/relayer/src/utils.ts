import { deriveAddress, deriveKeypair, generateSeed } from "ripple-keypairs";

export const generateXrplPubkey = (): string => {
  const seed = generateSeed();
  return deriveKeypair(seed).publicKey;
};

export const generateXrplAddress = (): string => {
  return deriveAddress(generateXrplPubkey());
};
