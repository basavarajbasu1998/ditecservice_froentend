import { Box, Card, CardHeader } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const HorizandalBarChart = ({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}) => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            offsetY: 7,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    // title: {
    //   text: "Fiction Books Sales",
    // },
    xaxis: {
      categories: chartLabels,
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      offsetX: 40,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1B5886", "#6EB1D6", "#F2CC8E"],
  };
  return (
    <>
      <Card sx={{ maxWidth: "800px" }}>
        <CardHeader title={title} subheader={subheader} />

        <Box sx={{ p: 3, pb: 1, maxWidth: "800px" }}>
          <div style={{ width: "100%", maxWidth: "800px" }}>
            <ReactApexChart
              options={chartOptions}
              series={chartData}
              type="bar"
              height={500}
            />
          </div>
        </Box>
      </Card>
    </>
  );
};

export default HorizandalBarChart;
