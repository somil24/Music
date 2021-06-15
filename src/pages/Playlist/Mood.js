import "./Common.css"
import "./Mood.css"
export default function Mood(){
    return(
        <div className="MoodHome main">
        <div className="Mood-Heading heading">
        <h2>Mood</h2>
        {//navbar
        }

        </div>
        <div className="Mood-Name name">
        <div className="MoodBar">
        <div className="MoodImg"><img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F709862281%2F0x0.jpg%3Ffit%3Dscale"/></div>
        <div className="Genre"><h2>Happy</h2></div>   
        <div className="NumberOfSongs"><h3>4 Songs</h3></div>   
        </div>

        
        <div className="MoodBar">
        <div className="MoodImg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJ-IqdZaNFhzkjR6weZRrwbgdGH2Nwyt-fQ&usqp=CAU"/></div>
        <div className="Genre"><h2>Pop</h2></div>   
        <div className="NumberOfSongs"><h3>2 Songs</h3></div>   
            
            
        </div>
        </div>
        </div>
    )
}