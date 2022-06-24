
import Lightbox from "fslightbox-react";
import { useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImgGallery({ itemData }) {

        const sourceArr = []

        const [lightboxController, setLightboxController] = useState({
                toggler: false,
                slide: 0,

        });

        function openLightboxOnSlide(number) {
                setLightboxController({
                        toggler: !lightboxController.toggler,
                        slide: number
                });
        }

        const loopThrough = () => {
                var count = 1
                for (const prop in itemData) {
                        itemData[prop].slide = count
                        sourceArr.push(itemData[prop].img)
                        count++
                }
        }

        return (
                <>
                        {loopThrough()}
                        <Box sx={{ width: 500 }}>
                                <ImageList variant="masonry" cols={3} gap={8} >
                                        {itemData.map((item) => (
                                                <ImageListItem sx={{ cursor: 'pointer' }} key={item.img}>
                                                        <img
                                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                                loading="lazy"
                                                                onClick={() => openLightboxOnSlide(`${item.slide}`)}
                                                        />
                                                </ImageListItem>
                                        ))}
                                </ImageList>
                        </Box>
                        <Lightbox 
                                toggler={lightboxController.toggler}
                                sources={sourceArr}
                                slide={lightboxController.slide}
                                exitFullscreenOnClose={true}
                        />
                </>


        );
}