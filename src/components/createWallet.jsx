import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";  // Import the buffer polyfill
import { useState } from "react";
import { IoWallet } from "react-icons/io5";
import * as React from "react";
import { Link, redirect } from "react-router-dom";
import toast from "react-hot-toast";
import Wallet
  from "./crypto-wallet";
const StarButton = () => {
  const [mnemonicArr, setMnemonicArr] = useState([]);
  const [keyPairs, setKeyPairs] = useState([]);
  const [seed, setSeed] = useState(null);  // State to hold the seed
  const [walletCount, setWalletCount] = useState(0);  // Track number of wallets created


  // Create a mnemonic phrase and generate seed
  const createSeed = async () => {
    console.log('clicked');

    const mnemonic = generateMnemonic();  // Generate mnemonic
    setMnemonicArr(mnemonic.split(" "));  // Split mnemonic into array of words
    const seed = mnemonicToSeedSync(mnemonic);  // Convert mnemonic to seed
    setSeed(seed);  // Store the seed in state
    setWalletCount(0);  // Reset the wallet count when a new seed is generated
    setKeyPairs([]);  // Clear previous wallets
  };

  // Generate a new keypair and add it to the keyPairs state
  const createWallet = async () => {
    if (!seed) {
      toast.error("No seed available, generate seed first")
      return;
    }

    const newWalletIndex = walletCount;  // Use current wallet count as index
    const path = `m/44'/501'/${newWalletIndex}'/0'`;  // Solana derivation path
    const derivedSeed = derivePath(path, seed).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    toast.success(`wallet  ${walletCount + 1} created`);
    const newKeyPair = {
      publicKey: keypair.publicKey.toString('hex'),  // Store publicKey as hex
      secretKey: Buffer.from(secret).toString('hex')  // Store secretKey as hex
    };

    // Append the new wallet to the existing keyPairs
    setKeyPairs((prevKeyPairs) => [...prevKeyPairs, newKeyPair]);

    // Increment the wallet count
    setWalletCount((prevCount) => prevCount + 1);
  };
  const wallet = async (publicKey) => {
    const res = await axios()
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Button to create a mnemonic phrase and seed */}
      <button
        className="bg-gray-900 text-white p-4 m-5 rounded-lg"
        onClick={createSeed}
      >
        Create Phrase
      </button>

      {/* Display Mnemonic */}
      <div className="flex bg-gray-800 m-2 p-2 rounded-lg">
        {mnemonicArr.map((word, index) => (
          <div
            key={index}
            className="flex bg-black text-white m-2 p-2 rounded-lg justify-center items-center"
          >
            <span className="text-gray-400 p-1">{`${index + 1}`}</span>
            {word}
          </div>
        ))}
      </div>

      {/* Display Keypairs */}
      <div className="flex flex-col justify-center items-center box-border">
        {keyPairs.length > 0 && (
          keyPairs.map((keyItem, index) => (
            <div key={index} className="text-white bg-gray-800 m-2 p-4 rounded-lg space-y-1.5 w-full flex flex-col items-center justify-center">
              <h1>{`Wallet ${index + 1}`}</h1>
              <div className="space-y-2 flex justify-center items-center">
                <div className="w-full">
                  <div className="border p-1 rounded-lg w-full">
                    <p>Public Key: {keyItem.publicKey}</p>
                  </div>
                  <div className="border p-1 rounded-lg w-full">
                    <p>Secret Key: {keyItem.secretKey}</p>
                  </div>
                </div>
                <Link to={`/wallet`} className="flex flex-col justify-center items-center m-3">
                  <IoWallet size={'40px'} onClick={wallet(keyItem.publicKey)} color="linear-gradient(to right, #9f9f9f 0%, #fff 10%, #868686 20%)" walletPublicKey={keyItem.publicKey} />
                  <a
                    href="#"
                    className="relative inline-block px-2 text-sm font-semibold text-transparent bg-clip-text animate-shine"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #9f9f9f 0%, #fff 10%, #868686 20%)',
                    }}
                  >
                    Click
                  </a>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Button to generate new wallets */}
      <button
        className="bg-gray-900 text-white p-4 m-5 rounded-lg w-[150px]"
        onClick={createWallet}  // Attach the createWallet function here
      >
        New Wallet
      </button>
    </div>
  );
};

export default StarButton;
