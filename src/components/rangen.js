import { ImageList, ImageListItem } from '@mui/material';
import flist from "./flist";

const Ran = () => {
    const valz =[]
    const smth = flist 
    for (let index = 0; index < 12; index++) {
        valz.push(Math.floor(Math.random() * smth.length));
    }

    return (
            <ImageList cols={3} >
                {valz.map((pos) => (
                    <ImageListItem key={smth[pos].id}>
                    <img className='img-fluid'
                        src={"https://drive.google.com/uc?id="+smth[pos].id}
                        alt="aijd"
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
    )
}

export default Ran;