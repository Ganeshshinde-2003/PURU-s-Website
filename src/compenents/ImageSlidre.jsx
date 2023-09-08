import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import slide1 from "../../public/matthew-henry-VviFtDJakYk-unsplash 1.png";
import slide2 from "../../public/0F4A8688 1.png";
import Image from 'next/image';

const imagesone = [
    slide1,
    slide2,
]
const imagestwo = [
    slide2,
    slide1,
]

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    backgroundSize: 'cover',
}

const ImageSlider = ({ id }) => {
    let slideImages;

    if (id === "1") {
        slideImages = imagesone;
    } else {
        slideImages = imagestwo;
    }

    return (
        <div className='slide-container'>
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index} style={divStyle}>
                        <Image src={image} className="slideimage" />
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default ImageSlider;
