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

  const { address, isConnected } = useAccount();

  let [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    if(!isConnected) {
      openModal()
    }
  }, [])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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


                {/* <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                      <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Before proceeding further, please connect your wallet
                          </p>
                        </div>

                        <div className="mt-4" onClick={closeModal}>
                          <ConnectButton  className="border-3 bg-blue-100 px-4 py-2 text-md " chainStatus="name" accountStatus="full" label='CLICK HERE'/>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition> */}