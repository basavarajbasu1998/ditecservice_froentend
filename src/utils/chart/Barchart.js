import { Box, Card, CardHeader, styled } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const Barchart = ({ title, subheader, data, dataLabls }) => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          export: {
            csv: {
              headerCategory: "Days",
              headerValue: "value",
            },
          },
        },
      },
      xaxis: {
        categories: dataLabls,
      },
      dataLabels: {
        enabled: false, // Disable the data labels
        type: "datetime",
      },
    },

    series: [
      {
        name: "Count",
        data: data,
      },
    ],
  };
  return (
    <>
      <Card>
        <CardHeader title={title} subheader={subheader} />

        <Box sx={{ p: 3, pb: 1 }}>
          <div style={{ width: "100%" }}>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={380}
              width={"100%"}
            />
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Barchart;
