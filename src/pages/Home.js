import Heading from "./home/Heading"
import ControlPanel from "./home/ControlPanel"
import "./Home.css"
import Display from "./home/Display"
import React,{useState,useEffect} from 'react'
import { Link, NavLink, Route } from "react-router-dom"

export default function Home(){
    //We will fetch data here

    const [songs,setSong]=useState(
      [{
        title:"Hotel California",
        artist:"The Eagle",
        playlist:"Happy",
        img_src:'https://i.pinimg.com/originals/08/47/95/0847954cfba8f72a045c1b6dbde07589.jpg',
        src:"https://ia800504.us.archive.org/33/items/HotelCalifornia_140/Eagles-HellFreezesOver-HotelCalifornia0.mp3"
      },
      {
        title:"New Kid in Town",
        artist:"The Eagle",
        playlist:"Pop",
        img_src:"https://upload.wikimedia.org/wikipedia/en/5/5d/Eaglesnewkidintownsinglecover.jpg",
        src:"https://archive.org/download/theeagles_201903/The%20Eagles%20-%20New%20Kid%20in%20Town%20%281977%29.mp3" 

      }
      ]
    )

    const [currentSongIndex,setCurrentSongIndex]=useState(0);
    const [nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);
    
     useEffect(()=>{
       setNextSongIndex(()=>{
         return (currentSongIndex+1)%(songs.length)
       })
     },[currentSongIndex])
    
    return(
        <div className="Home-Container">
        <Heading title={songs[currentSongIndex].title} artist={songs[currentSongIndex].artist} playlist={songs[currentSongIndex].playlist}/>
        <div className="Home-Container2">
        <div className="Home-Control">
        <ControlPanel currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} src={songs[currentSongIndex].src} length={songs.length}/> 
        </div>
        <div className="Home-Display">
        <Display img_src={songs[currentSongIndex].img_src}/>
        </div>
        </div>
        <div className="Home-playlist">
          <NavLink to="/play" className="Play">PlayList</NavLink>
        </div>                  

        </div>
    );
}