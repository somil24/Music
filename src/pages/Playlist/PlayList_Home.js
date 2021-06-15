import "./Playlist.css"
import Artist from "./Artist"
import Mood from "./Mood"
import Podcast from "./Podcast"
export default function PlayList_Home(){
    return(
    <div className="Home-Playlist">
    <Artist/>
    <Mood/>
    <Podcast/>
    </div>)
}