import axios from 'axios';

const Url='https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned'

const options = {
  params: {activity: 'skiing'},
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
  }
};

export const calorieBurn=async()=>{
    try{
        const data=await axios.get(Url,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}