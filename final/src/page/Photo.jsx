import './Photo.css'
import Carousel from "./Carousel";


function Photo() {
    return (
      <div className={`photo`}>
        <div className="photo-title" aria-label="Photo title">
          Photo Carousel
        </div>
        <Carousel />
        
      </div>
    );
  }
  
  export default Photo;