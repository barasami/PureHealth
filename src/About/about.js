import axios from "axios";

const Url='https://medicine-search-and-autocomplete.p.rapidapi.com/api/medicine/search'

const options = {
  params: {searchterm: 'para'},
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'medicine-search-and-autocomplete.p.rapidapi.com'
  }
};



export const myAbout=async()=>{
    try{
        const {data:{data}}= await axios.get(Url,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}