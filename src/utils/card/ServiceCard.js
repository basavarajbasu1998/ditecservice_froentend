// import React from "react";
// import Slider from "react-slick";
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     Box,
//     Avatar,
//     IconButton,
//     Stack,
// } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// import TextsmsIcon from "@mui/icons-material/Textsms";

// const ServiceCard = () => {
//     const cardData = [

//         {
//             title: "Sub AUA/KUA Onboarding",
//             content: "Profession",
//             image:
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
//             discount:
//                 "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
//         },
//         {
//             title: "e-KYC",
//             content: "Profession",
//             image:
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
//             discount:
//                 "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
//         },
//         {
//             title: "Authentication",
//             content: "Profession",
//             image:
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
//             discount:
//                 "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
//         },
//         {
//             title: "Samosa",
//             content: "Profession",
//             image:
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU",
//             discount:
//                 "Lorem ipsum is derived from the Latin roughly translated as hii Lorem ipsum is derived from the",
//         },
//     ];

//     const NextArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div className="slick-arrow slick-next" onClick={onClick}>
//                 Next
//             </div>
//         );
//     };

//     const PrevArrow = (props) => {
//         const { onClick } = props;
//         return (
//             <div className="slick-arrow slick-prev" onClick={onClick}>
//                 Prev
//             </div>
//         );
//     };

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3, // Set the number of cards to show
//         slidesToScroll: 1,
//         autoplay: true, // Enable autoplay
//         autoplaySpeed: 1500,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//     };

//     return (
//         <Slider {...settings}>
//             {cardData.map((card, index) => (
//                 <Grid key={index} item>
//                     <Card
//                         className="custom-card"
//                         sx={{
//                             margin: "10px",
//                             boxShadow: "2px 2px 5px gray",
//                             borderRadius: "18px",
//                             transition: "background-color 0.3s", // Add transition for hover effect
//                             "&:hover": {
//                                 backgroundColor: "orange",
//                             },
//                         }}
//                     >
//                         <CardContent>
//                             <Typography
//                                 variant="h5"
//                                 component="div"
//                                 sx={{ mt: 1, fontSize: "23px" }}
//                             >
//                                 <IconButton sx={{ color: "blue" }}>
//                                     <TextsmsIcon fontSize="large" />
//                                 </IconButton>
//                             </Typography>

//                             <Stack direction={"row"} spacing={3} sx={{ mt: 1 }}>
//                                 <Avatar
//                                     src={card.image}
//                                     alt="Avatar Image"
//                                     sx={{
//                                         width: 100,
//                                         height: 100,
//                                         margin: "25px", // Fix the missing unit here (e.g., "25px")
//                                     }}
//                                 />
//                                 <Box>
//                                     <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
//                                         {card.content}
//                                     </Typography>
//                                     <Typography variant="body2" sx={{ mb: 2 }}>
//                                         {card.discount}
//                                     </Typography>
//                                 </Box>
//                             </Stack>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Slider>
//     );
// };

// export default ServiceCard;



// import { Avatar, Card, CardHeader, Typography } from '@mui/material';
// import React from 'react';

// const ServiceCard = ({ title, content, image, discount }) => {
//     return (
//         <div>
//             <Card
//                 sx={{
//                     borderRadius: '10px', // Add border radius
//                     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
//                     transition: '0.3s', // Add transition for smooth hover effect
//                     height: "300px",
//                     '&:hover': {
//                         transform: 'scale(1.02)', // Scale up on hover
//                         boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', // Add shadow on hover
//                         bgcolor: '#0E68E0', // Change background color on hover
//                         color: 'white',
//                     },
//                 }}
//             >
//                 <CardHeader
//                     avatar={
//                         <Avatar
//                             sx={{
//                                 width: 100,
//                                 height: 100,
//                                 margin: 'auto', // Center the Avatar
//                             }}
//                         >
//                             <img
//                                 src={image}
//                                 alt="avatar"
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     borderRadius: '10px 10px 0 0', // Add border radius to image
//                                 }}
//                             />
//                         </Avatar>
//                     }
//                     title={
//                         <Typography variant="subtitle1" sx={{
//                             textAlign: 'justify', color: 'black', mb: 1,
//                             '&:hover': {
//                                 color: 'white',
//                             },
//                         }}>
//                             {title}
//                         </Typography>
//                     }
//                     subheader={
//                         <Typography variant="body1" sx={{
//                             textAlign: 'left', color: 'black', fontSize: "15px",
//                             '&:hover': {
//                                 color: 'white',
//                             },
//                         }}>
//                             {discount}
//                         </Typography>
//                     }
//                     content={
//                         <Typography variant="body1" sx={{ textAlign: 'justify', color: 'black' }}>
//                             Read More
//                         </Typography>
//                     }
//                     sx={{
//                         bgcolor: 'transparent',
//                         p: 2, // Add padding to the CardHeader
//                         '& .MuiCardHeader-content': {
//                             textAlign: 'center',
//                         },
//                     }}
//                 />
//             </Card>
//         </div>
//     );
// };

// export default ServiceCard;


import React from 'react'
import { Avatar, Box, Card, Grid, Typography } from '@mui/material'

const ServiceCard = ({ avatarSize, image, avatarColor, title, subtitle, onClick }) => {
    return (
        <div>
            <Card sx={{
                p: 3, backgroundColor: "white", height: "350px", width: "350px", transition: '0.3s',
                "&:hover": {
                    color: "white", bgcolor: "#0a90b7", transform: 'scale(1.02)',

                }
            }}>
                <Avatar sx={{ bgcolor: avatarColor, height: avatarSize, width: avatarSize, p: 2 }}>
                    <img src={image} alt="avatar" />
                </Avatar>
                <Box sx={{ mt: 2 }}>
                    <Typography variant='h6' sx={{ mb: 1 }} >{title}</Typography>
                    <Typography variant='body1' sx={{ textAlign: "justify" }}>{subtitle}</Typography>
                </Box>
                <Box justifyContent={"center"} sx={{ mt: 2 }}>
                    <Typography
                        justifyContent={"center"}
                        textAlign={"center"}
                        variant="contained"
                        onClick={onClick}
                        fontWeight={"400"}
                        color={"#084595"}
                        sx={{
                            fontWeight: 'bold',
                            "&:hover": { color: "white" }
                        }}
                    >
                        Read More →
                    </Typography>
                </Box>




            </Card>
        </div >
    )
}

export default ServiceCard
