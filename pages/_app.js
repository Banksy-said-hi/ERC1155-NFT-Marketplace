import Link from "next/link";
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { configureChains, createClient, WagmiConfig, useAccount } from "wagmi";

import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

import { polygonMumbai } from '@wagmi/core/chains';
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { injectedWallet,metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';



const { chains, provider } = configureChains([ polygonMumbai ],[ publicProvider() ])

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
    ]
  },
  {
    groupName: 'Mobile Wallets ( QRCode )',
    wallets: [
      walletConnectWallet({ chains }),
    ]
  },
  {
    groupName: "Special for Mr.Maleki",
    wallets: [
      ledgerWallet({chains})
    ]
  }
])

const wagmiClient = createClient( {autoConnect: true, connectors,provider })


function MyApp({ Component, pageProps }) {

  // const { address, isConnected } = useAccount();

  // let [isOpen, setIsOpen] = useState(false)


  // useEffect(() => {
  //   if(!isConnected) {
  //     openModal()
  //   }
  // }, [])

  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }

  // Create a seperate file and component for alerting the user for connecting wallet 
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <nav className="border-b p-6 bg-cyan-400">
          <p className="text-5xl text-white-40">Prototype</p>
          <div className="flex mt-5">
            <div className="grow flex">
              <Link href="/" className="mr-12 text-cyan-100 hover:text-blue-600">
                Gallery
              </Link>
              <Link href="/create-nft" className="mr-12 text-cyan-100 hover:text-blue-600">
                Create NFT
              </Link>
              <Link href="/my-nfts" className="mr-12 text-cyan-100 hover:text-blue-600">
                My NFTs
              </Link>
              {/* <Link href="/test" className="mr-12 text-cyan-100 hover:text-blue-600">
                test
              </Link> */}
            </div>
            <ConnectButton className="grow-0" chainStatus="name" accountStatus="full" />
          </div>
        </nav>
        <Component {...pageProps}/> 
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp
