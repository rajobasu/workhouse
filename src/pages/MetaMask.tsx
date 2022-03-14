import React, {useEffect, useState} from "react";
import {Header} from "../components/Header"
import axios from "axios";
import PunkList from "../components/PunkList";

export const MetaMask: React.FC = () => {
    const [punkListData, setPunkListData] = useState([])
    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get(
                'https://testnets-api.opensea.io/assets?asset_contract_address=0x62f26aA46Bb26c72EB54bcFC4D893B821111D03E&order_direction=desc'
            )
            console.log(openseaData.data.assets)
            setPunkListData(openseaData.data.assets)
        }
        getMyNfts();

    }, [])
    return (
        <div className='app'>
            <Header/>

            <PunkList punkListData={punkListData}/>
        </div>
    );
};
