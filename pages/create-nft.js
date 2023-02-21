import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition, Dialog } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { create } from 'ipfs-http-client';
import { useDebounce } from 'use-debounce'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { useRouter } from 'next/router';


import { f_nftaddress, f_nftaddress_mumbai, fields, photography_Types,  painting_Styles, painting_Techniques, painting_Types } from "../config";

import F_NFT from "../utils/F_NFT.json";

const projectId = "2HflEh1RkD6PNf3zJemWJkOaxeR"
const projectSecret = "0bd137ef81a88899c21d41b4618a1b94"

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
    host: 'infura-ipfs.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});



export default function CreateNFT () {

    const [ field, setField ] = useState({ name: 'Choose Field' });
    const [ type, setType ] = useState({ name: 'Choose Type' });
    const [ style, setStyle ] = useState({ name: 'Choose Style' });
    const [ technique, setTechnique] = useState({ name: 'Choose Technique' });

    const [ name, setName ] = useState(null);
    const [ artist, setArtist ] = useState(null);
    const [ country, setCountry] = useState(null);
    const [ year, setYear ] = useState(null);
    const [ description, setDescription ] = useState(null);
    const [ quantity, setQuantity ] = useState(null);

    const [ imageUrl, setImageUrl ] = useState(null);
    const [ tokenUrl, setTokenUrl ] = useState(null);

    const [ hintMessage, setHintMessage ] = useState("CONNECT YOUR WALLET AND UPLOAD THE IMAGE");

    const debouncedQuantity = useDebounce(quantity)

    const router = useRouter();

    const { config } = usePrepareContractWrite({
        address: f_nftaddress_mumbai,
        abi: F_NFT.abi,
        functionName: 'mint',
        args: [ parseInt(debouncedQuantity), tokenUrl, []],
        enabled: Boolean(debouncedQuantity),
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
                router.push("/my-nfts")
            }, 15000)
        }
    })

    const { isLoading, isSuccess } = useWaitForTransaction({hash: data?.hash});



    async function onChange(e) {
        setHintMessage("PLEASE WAIT! UPLOADING THE IMAGE...")
        console.log("Uploading the image to IPFS...")
        const file = e.target.files[0];
        try {
            const added = await client.add(file, {
                progress: (prog) => console.log(`received: ${prog}`)
            })
            const url = `https://infura-ipfs.io/ipfs/${added.path}`

            console.log(`Image's URL: \n\n ${url}`);

            setImageUrl(url);
            setHintMessage("IMAGE SUCCESSFULLY UPLOADED :)")

            setTimeout(() => {setHintMessage("FILL OUT THE FORM AND CREATE METADATA")}, 3000);
        } catch (e) {
            console.log(e);
            setHintMessage("AN ERROR HAPPENED :( CHECK THE CONSOLE")
        }
    }

    async function createMetadata() {
        setHintMessage("CREATING METADATA...");
        let metadata;
        // These if statements should be summarized
        if (field.name == "Painting") {
            metadata = JSON.stringify({ 
                name, 
                description, 
                image: imageUrl,
                properties: {
                    Field: field.name,
                    Technique: technique.name,
                    Type: type.name,
                    Style: style.name,
                    Artist: artist,
                    Year: year,
                    Country: country
                }
            })
        } else if (field.name == "Sculpture") {
            metadata = JSON.stringify({ 
                name, 
                description, 
                image: imageUrl,
                properties: {
                    Field: field.name,
                    Artist: artist,
                    Year: year,
                    Country: country
                }
            })
        } else if (field.name == "Photography") {
            metadata = JSON.stringify({ 
                name, 
                description, 
                image: imageUrl,
                properties: {
                    Field: field.name,
                    Type: type.name,
                    Artist: artist,
                    Year: year,
                    Country: country
                }
            })
        }
        console.log(`Metadata created: \n\n ${metadata}`);
        setHintMessage("METADATA CREATED");
        upload(metadata)
    }   

    async function upload(metadata) {
        try {
            setHintMessage("TRYING TO UPLOAD METADATA TO IPFS")
            const added = await client.add(metadata);
            const url = `https://infura-ipfs.io/ipfs/${added.path}`;
            setTokenUrl(url);
            setHintMessage("METADATA IS UPLOADED ON IPFS")
            console.log(`Token URL: \n\n ${url}`);
            setTimeout(() => {setHintMessage("ENTER THE AMOUNT AND MINT")}, 3000);
        } catch (error) {
            console.log("Error happened: ", error);
            setHintMessage("AN ERROR HAPPENED! CHECK CONSOLE")
        }
    }


    async function mint() {
        try {
            console.log("Minting...")
            setHintMessage("MINTING...");
            write?.()
        } catch (error) {
            setHintMessage("AN ERROR HAPPENED! CHECK CONSOLE FOR MORE INFO")
            console.log(error);
        }
    }


    return (
        <div>
            { isLoading &&
            <div className="text-center mt-52">
                <h1 className="px-auto py-auto">Please wait! Your transaction is in process...</h1>
            </div> 
            }
            { isSuccess &&
            <div className="text-center mt-52">
                <h1>Congrats! Your NFT is minted successfully</h1>
                <h2>You will be directed to My NFTs page</h2>
            </div>
            }
            { !isSuccess & !isLoading &&
            <div className="flex">
                <div className="flex flex-col ml-10 my-10 w-2/5">
                    <div hidden={tokenUrl}>
                        <input 
                            disabled={!imageUrl}
                            placeholder="Name" 
                            className="my-1 border rounded p-3 h-1.5 ring-1 ring-blue-300 w-full" 
                            onChange={e => setName(e.target.value)}
                        />
                        <input 
                            disabled={!imageUrl}
                            placeholder="Artist" 
                            className="my-1 border rounded p-3 h-1.5 ring-1 ring-blue-300 w-full" 
                            onChange={e => setArtist(e.target.value)}
                        />
                        <input
                            disabled={!imageUrl} 
                            placeholder="Year" 
                            className="my-1 border rounded p-3 h-1.5 ring-1 ring-blue-300 w-full" 
                            onChange={e => setYear(e.target.value)}
                        />
                        <input 
                            disabled={!imageUrl}
                            placeholder="Country" 
                            className="my-1 border rounded p-3 h-1.5 ring-1 ring-blue-300 w-full" 
                            onChange={e => setCountry(e.target.value)}
                        />

                        <Listbox value={field} onChange={setField} disabled={!imageUrl}>
                            <div className="relative my-2">
                                <Listbox.Button className="relative cursor-default w-full rounded-lg bg-white py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{field.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    </span>
                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {fields.map((field, fieldIdx) => (
                                            <Listbox.Option
                                            key={fieldIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={field}
                                            >
                                            {({ selected }) => (
                                                <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {field.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>

                        {field.name == "Painting" && 
                        <div>
                            <Listbox value={type} onChange={setType}>
                            <div className="relative my-3">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{type.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {painting_Types.map((type, typeIdx) => (
                                            <Listbox.Option
                                            key={typeIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={type}
                                            >
                                            {({ selected }) => (
                                                <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {type.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            </Listbox>
                            <Listbox value={style} onChange={setStyle}>
                                <div className="relative my-3">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{style.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {painting_Styles.map((style, styleIdx) => (
                                                <Listbox.Option
                                                key={styleIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={style}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >
                                                        {style.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                            <Listbox value={technique} onChange={setTechnique}>
                                <div className="relative my-3">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{technique.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {painting_Techniques.map((technique, techniqueIdx) => (
                                                <Listbox.Option
                                                key={techniqueIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={technique}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >
                                                        {technique.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        }

                        {field.name == "Photography" &&
                        <Listbox value={type} onChange={setType}>
                            <div className="relative my-3">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{type.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {photography_Types.map((type, typeIdx) => (
                                            <Listbox.Option

                                            key={typeIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={type}
                                            >
                                            {({ selected }) => (
                                                <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {type.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        }

                        <textarea
                            disabled={!imageUrl}
                            placeholder="Additional Information" 
                            className="mt-1 border rounded p-3 ring-1 ring-blue-300 w-full" 
                            onChange={e => setDescription(e.target.value)}
                        /> 
                    </div>


                    {tokenUrl ?
                    <div>
                        <input 
                            placeholder="How many tokens do you want to mint?" 
                            className="mb-1 border rounded w-full p-5 h-1.5 ring-1 ring-blue-300" 
                            onChange={e => setQuantity(e.target.value)}
                            hidden={data}
                        />
                        <button className="text-white text-lg bg-gradient-to-br mb-10 w-full from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center" onClick={mint} hidden={data}>
                            Mint
                        </button>
                    </div> :
                    <button className="text-white text-lg bg-gradient-to-br my-10 w-full from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center" onClick={createMetadata} disabled={!imageUrl}>
                        Create Metadata
                    </button>        
                    }
                </div>
                

                <div className="w-3/5 h-4/5 mr-20 ml-10 mt-10 mb-10 ">
                    {imageUrl ? 
                    <img className="object-fill" src={imageUrl}/> :
                    <label className="flex mb-60 items-center justify-center h-96 w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={onChange}/>
                    </label>
                    }
                </div> 

            </div>
            }
        </div>
    )
}