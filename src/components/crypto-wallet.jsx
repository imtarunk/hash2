import React, { useState } from "react";
import { FiArrowDown, FiArrowUp, FiCopy, FiEye, FiEyeOff } from "react-icons/fi";

export default function Wallet() {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  // Mock data
  const publicKey = "0x1234...5678";
  const privateKey = "5678...1234";
  const balance = "1.5 ETH";
  const transactions = [
    {
      id: 1,
      type: "send",
      amount: "0.5 ETH",
      to: "0xabcd...efgh",
      date: "2023-04-01",
    },
    {
      id: 2,
      type: "receive",
      amount: "1.0 ETH",
      from: "0xijkl...mnop",
      date: "2023-03-28",
    },
    {
      id: 3,
      type: "send",
      amount: "0.2 ETH",
      to: "0xqrst...uvwx",
      date: "2023-03-25",
    },
  ];

  const handleSend = () => {
    console.log(`Sending ${amount} ETH to ${recipient}`);
    setAmount("");
    setRecipient("");
  };

  const handleReceive = () => {
    console.log("Generating new receive address");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 border border-green-500 rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-400">Crypto Wallet</h2>
          <p className="text-green-300">Manage your cryptocurrency securely</p>
        </div>

        {/* Public Key */}
        <div className="mb-6">
          <label className="text-green-400">Public Key</label>
          <div className="flex items-center mt-1">
            <input
              value={publicKey}
              readOnly
              className="bg-gray-700 text-green-300 border border-green-500 w-full py-2 px-3 rounded-lg"
            />
            <button className="ml-2 p-2 text-green-400 hover:text-green-300">
              <FiCopy className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Private Key */}
        <div className="mb-6">
          <label className="text-green-400">Private Key</label>
          <div className="flex items-center mt-1">
            <input
              type={showPrivateKey ? "text" : "password"}
              value={privateKey}
              readOnly
              className="bg-gray-700 text-green-300 border border-green-500 w-full py-2 px-3 rounded-lg"
            />
            <button
              className="ml-2 p-2 text-green-400 hover:text-green-300"
              onClick={() => setShowPrivateKey(!showPrivateKey)}
            >
              {showPrivateKey ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Balance */}
        <div className="mb-6">
          <label className="text-green-400">Balance</label>
          <p className="text-2xl font-bold mt-1 text-green-300">{balance}</p>
        </div>

        {/* Tabs: Send and Receive */}
        <div className="mb-6">
          <div className="flex space-x-2 bg-gray-700 p-2 rounded-lg">
            <button
              className="w-1/2 text-center text-green-400 bg-gray-600 py-2 rounded-lg"
              onClick={() => console.log("Switch to Send")}
            >
              Send
            </button>
            <button
              className="w-1/2 text-center text-green-400 bg-gray-600 py-2 rounded-lg"
              onClick={() => console.log("Switch to Receive")}
            >
              Receive
            </button>
          </div>

          {/* Send Form */}
          <div className="mt-6">
            <div className="mb-4">
              <label className="text-green-400">Amount (ETH)</label>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-gray-700 text-green-300 border border-green-500 w-full py-2 px-3 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="text-green-400">Recipient Address</label>
              <input
                placeholder="0x..."
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="bg-gray-700 text-green-300 border border-green-500 w-full py-2 px-3 rounded-lg"
              />
            </div>
            <button
              className="w-full bg-green-600 text-gray-900 py-2 rounded-lg hover:bg-green-500"
              onClick={handleSend}
            >
              Send Transaction
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-green-400">Recent Transactions</h3>
          <ul className="space-y-2">
            {transactions.map((tx) => (
              <li key={tx.id} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center">
                  {tx.type === "send" ? (
                    <FiArrowUp className="w-5 h-5 text-red-400 mr-2" />
                  ) : (
                    <FiArrowDown className="w-5 h-5 text-green-400 mr-2" />
                  )}
                  <span className="text-green-300">
                    {tx.type === "send" ? `To: ${tx.to}` : `From: ${tx.from}`}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`text-${tx.type === "send" ? "red" : "green"}-400`}>
                    {tx.type === "send" ? "-" : "+"}
                    {tx.amount}
                  </span>
                  <span className="text-green-300 ml-2">{tx.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
