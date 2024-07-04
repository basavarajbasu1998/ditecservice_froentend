
import { Avatar, Box, Card, Grid, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CountUp from "react-countup";

const DashBoardCard = ({ avatarColor, avatarSize, title, subtitle, counter, image, onClick, hight }) => {
    const countUpStyle = {
        fontSize: '25px', // Adjust the font size as needed
        fontWeight: 'bold', // Adjust the font weight as needed
        fontfamily: 'font-family: "Manrope", sans-serif', // Adjust the font weight as needed
        color: '#005EA5', // Adjust the color as needed
    };
    const onComplete = () => {
        console.log('Completed!');
    };

    const onStart = () => {
        console.log('Started!');
    };

    return (
        <div>
            <Card sx={{
                borderRadius: 2, p: 3,
                '&:hover': {
                    cursor: 'pointer',
                }
            }} onClick={onClick}
            >
                <Grid container justifyContent="center" spacing={3} alignItems="center" textAlign={"center"}>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <Avatar sx={{ bgcolor: avatarColor, height: avatarSize, width: avatarSize }}>
                                        <img src={image} alt="avatar" height={"50px"} width={"50px"} />
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Stack justifyContent={"center"}>
                                        <CountUp start={0} end={counter} duration={2} style={countUpStyle}
                                            useEasing={true}
                                            useGrouping={true}
                                            separator=" "
                                            onComplete={onComplete}
                                            onStart={onStart}
                                        />
                                        <Typography variant="h6">{title}</Typography>
                                        <Typography variant="subtitle2">{subtitle}</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default DashBoardCard;
