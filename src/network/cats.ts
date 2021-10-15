import { CATS_API } from "../utils/constants";


const getRamdomFactsWithLimits = (limit:number) =>{

    return new Promise( (resolve)=>{

        fetch(`${CATS_API}/fact?max_length=${limit}`,{
            
        });
        
    });


}

