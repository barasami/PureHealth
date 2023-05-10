import axios from 'axios';

const Url='https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises'


export const fitnesCalc=async(type)=>{
    try{
        const data=await axios.get(Url,{
          params: {muscle: `${type}`},
          headers: {
            'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
          }
        })
        return data
    }
    catch(err){
        console.log(err);
    }
}