import { useAccount, useConnect, useDisconnect, useContractRead } from 'wagmi';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import React from 'react'
import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

import { f_nftaddress_mumbai, f_nftaddress_polygon, marketplace_mumbai } from "../config";
import { NFTCard } from "../components/nftCard";

import Marketplace from "../utils/Marketplace.json";
import F_NFT from "../utils/F_NFT.json";
import Loading from '../components/loadingSVG';



const Home = () => {

  const [ nfts, setNfts ] = useState(null)
  const [ loadingState, setLoadingState] = useState("not-loaded")

  // const { data, isError, isLoading } = useContractRead({
  //   address: f_nftaddress_mumbai,
  //   abi: F_NFT.abi,
  //   functionName: 'fetchMarketItems',
  // })

  // console.log(data?.result.map(i => {
  //   console.log(i.tokenId);
  // }));

  // const items = await Promise.all(data.map(async i => {
  //   const tokenUri = await contract.tokenURI(i.tokenId)
  //   const meta = await axios.get(tokenUri)
  //   let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
  //   let item = {
  //     price,
  //     tokenId: i.tokenId.toNumber(),
  //     seller: i.seller,
  //     owner: i.owner,
  //     image: meta.data.image,
  //     name: meta.data.name,
  //     description: meta.data.description,
  //   }
  //   return item
  // }))
  // setNfts(items)
  // setLoadingState('loaded') 


  useEffect(() => {
    fetchNfts()
  }, [])
  
  const fetchNfts = async () => {
    console.log("Fetching NFTs ...");
    try {
      if(!Moralis.Core.isStarted) {
        await Moralis.start({
          apiKey: 'S2G6FIbQHlDdSnQrNEf0n8l3hBUgbM6vtrQDvnn81SohpinvCgAMwBy90ZKXytpd',
        });
      }
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address: marketplace_mumbai,
        chain: EvmChain.MUMBAI,
      });
      console.log(response.result)
      setNfts(response.result);
      console.log("Done")
      setLoadingState("loaded")
    } catch(e) {
      console.log(e);
    }
  }

  if(loadingState === "loaded" && !nfts.length) return (
    <div className='flex justify-center items-center'>
      <h1 className='px-10 py-10 text-3xl'>No items in marketplace</h1>
    </div>
  )
  
  return (
    <div>
      <div className="flex flex-wrap gap-y-5 my-10 w-full gap-x-8 justify-center">
        {
          nfts ? nfts.map(nft => {
            return (
              <NFTCard nft={nft} key={nft.tokenId}></NFTCard>
            )
          }) :
          <Loading></Loading>
        } 
      </div>
    </div>

  )
}



export default Home

//style={{backgroundImage: `url("/bg.jpg")`, height: "300px"}}

