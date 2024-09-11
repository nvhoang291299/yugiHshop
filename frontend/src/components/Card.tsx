import { CardActionArea, CardMedia } from '@mui/material';
import img from '@/image/13744068.jpg';
import Image from 'next/image';

export default function Card() {
    return (
        <div className="card-item">
            <Image src={img} alt="" />
        </div>
    )
}