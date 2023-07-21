import { ImageList, ImageListItem } from '@mui/material';
import flist from "./flist";

const Ran = () => {
    const valz =[]

    for (let index = 0; index < 12; index++) {
        valz.push(Math.floor(Math.random() * flist.length));
    }

    return (
            <ImageList cols={3} >
                {valz.map((pos) => (
                    <ImageListItem key={flist[pos].id}>
                    <img className='img-fluid'
                        src={"https://drive.google.com/uc?id="+flist[pos].id}
                        alt="aijd"
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
    )
}

export default Ran;