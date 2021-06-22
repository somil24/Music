import "./ControlPanel.css"
import {Replay,SkipNext,Pause,SkipPrevious,FavoriteBorderOutlined,PlayArrow} from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import {useState,useRef,useEffect} from 'react';

//import{useSelector,useDispatch} from "react-redux";
//import {ToggleMusic} from "../../actions/index"
export default function ControlPanel(props){
    
 
        const audio=useRef();
        const [isPlaying,setIsPlaying]=useState(false);
        
        useEffect(()=>{
            isPlaying?audio.current.play() : audio.current.pause();
            //console.log(audio.current.duration)
        },[isPlaying]);

        const SkipSong = (forwards=true)=>{
            if(forwards){
                props.setCurrentSongIndex(()=>{
                    let temp=props.currentSongIndex;
                    return(++temp%props.length)      
                })
            }else {
                props.setCurrentSongIndex(()=>{
                    let temp=props.currentSongIndex;
                    return(Math.abs(--temp)%props.length)      
                })
                
            }         
        }  
     /*
       const myState=useSelector((state)=>state.toggleTheMusic)
       const dispatch=useDispatch();
       console.log(myState);
       const audio=useRef();
       
       useEffect(()=>{
        myState?audio.current.play() : audio.current.pause();
        //console.log(audio.current.duration)
    },[myState]);
    */
return(
    <div className="Control-Container">
    <audio ref={audio} src={props.src}></audio>
    <div className="icon">
    <IconButton><Replay onClick={()=>audio.current.currentTime=0} style={{fontSize:"3em"}}/></IconButton>
    <IconButton ><SkipNext onClick={()=>SkipSong()}  style={{fontSize:"3em"}}/></IconButton>
    <IconButton onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying?<Pause style={{fontSize:"3em"}}/>:<PlayArrow style={{fontSize:"3em"}}/>}</IconButton>
    <IconButton ><SkipPrevious  style={{fontSize:"3em"}}/>{/*()=>SkipSong(false)*/}</IconButton>
    <IconButton ><FavoriteBorderOutlined style={{fontSize:"3em"}}/></IconButton>
    </div>
    </div>
)
}