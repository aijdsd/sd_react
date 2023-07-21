import { ImageList, ImageListItem } from '@mui/material';
import flist from "./flist";

const Ran = () => {
    const valz =[]

    for (let index = 0; index < 10; index++) {
        valz.push(Math.floor(Math.random() * flist.length));
    }

    return (
            <ImageList sx={{ width: 500, height: 400 }} cols={3} rowHeight={180}>
                {valz.map((pos) => (
                    <ImageListItem key={flist[pos].id}>
                    <img
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