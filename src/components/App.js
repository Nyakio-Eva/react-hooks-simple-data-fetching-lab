import React, {useState,useEffect} from "react";

function AppComponent (){
    const [dogImageUrl, setDogImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

      fetchingData();

    }, []);
    const fetchingData = async () => {
        try{
            const response = await fetch("https://dog.ceo/api/breeds/image/random")
            if(!response.ok){
                throw new Error ('failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            const imageUrl = data.message; 
            setDogImageUrl(imageUrl);
            setIsLoading(false)
            

        }catch(error){
            console.error('Error fetching data',error)
            setIsLoading(false)

        }
    }

    return(
      <>
      {isLoading ? <p>Loading...</p> : <img src={dogImageUrl} alt="A Random Dog" />}
         
     </>
    )
}
 export default AppComponent;
