import React, { useState, useEffect } from 'react';

import PieChart from '../../utils/chart/PieChart';
import MultipleLineChart from '../../utils/chart/MultipleLineChart';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
    getauamonthlychartdata,
    getauatodaydonutcharts,
    getkuamonthlychartdata,
    getkuatodaydonutcharts,
    getyearwisesubauacarddata,
} from '../../redux/reports/reportAction';
import CardComponent from '../../utils/CardComponent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Invoice from "./Invoice";
import { Grid } from '@mui/material';
const SubTransDash = ({ id }) => {


    const stateData = useSelector((state) => state.report);
    const dispatch = useDispatch();

    const {
        yearSubauaCount,
        auatodaydonutcharts,
        monthlyauthcount,
        monthlyekyccount,
        kuatodaydonutcharts,
    } = stateData;

    useEffect(() => {
        const request = {
            subAuaId: id,
        };
        dispatch(getyearwisesubauacarddata(request));
        dispatch(getauamonthlychartdata(request));
        dispatch(getkuamonthlychartdata(request));
        dispatch(getkuatodaydonutcharts(request));
        dispatch(getauatodaydonutcharts(request));
    }, [dispatch, id]);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={4}>
                    <CardComponent
                        total={yearSubauaCount?.yearwisetotal}
                        header={"Total Transactions"}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CardComponent
                        total={yearSubauaCount?.yearwiseauthtotal}
                        header={"Authentication"}
                        authdemo={yearSubauaCount?.authdemo}
                        authFp={yearSubauaCount?.authbio}
                        authIr={yearSubauaCount?.authiris}
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <CardComponent
                        total={yearSubauaCount?.yearwiseekyctotal}
                        header={"e-KYC"}
                        ekycFp={yearSubauaCount?.ekycbio}
                        ekycIr={yearSubauaCount?.ekyciris}
                        ekycOTP={yearSubauaCount?.ekycotp}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={12} md={4}>
                    {auatodaydonutcharts && Object.keys(auatodaydonutcharts).length !== 0 && (
                        <PieChart
                            chartData={auatodaydonutcharts?.authcount}
                            height={300}
                            chartLabel={auatodaydonutcharts?.authnames}
                            title={"Today Authentication Transactions"}
                        />
                    )}
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    {monthlyauthcount && Object.keys(monthlyauthcount).length !== 0 && (
                        <MultipleLineChart
                            title={"Daywise Monthly Authentication Transactions"}
                            chartLabels={monthlyauthcount.authdates}
                            chartData={[
                                {
                                    name: "Demographic",
                                    type: "bar",
                                    data: monthlyauthcount.authdemographic,
                                },
                                {
                                    name: "FingerPrint",
                                    type: "line",
                                    data: monthlyauthcount.authfingerprint,
                                },
                                {
                                    name: "Iris",
                                    type: "area",
                                    data: monthlyauthcount.authiris,
                                },
                            ]}
                        />
                    )}

                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {kuatodaydonutcharts && Object.keys(kuatodaydonutcharts).length !== 0 && (
                        <PieChart
                            height={300}
                            chartData={kuatodaydonutcharts?.ekyccount}
                            chartLabel={kuatodaydonutcharts?.ekycnames}
                            title={"Today e-KYC Transactions"}
                        />
                    )}
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    {monthlyekyccount && Object.keys(monthlyekyccount).length !== 0 && (

                        <MultipleLineChart
                            title={"Monthly e-KYC Authentication Transaction"}
                            chartLabels={monthlyekyccount?.ekycdates}
                            chartData={[
                                {
                                    name: "OTP",
                                    type: "bar",
                                    data: monthlyekyccount?.ekycdemographic,
                                },
                                {
                                    name: "FingerPrint",
                                    type: "area",
                                    data: monthlyekyccount?.ekycfingerprint,
                                },
                                {
                                    name: "Iris",
                                    type: "line",
                                    data: monthlyekyccount?.ekyciris,
                                },
                            ]}
                        />
                    )}
                </Grid>
            </Grid>


        </div>
    )
}

export default SubTransDash