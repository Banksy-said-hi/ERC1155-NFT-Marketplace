import Marketplace from "../artifacts/contracts/Marketplace.sol/Marketplace.json";
import { f_nftaddress_polygon, f_nftaddress_mumbai, marketplace_mumbai } from "../config";
import { useContractWrite, usePrepareContractWrite, useContractRead, useWaitForTransaction, useAccount } from 'wagmi'
import { useState } from "react";
import { useRouter } from 'next/router';
import { ethers } from "ethers";


const Buy = (props) => {

    const [ amount, setAmount ] = useState(null);
    const { address, isConnected } = useAccount();

    const router = useRouter();

    const { config } = usePrepareContractWrite({
        address: marketplace_mumbai,
        abi: Marketplace.abi,
        functionName: 'createMarketSale',
        args: [f_nftaddress_mumbai, props.nft.tokenId, amount],
        overrides: {
            from: address,
            value: ethers.utils.parseUnits((props.price*amount).toString(), "ether")
        },
    })

    const { data, write } = useContractWrite({
        ...config, 
        onError(error) {
            console.log('Error', error)
            alert("An error happened! Check console!")
        },
        onSuccess(data) {
            console.log('NFT bought successful', data)
            setTimeout(() => {
                router.push("/my-nfts")
            }, 15000)  
        },
        // onSettled() {

        // }
    })

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <div className="w-full">
            {
                isLoading ? <p className="bg-blue-700 text-white text-center py-2.5">Buying this item...</p> :
                    isSuccess ? <p className="bg-blue-700 text-white text-center py-2.5">Still working...</p> :
                        <div>
                            <div className='w-full flex items-center justify-center align-px-7 bg-teal-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <p className='text-lg text-white font-semibold pr-1'>{props.price} Matic</p>
                                {/* <p className='text-xs'>( each token )</p> */}
                            </div>
                            <div className="flex bg-teal-300 justify-center items-center">
                                <input value={amount} type="range" min="1" max={props.totalAmount} onChange={(e) => setAmount(e.target.value)} className="w-full mx-1 my-1.5"></input>
                            </div>
                            <button onClick={write} disabled={!write} className="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy {amount} tokens</button>
                        </div> 
            }
        </div>
    )
}

export default Buy