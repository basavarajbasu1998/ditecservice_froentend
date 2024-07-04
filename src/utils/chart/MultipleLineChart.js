import React from "react";

import ReactApexChart from "react-apexcharts";
// @mui
import { Box, Card, CardHeader } from "@mui/material";

const MultipleLineChart = ({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}) => {
  const chartOptions = {
    plotOptions: { bar: { columnWidth: "16%" } },
    labels: chartLabels,
    chart: {
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -30,
      },
    },
    fill: {
      type: chartData?.map((i) => i.fill),
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    legend: {
      position: "top", // Set the legend position to "top"
      horizontalAlign: "right",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        radius: 12,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            // return `${y.toFixed(0)} Transactions`;
            // return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${y.toLocaleString()} Transactions`;
          }
          return y;
        },
      },
    },
    colors: [
      "#115f9a",
      "#1984c5",
      "#22a7f0",
      "#48b5c4",
      "#76c68f",
      "#a6d75b",
      "#c9e52f",
      "#d0ee11",
      "#d0f400",
    ],
  };

  return (
    <>
      <Card {...other}>
        <CardHeader title={title} subheader={subheader} />

        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <ReactApexChart
            type="line"
            series={chartData}
            options={chartOptions}
            height={250}
          />
        </Box>
      </Card>
      {/* ) : (
            <Card {...other}>
              <CardHeader title={title} subheader={subheader} />
    
              <Box
                sx={{ p: 3, pb: 1 }}
                display="flex"
                justifyContent={'center'}
                alignItems={'center'}
                height={410}
                dir="ltr"
              >
                <CircularProgress />
              </Box>
            </Card>
          )} */}
    </>
  );
};

export default MultipleLineChart;
