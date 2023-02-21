import { useRouter } from 'next/router';
import { useContractWrite, usePrepareContractWrite, useContractRead, useWaitForTransaction } from 'wagmi'
import React from 'react'
import { useState } from "react";

import { f_nftaddress_polygon, f_nftaddress_mumbai, marketplace_mumbai } from "../config";
import Marketplace from "../utils/Marketplace.json";



export const NFTCard = ({nft}) => {

    const [listingPrice, setListingPrice] = useState(null)

    const router = useRouter();

    const { config } = usePrepareContractWrite({
        address: marketplace_mumbai,
        abi: Marketplace.abi,
        functionName: 'createMarketItem',
        args: [f_nftaddress_mumbai, nft.tokenId, nft.amount, listingPrice],
    })

  
    const { data, write } = useContractWrite({
        ...config, 
        onError(error) {
            console.log('Error', error)
        },
        onSuccess(data) {
            console.log('Success', data)
        },
        onSettled() {
            setTimeout(() => {
                router.push("/")
            }, 15000)  
        }
    })

    const { isLoading, isSuccess } = useWaitForTransaction({hash: data?.hash});


    return (        
            <div className="w-1/5 flex flex-col py-2">
                <div className="rounded-md flex justify-center w-full">
                    <img className="object-cover h-110 rounded-t-md" src={nft.metadata?.image}></img>
                </div>

                <div>
                    {/* {isLoading && 
                    <div className='text-center'>
                        <h2>Please wait..</h2>
                        <p>Listing in process</p>
                    </div>
                    } */}
                    {/* {isSuccess && 
                    <div className='text-center'>
                        <h2>Finished</h2>
                        <p>You will shortly be directed to the Gallery</p>
                    </div>
                    } */}
                    {/* {!isLoading & !isSuccess && */}
                    <div>
                        <div className="flex flex-col y-gap-2 px-2 py-1.5 bg-slate-100 h-110">
                            <div className="flex items-center pb-1">
                                <h2 className="text-sm text-gray-800"><b>{nft.metadata?.name}</b></h2>
                                {
                                    nft.amount && <p className="text-sm text-white bg-teal-300 border border-teal-300 px-2 rounded-md ml-auto">{nft.amount}</p>
                                }
                            </div>
                            <div>
                                <p className="text-xs">{nft.metadata?.properties.Artist}</p>
                            </div>
                            <div className="flex-grow">
                                <p className="text-gray-600 text-xs">{nft.metadata?.description.substr(0, 150)}</p>
                            </div>
                        </div>

                        <div className="w-full text-center"> 
                            {
                                router.pathname == "/" ? 
                                <button className="py-2 w-full text-white bg-blue-500">Buy</button>
                                :
                                router.pathname == "/my-nfts" & isLoading ?
                                <div className='bg-blue-700 text-white w-full text-md text-center py-2.5'><p>Please wait...</p></div>
                                :
                                router.pathname == "/my-nfts" & isSuccess ?
                                <div className='bg-blue-700 text-white w-full text-md text-center py-2.5'><p>Success! Wait again please</p></div>
                                :
                                <div className='flex'>
                                    <button type="submit" onClick={write} className="w-1/3 text-white rounded-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
                                    <input type="number" onChange={e => setListingPrice(e.target.value)} className="w-2/3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-sm" placeholder="Price in Matic" required/>
                                </div>
                            }
                        </div>

                        <div className="flex w-full">
                            <a className="w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400" target={"_blank"} href={nft.tokenUri}>
                                Metadata
                                <svg aria-hidden="true" className="w-3 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>

                            <a className="w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400" target={"_blank"} href={`https://mumbai.polygonscan.com/address/${nft.tokenAddress._value}`}>
                                Contract
                                <svg aria-hidden="true" className="w-3 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>         
                        </div>
                    </div>
                    {/* } */}
                </div>
            </div>
    )
}
 
