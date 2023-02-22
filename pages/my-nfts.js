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

  useEffect(() => {
    fetchNfts()
  }, [])

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
      console.log(response?.result)
      console.log(`All nfts: ${response?.result.length}`);

      const array = response.result.filter((nft) => checkNft(nft))
      console.log(`NFTs in collection: ${array.length}`);
      console.log("Done")
      setNfts(array);
    } catch (e) {
      console.error(e);
    }  
  }

  const checkNft = (nft) => {
    if(nft.tokenAddress._value.toLowerCase() == f_nftaddress_mumbai.toLowerCase()) {
      return nft
    }
  }

  
    return (
      <div className="flex flex-wrap gap-y-6 my-10 w-full gap-x-8 justify-center">
        {nfts ?
        nfts.map((nft, index) => {
          return (
            <NFTCard nft={nft} key={index}></NFTCard>
          )
        })
        :
        <div>
          <h1>Loading NFTs</h1>
        </div>
        }
      </div>
    )
} 


export default MyNFTs

