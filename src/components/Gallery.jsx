import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
        {
            alt: 'image1',
            url: 'https://www.nicepng.com/png/full/933-9332131_watsapp-icon-png.png'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Who are we'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Gallery of us
                </Typography>
                <Paragraph text={
                    'This is just some pictures of us so you can know us well!'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery