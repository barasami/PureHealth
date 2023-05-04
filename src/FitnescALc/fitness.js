import axios from 'axios';

const Url='https://mega-fitness-calculator1.p.rapidapi.com/bmi'

const options = {
  params: {
    weight: '65',
    height: '167'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
  }
};

export const fitnesCalc=async()=>{
    try{
        const data=await axios.get(Url,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}