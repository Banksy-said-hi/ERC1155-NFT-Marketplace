import Marketplace from "../artifacts/contracts/Marketplace.sol/Marketplace.json";
import { f_nftaddress_polygon, f_nftaddress_mumbai, marketplace_mumbai } from "../config";
import { useContractWrite, usePrepareContractWrite, useContractRead, useWaitForTransaction, useAccount } from 'wagmi'
import { useState } from "react";
import { useRouter } from 'next/router';

const List = (props) => {

    const [ listingPrice, setListingPrice ] = useState("Not-initialized")

    const router = useRouter();

    const { config } = usePrepareContractWrite({
        address: marketplace_mumbai,
        abi: Marketplace.abi,
        functionName: 'createMarketItem',
        args: [f_nftaddress_mumbai, props.nft.tokenId, props.nft.amount, listingPrice],
    })

    const { data, write } = useContractWrite({
        ...config, 
        onError(error) {
            console.log('Error', error)
            alert("An error happened! Check console!")
        },
        onSuccess(data) {
            console.log('NFT listed successful', data)
            setTimeout(() => {
                router.push("/")
            }, 15000)  
        },
        // onSettled() {

        // }
    })

    const { isLoading, isSuccess } = useWaitForTransaction({hash: data?.hash});
    

    return (
        <div className="w-full">
            {
                isLoading ? <p className="text-white bg-blue-700 text-center py-2.5">Listing your NFT...</p> :
                    isSuccess ? <p className="text-white bg-blue-700 text-center py-2.5">Still working...</p> : 
                    <div className='w-full flex'>
                        <button type="submit" onClick={write} disabled={!write} className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
                        <input type="number" onChange={(e) => setListingPrice(e.target.value)} className="w-2/3 text-center bg-gray-50 border border-blue-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price Per Token"></input>
                    </div> 
            }
        </div>
    )
}

export default List