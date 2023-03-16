// import { Network, Alchemy } from "alchemy-sdk";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useEffect, useState } from "react";
import React from 'react'
import { f_nftaddress_mumbai, marketplace_mumbai } from "../config";
import { NFTCard } from "../components/nftCard";
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';



// Simple and Sweat

const MyNFTs = () => {

  const { address, isConnected } = useAccount();
  const [ nfts, setNfts ] = useState(null)
  const [ loadingState, setLoadingState ] = useState("not-loaded");

  let informingText = <h1>Loading</h1>

  useEffect(() => {
    fetchNfts()
  }, [isConnected])



  const fetchNfts = async () => {
    try {  
      console.log(`Fetching NFTs for the connected address...`);
      const chain = EvmChain.MUMBAI;
      
      if(!Moralis.Core.isStarted) {
        await Moralis.start({apiKey: 'S2G6FIbQHlDdSnQrNEf0n8l3hBUgbM6vtrQDvnn81SohpinvCgAMwBy90ZKXytpd'});
      }
      
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address,
          chain,
      });
      console.log(`All minted nfts by the connected address: ${response?.result.length}`);
      console.log(response?.result)

      const array = response.result.filter((nft) => checkNft(nft))
      console.log(`NFTs in collection: ${array.length}`);
      console.log("Done")
      setNfts(array);
      setLoadingState("loaded")
    } catch (e) {
      console.error(e);
    }  
  }

  const checkNft = (nft) => {
    if(nft.tokenAddress._value.toLowerCase() == f_nftaddress_mumbai.toLowerCase()) {
      return nft
    }
  }

  // if(loadingState === "loaded" && !nfts.length) return (
  //   <div className='flex justify-center items-center'>
  //     <h1 className='px-10 py-10 text-3xl'>You have no items</h1>
  //   </div>
  // )

  // if(!isConnected) return (

  // )
  
  return (
    <div>
      {
      !isConnected ?
      <div className='flex justify-center items-center'>
        <h1 className='px-10 py-10 text-3xl'>Please connect your wallet</h1>
      </div>
      :
        nfts ?  
        <div className="flex flex-wrap gap-y-6 my-10 w-full gap-x-8 justify-center">
          {nfts.map((nft, index) => {
            return (
              <NFTCard nft={nft} key={index}></NFTCard>
            )
          })}
        </div>
        :
        <div className='flex justify-center items-center'>
          <h1 className='px-10 py-10 text-3xl'>Loading NFTs</h1>
        </div>
      }
    </div>
    // <div className="flex flex-wrap gap-y-6 my-10 w-full gap-x-8 justify-center">
    //   {nfts ?
    //   nfts.map((nft, index) => {
    //     return (
    //       <NFTCard nft={nft} key={index}></NFTCard>
    //     )
    //   })
    //   :
    //   <div>
    //     <h1>Loading NFTs</h1>
    //   </div>
    //   }
    // </div>
  )
} 


export default MyNFTs

