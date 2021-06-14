import "./Playlist.css"
import Artist from "./Artist"
import Mood from "./Mood"
import Station from "./Station"
export default function PlayList_Home(){
    return(
    <div className="Home-Playlist">
    <Artist/>
    <Mood/>
    <Station/>
    </div>)
}