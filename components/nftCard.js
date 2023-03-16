import { useRouter } from 'next/router';
import { useContractWrite, usePrepareContractWrite, useContractRead, useWaitForTransaction, useAccount } from 'wagmi'
import React from 'react'
import { useState } from "react";
import { ethers } from "ethers";

import Buy from "../components/buyNFT.js";
import List from "../components/listNFT.js";

import { f_nftaddress_polygon, f_nftaddress_mumbai, marketplace_mumbai } from "../config";
import Marketplace from "../artifacts/contracts/Marketplace.sol/Marketplace.json";
// import { useDebounce } from 'use-debounce';


export const NFTCard = ({nft}) => {

    // const { address, isConnected } = useAccount();

    const [ price, setPrice ] = useState(1)
    // console.log(`token id is ${nft.tokenId}`);

    const router = useRouter();

    // const debouncedPrice = useDebounce(price, 500)

    // Fetching price of tokens based on their token ids and mother contract address
    // This hooks read data from the marketplace contract 
    useContractRead({
        address: marketplace_mumbai,
        abi: Marketplace.abi,
        functionName: 'pricePerTokenGetter',
        args: [nft.tokenId],
        onSuccess(data) {
            console.log(`Price per token for token id ${nft.tokenId} is => ${data.toNumber()}`)
            setPrice(data.toNumber());
        },
        onError(error) {
            console.log('Error', error)
        }
    })



    return (        
            <div className="w-1/5 flex flex-col py-2">
                { router.pathname == "/" && 
                <div className='flex w-full'>
                    <div className='w-1/2 bg-teal-300 rounded-t-md flex items-center justify-center py-1'>
                        <p className="text-xl text-white">{nft.amount}</p>
                        <p className='text-xs text-white pl-1'>tokens for sale</p>
                    </div>
                    <div className='w-1/2 bg-teal-300 rounded-t-md flex items-center justify-center py-1'>
                        <p className="text-xl text-white">{nft.amount}</p>
                        <p className='text-xs text-white pl-1'>Matic per token</p>
                    </div>
                </div>               
                }

                {router.pathname == "/my-nfts" && 
                <div className='w-full bg-teal-300 flex items-center justify-center rounded-t-md'>
                    <p className='text-white text-sm'>Balance</p>
                    <p className='text-white text-lg pl-1.5'>{nft.amount}</p>
                </div>
                }
                <div className="rounded-md flex justify-center w-full">
                    <img className="object-cover h-110 " src={nft.metadata?.image}></img>
                </div>

                {router.pathname == "/" ?
                <Buy nft={nft} price={price} totalAmount={nft.amount}></Buy>
                :
                <List nft={nft}></List>
                }

                <div>
                    <div className="flex flex-col y-gap-2 px-2 py-1.5 bg-slate-100 h-110">
                        <div className="flex items-center pb-1">
                            <h2 className="text-sm text-gray-800"><b>{nft.metadata?.name}</b></h2>
                        </div>
                        <div>
                            <p className="text-xs">{nft.metadata?.properties.Artist}</p>
                        </div>
                        <div className="flex-grow">
                            <p className="text-gray-600 text-xs">{nft.metadata?.description}</p>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <a className="w-1/2 text-xs text-white bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400" target={"_blank"} href={nft.tokenUri}>
                            Metadata
                            <svg aria-hidden="true" className="w-3 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>

                        <a className="w-1/2 text-xs text-white bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400" target={"_blank"} href={`https://mumbai.polygonscan.com/address/${nft.tokenAddress._value}`}>
                            Contract
                            <svg aria-hidden="true" className="w-3 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>         
                    </div>
                </div>
            </div>
    )
}
 
