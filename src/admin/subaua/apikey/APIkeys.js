







import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenSubAuaAPI } from '../../../redux/admin/adminActions';
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

const APIkeys = ({ id }) => {
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.admin);
    const { buttonLoading, apikey } = stateData;

    useEffect(() => {
        const data = { subAuaId: id };
        dispatch(getGenSubAuaAPI(data));
    }, [id, dispatch]);


    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardHeader
                                sx={{ bgcolor: "#1B5886", color: "white" }}
                                title="API KEYS"
                            />
                            <Divider />
                            <CardContent>
                                {apikey ? (
                                    apikey.responseData && apikey.responseData.length > 0 ? (
                                        apikey.responseData.map((keyData) => (
                                            <Stack
                                                key={keyData.id}
                                                direction={"column"}
                                                spacing={2}
                                                paddingBottom={2}
                                                paddingTop={2}
                                            >
                                                {[
                                                    { label: "SUB AUA ID", value: keyData.subAuaId },
                                                    { label: "Production Key", value: keyData.prodkey },
                                                    { label: "Staging Key", value: keyData.stagingkey },
                                                    // { label: "SubAua Production key", value: keyData.subauaproductionkey },
                                                    // { label: "SubAua Stage key", value: keyData.subauastagekey }
                                                ].map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        <Stack
                                                            direction={"row"}
                                                            justifyContent={"space-between"}
                                                            alignItems={"center"}
                                                            display={"flex"}
                                                        >
                                                            <Typography variant="subtitle1">{item.label}</Typography>
                                                            <Typography variant="body1">
                                                                {item.value}
                                                            </Typography>
                                                        </Stack>
                                                        <Divider />
                                                    </React.Fragment>
                                                ))}
                                            </Stack>
                                        ))
                                    ) : (
                                        <Typography variant="body1">No API keys available</Typography>
                                    )
                                ) : (
                                    <Typography variant="body1">Loading...</Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default APIkeys;

