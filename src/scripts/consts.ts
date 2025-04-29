import { PublicKey } from "@solana/web3.js";

// TODO: change to your multisig address, which is not the same as the vault address!!
// can be retrieved in the setting of the Squads UI
export const MULTI_SIG_ACCOUNT = new PublicKey("CnTS7RmoqVh88grwarBdkXM63avL4yaz8mtjzxjAj9zn");
// TODO: change to account id in ledger that is squad member 
export const ACCOUNT_ID = 0;
// TODO: change to true if you want to use ledger
export const USE_LEDGER = false;
