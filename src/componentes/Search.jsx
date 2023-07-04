import React,{useState,useEffect} from "react"
import "../style/Search.css"
  
const Search =() =>{
//setear los hooks useState
const [cities, setCities] = useState ([])
const [search, setSearch] =useState ("")

//function para traer datos de la Api
const URL = '' //link de la ruta
const showCities = async()=> {
const response = await fetch(URL)
const dataCities = await reponse.json()

console.log(dataCities)
setCities(dataCities)
}
// filtrado  search
const searcher = (e) => {
    setSearch(e.target.value)
}
let results = []
if(!search){
    results = cities
}else{
    cities.filter((dato) =>
    dato.city.tolowerCase().includes(search.toLocaleLowerCase())
    ) 
}


// useEffect( ()=>{
// showCities()
// },[])


     return (
        <div className="search">
              <h1>CITIES</h1> 

              <input value ={search} onChange={searcher} type="search" name="input" id="input" />
    
     
        </div>
     )
 }

 export default Search


