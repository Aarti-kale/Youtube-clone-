import React,{useState, useEffect} from "react";
import VideoList from './VideoList';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        // fetch video data (mock data for simplicity)
        const fetchData = async () =>{
            try {
                const response  = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setVideos(data.slice(0,5));
            } catch (error) {
                console.log("Error fetching videos:", error);
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            <h1> Welcome to Youtube clone</h1>
            <VideoList videos={videos}/>
        </div>
    )
}

export default Home;