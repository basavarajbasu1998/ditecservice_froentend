// import { Box, Card, CardHeader } from "@mui/material";
// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const MultipleBarChart = ({ title, subheader, chartData, chartLabel }) => {
//   const chartOptions = {
//     series: chartData,
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         toolbar: {
//           show: true,

//           offsetX: 0,
//           offsetY: -30,

//           // Set this to false to hide the menu icon
//           export: {
//             csv: {
//               headerCategory: "Sub-AUA",
//               headerValue: "value",
//             },
//           },
//         },
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "55%",
//           endingShape: "rounded",
//         },
//       },
//       dataLabels: {
//         enabled: true,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: chartLabel,
//       },
//       yaxis: {
//         title: {
//           text: " (Transactions)",
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return +val + " Authentications";
//           },
//         },
//       },
//       legend: {
//         position: "top", // Set the legend position to "top"
//         horizontalAlign: "right",
//         markers: {
//           width: 12,
//           height: 12,
//           strokeWidth: 0,
//           radius: 12,
//         },
//       },
//       colors: [
//         "#1984c5",
//         "#22a7f0",
//         "#48b5c4",
//         "#76c68f",
//         "#a6d75b",
//         "#c9e52f",
//         "#d0ee11",
//         "#d0f400",
//       ],
//     },
//   };
//   return (
//     <>
//       <Card>
//         <CardHeader title={title} subheader={subheader} />

//         <Box sx={{ p: 3, pb: 1 }}>
//           <div style={{ width: "100%" }}>
//             <ReactApexChart
//               options={chartOptions.options}
//               series={chartOptions.series}
//               type="bar"
//               height={250}
//             />
//           </div>
//         </Box>
//       </Card>
//     </>
//   );
// };

// export default MultipleBarChart;





import { Box, Card, CardHeader } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from 'prop-types';

const MultipleBarChart = ({ title, subheader, chartData, chartLabel }) => {
  // Function to sanitize series data and replace null/undefined values with 0
  const sanitizeSeriesData = (data) => {
    return Array.isArray(data) ? data.map((series) => ({
      ...series,
      data: Array.isArray(series.data) ? series.data.map((value) => (value === null || value === undefined ? 0 : value)) : []
    })) : [];
  };

  // Ensure chartData and chartLabel are arrays and replace null values
  const sanitizedChartData = sanitizeSeriesData(chartData);
  const sanitizedChartLabel = Array.isArray(chartLabel) ? chartLabel.map(label => (label === null || label === undefined ? '' : label)) : [];

  const chartOptions = {
    series: sanitizedChartData,
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: -30,
          export: {
            csv: {
              headerCategory: "Sub-AUA",
              headerValue: "value",
            },
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: sanitizedChartLabel,
      },
      yaxis: {
        title: {
          text: " (Transactions)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + " Authentications";
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          radius: 12,
        },
      },
      colors: [
        "#1984c5",
        "#22a7f0",
        "#48b5c4",
        "#76c68f",
        "#a6d75b",
        "#c9e52f",
        "#d0ee11",
        "#d0f400",
      ],
    },
  };

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <div style={{ width: "100%" }}>
          <ReactApexChart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            height={250}
          />
        </div>
      </Box>
    </Card>
  );
};

// Default Props
MultipleBarChart.defaultProps = {
  title: "",
  subheader: "",
  chartData: [],
  chartLabel: [],
};

// Prop Types
MultipleBarChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  chartLabel: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultipleBarChart;


