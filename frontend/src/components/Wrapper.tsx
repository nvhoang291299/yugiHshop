import Image from "next/image";
import wrapperImg from "@/image/slider_1.webp"

function Wrapper() {
    return(
        <div className="wallpaper">
            <Image src={wrapperImg} alt=""/>
        </div>
    )
}

export default Wrapper;