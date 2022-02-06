import axios from "axios";

import { crypto } from "./types";

export class Data {


    static async getData() {

        console.log("IN get data")

        let tempData : crypto[] = []
        
        let qs =  "?symbol=FTM,TOMB"
        try {
            await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest' + qs, {
                headers: { 'X-CMC_PRO_API_KEY': '3517d194-c25f-48e1-837a-fea431ebd629' }
            }).then(
                function(response) {

                    console.log(response.data.data.FTM.quote.USD.price)
                    tempData[0] = {
                        circulating_supply: response.data.data.FTM.circulating_supply, 
                        cmc_rank: response.data.data.FTM.cmc_rank, 
                        name: response.data.data.FTM.name,
                        quote: {
                            market_cap: response.data.data.FTM.quote.USD.market_cap,
                            market_cap_dominace: response.data.data.FTM.quote.USD.market_cap_dominace,
                            price: response.data.data.FTM.quote.USD.price,
                            volume_change_24h: response.data.data.FTM.quote.USD.volume_change_24h
                        }
                    }
                    tempData[1] = {
                        circulating_supply: response.data.data.TOMB.circulating_supply, 
                        cmc_rank: response.data.data.TOMB.cmc_rank, 
                        name: response.data.data.TOMB.name,
                        quote: {
                            market_cap: response.data.data.TOMB.quote.USD.market_cap,
                            market_cap_dominace: response.data.data.TOMB.quote.USD.market_cap_dominace,
                            price: response.data.data.TOMB.quote.USD.price,
                            volume_change_24h: response.data.data.TOMB.quote.USD.volume_change_24h
                        }
                    }
                }
            )
         
            return tempData
           
        } catch (error) {
            console.log(error);
        }

    
    }
}