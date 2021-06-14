import "./Display.css"
export default function Display(props){
    //url(https://cdns-images.dzcdn.net/images/cover/31383f3d2c444ca382c19c1def301e95/350x350.jpg)
    return(
        <div className="Display-Container">
            <div className="Display-Timer ">
            <span className="border"></span>
               <div className="Display-Image" >
                <img src={props.img_src} alt="Img not found"/>
                </div>

            </div>
        </div>        
    )
} 