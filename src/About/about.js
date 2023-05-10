import axios from "axios";

const Url='https://medicine-autocomplete-indian-brands.p.rapidapi.com/api/medicine/search'


export const myAbout=async(drug)=>{
    try{
        const {data:{data}}= await axios.get(Url,{
          params: {searchterm: `${drug}`},
          headers: {
            'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
            'X-RapidAPI-Host': 'medicine-autocomplete-indian-brands.p.rapidapi.com'
          }
        })
        return data
    }
    catch(err){
      console.log(err);
    }
}