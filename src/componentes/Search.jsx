import React,{useState,useEffect} from "react"
import "../style/Search.css"

function Search(){
    const [cities, setCities] = useState ([])
    const [search, setSearch] =useState ("")

    const searcher = (e) => {
       console.log("Busqueda" + e.target.value)
    }


//     const Search =() =>{
// //setear los hooks useState


//function para traer datos de la Api
// const URL = '' //link de la ruta
// const showCities = async()=> {
// const response = await fetch(URL)
// const dataCities = await reponse.json()

// console.log(dataCities)
// setCities(dataCities)
// }
// filtrado  search



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
              <h1></h1> 
              
        </div>
     )
 }


 export default Search


