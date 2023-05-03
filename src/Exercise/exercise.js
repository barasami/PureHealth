import axios from "axios";

const Url='https://exercisedb.p.rapidapi.com/exercises'


const options = {
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const myExercise=async()=>{
    try{
        const data=await axios.get(Url,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}