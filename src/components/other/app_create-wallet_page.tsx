"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
@ts
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Copy, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function CreateWalletPage() {
  const [walletName, setWalletName] = useState("Wallet 1");
  const [isCreated, setIsCreated] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);

  // This is a placeholder. In a real application, you would generate this securely.
  const secretPhrase = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
  ];

  const handleCreateWallet = () => {
    // Here you would typically interact with a wallet creation API
    console.log("Creating wallet:", walletName);
    setIsCreated(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(secretPhrase.join(" "));
    alert("Secret phrase copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-cyan-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Create Your Wallet
          </h2>
        </div>

        {!isCreated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="wallet-name"
                  className="block text-sm font-medium text-gray-400">
                  Wallet Name
                </label>
                <Input
                  id="wallet-name"
                  name="wallet-name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter wallet name"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                />
              </div>
              <Button
                onClick={handleCreateWallet}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150 ease-in-out">
                Create Wallet
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <Card className="bg-gray-800 border-gray-700 rounded-xl overflow-hidden">
              <CardHeader className="bg-gray-750 border-b border-gray-700">
                <CardTitle className="text-white">
                  Your Secret Recovery Phrase
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Write down these 12 words in order and keep them safe. You'll
                  need them to recover your wallet.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {secretPhrase.map((word, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-2 rounded-lg text-center">
                      <span className="text-gray-400">{index + 1}.</span>{" "}
                      <span className="text-white">
                        {showPhrase ? word : "••••"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-gray-750 border-t border-gray-700">
                <Button
                  variant="outline"
                  onClick={() => setShowPhrase(!showPhrase)}
                  className="flex items-center space-x-2 text-cyan-500 hover:text-cyan-400 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-700 transition duration-150 ease-in-out">
                  {showPhrase ? (
                    <>
                      <EyeOff size={16} />
                      <span>Hide Phrase</span>
                    </>
                  ) : (
                    <>
                      <Eye size={16} />
                      <span>Show Phrase</span>
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-cyan-500 hover:text-cyan-400 bg-transparent border border-gray-600 rounded-lg hover:bg-gray-700 transition duration-150 ease-in-out">
                  <Copy size={16} />
                  <span>Copy</span>
                </Button>
              </CardFooter>
            </Card>
            <div className="mt-6 text-center">
              <Button
                onClick={() => {
                  // Here you would typically save the wallet and redirect to the dashboard
                  console.log("Wallet created:", walletName);
                  // Redirect to dashboard or next step
                }}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150 ease-in-out">
                I've Saved My Recovery Phrase
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
