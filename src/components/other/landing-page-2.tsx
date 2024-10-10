"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bitcoin,
  DollarSign,
  Lock,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function EnhancedLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      role: "Crypto Enthusiast",
      content:
        "CryptoVault has revolutionized how I manage my digital assets. It's secure, fast, and incredibly user-friendly!",
    },
    {
      name: "Jane Smith",
      role: "Day Trader",
      content:
        "As a day trader, I need a wallet I can trust. CryptoVault provides the security and speed I need for my daily transactions.",
    },
    {
      name: "Mike Johnson",
      role: "Tech Investor",
      content:
        "The multi-currency support and bank-grade security of CryptoVault make it my go-to platform for all my crypto investments.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">CryptoVault</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#features"
                  className="hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="hover:text-green-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-green-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
              Secure Your Crypto Future
            </h1>
            <p className="text-2xl mb-8 text-gray-300 animate-fade-in-up animation-delay-300">
              The most trusted web crypto wallet for managing your digital
              assets
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg animate-fade-in-up animation-delay-600">
              Get Started
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose CryptoVault?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Lock className="h-12 w-12 text-green-400" />}
                title="Bank-Grade Security"
                description="Your assets are protected by state-of-the-art encryption and multi-factor authentication."
              />
              <FeatureCard
                icon={<Bitcoin className="h-12 w-12 text-green-400" />}
                title="Multi-Currency Support"
                description="Store and manage a wide range of cryptocurrencies in one secure place."
              />
              <FeatureCard
                icon={<DollarSign className="h-12 w-12 text-green-400" />}
                title="Easy Transactions"
                description="Send and receive crypto with just a few clicks. It's as simple as can be."
              />
            </div>
          </div>
        </section>

        <section id="security" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-center mb-12 text-gray-400">
            We employ cutting-edge security measures to ensure your assets are
            always protected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Advanced Encryption
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>256-bit AES encryption for all stored data</li>
                <li>End-to-end encryption for transactions</li>
                <li>Secure key generation and management</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Multi-Layer Protection
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Multi-factor authentication options</li>
                <li>Biometric security features</li>
                <li>Regular security audits by third-party experts</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              What Our Users Say
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <p className="text-lg mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-500 rounded-full mr-4"></div>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 p-2 rounded-full"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }>
                <ChevronLeft className="text-white" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 p-2 rounded-full"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }>
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How secure is CryptoVault?</AccordionTrigger>
              <AccordionContent>
                CryptoVault employs bank-grade security measures, including
                256-bit AES encryption, multi-factor authentication, and regular
                third-party security audits to ensure the highest level of
                protection for your digital assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Which cryptocurrencies are supported?
              </AccordionTrigger>
              <AccordionContent>
                CryptoVault supports a wide range of cryptocurrencies, including
                Bitcoin, Ethereum, Litecoin, and many more. We're constantly
                adding support for new currencies to meet our users' needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How quickly can I make transactions?
              </AccordionTrigger>
              <AccordionContent>
                Transactions on CryptoVault are processed quickly and
                efficiently. The exact time can vary depending on the
                cryptocurrency and network congestion, but we strive to provide
                the fastest possible transaction speeds.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Ready to Secure Your Crypto?
            </h2>
            <p className="text-xl text-center mb-8 text-gray-400">
              Join thousands of satisfied users and start managing your digital
              assets with confidence.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-green-400"
                />
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-8">
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 CryptoVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
