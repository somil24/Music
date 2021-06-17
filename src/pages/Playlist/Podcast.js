import "./Common.css"
import "./Podcast.css"
export default function Podcast(){
    return(
        <div className="PoadcastHome main">
        <div className="Podcast-Heading heading">
        <h2>Podcasts</h2>
        {//navbar
        }

        </div>
        <div className="Podcast-Name name">

        <div className="Poadcast-Display">
            <img src="https://stitcher-classic.imgix.net/feedimagesplain600/158319.jpg?w=600&h=600"/>
            <h2>Why Won't You Date Me?</h2>
        </div>     
        <div className="Poadcast-Display">
            <img src="https://m.media-amazon.com/images/I/41VRFa2mbAS._SL500_.jpg"/>
            <h2>The Outsiders</h2>
        </div>      
        </div>
        </div>
    )
}