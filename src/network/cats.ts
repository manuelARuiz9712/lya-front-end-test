import { CATS_API } from "../utils/constants";
import { parseFactstoDataSet } from "../utils/global-methods";


const getRamdomFactsWithLimits = async(limit:number) =>{

    let res  = await fetch(`${CATS_API}/facts?limit=${limit}`,{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json());

   return parseFactstoDataSet(res.data);

}


export {
    getRamdomFactsWithLimits
}