import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sword, Shield, Coins, Gem } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-minecraft">
      <style jsx global>{`
        @font-face {
          font-family: 'Minecraft';
          src: url('/Minecraft.ttf') format('truetype');
        }
        .font-minecraft {
          font-family: 'Minecraft', monospace;
        }
      `}</style>

      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">CryptoQuest Wallet</div>
          <div className="space-x-4">
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">Login</Button>
            <Button className="bg-green-400 text-gray-900 hover:bg-green-500">Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-green-400">Embark on Your Crypto Adventure</h1>
          <p className="text-xl mb-8">Secure your digital treasures with CryptoQuest Wallet</p>
          <Button className="bg-green-400 text-gray-900 hover:bg-green-500 text-lg px-8 py-4">
            Start Your Quest
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-green-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sword className="mr-2 text-green-400" />
              Fortified Security
            </h2>
            <p>Protect your assets with our diamond-strong encryption and multi-layer defenses.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-green-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-green-400" />
              Easy Trading
            </h2>
            <p>Swap and trade your crypto with the ease of crafting in your favorite block world.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-green-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Coins className="mr-2 text-green-400" />
              Multi-Chain Support
            </h2>
            <p>Explore multiple blockchains like different biomes in your crypto universe.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-green-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Gem className="mr-2 text-green-400" />
              NFT Showcase
            </h2>
            <p>Display your NFT collections like trophies in your virtual trophy room.</p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Join the CryptoQuest Community</h2>
          <div className="max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="mb-4 bg-gray-800 border-green-400 text-gray-100" />
            <Button className="w-full bg-green-400 text-gray-900 hover:bg-green-500">
              Subscribe for Updates
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CryptoQuest Wallet. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-green-400 hover:underline">Terms of Service</a>
            <a href="#" className="text-green-400 hover:underline">Privacy Policy</a>
            <a href="#" className="text-green-400 hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}