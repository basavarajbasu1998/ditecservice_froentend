import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, subheader, chartData, chartLabel, height }) => {
  const theme = useTheme();
  const chartOptions = {
    series: chartData,
    labels: chartLabel,

    chart: {
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -30,
      },
    },

    options: {
      chart: {
        type: "donut",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom", // Move the legend to the bottom
          },
        },
      },
    ],
    legend: {
      position: "bottom", // Set the legend position to "bottom" for larger screens
    },
    colors: [
      "#fd7f6f",
      "#7eb0d5",
      "#b2e061",
      "#bd7ebe",
      "#ffb55a",
      "#ffee65",
      "#beb9db",
      "#fdcce5",
      "#8bd3c7",
    ],
  };

  return (
    <>
      <Card>
        <CardHeader title={title} subheader={subheader} />
        <CardContent
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box py={1.5}>
            <ReactApexChart
              type="donut"
              series={chartOptions.series}
              options={chartOptions}
              height={260}
              width="100%"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PieChart;
