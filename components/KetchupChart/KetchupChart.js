import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState, useEffect } from "react";
import variablePie from "highcharts/modules/variable-pie.js";
import { StyledKetchupChartContainer } from "./styles";

if (typeof Highcharts === "object") {
  variablePie(Highcharts);
}

export default function KetchupChart({ likes, dislikes }) {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "variablepie",
      backgroundColor: "transparent",
    },

    title: {
      text: "Ketchup",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b>{point.name}: {point.y}</b><br/>',
    },

    series: [
      {
        minPointSize: 10,
        innerSize: "65%",
        zMin: 0,
        name: "Ketchup",
        data: [
          {
            name: "People who like Ketchup",
            y: likes,
            z: likes,
            color: "#991b1b",
          },
          {
            name: "People who dislike Ketchup",
            y: dislikes,
            z: dislikes,
            color: "#f87171",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "variablepie",
        backgroundColor: "transparent",
      },

      title: {
        text: "Ketchup",
      },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b>{point.name}: {point.y}</b><br/>',
      },

      series: [
        {
          minPointSize: 10,
          innerSize: "65%",
          zMin: 0,
          name: "Ketchup",
          data: [
            {
              name: "People who like Ketchup",
              y: likes,
              z: likes,
              color: "#991b1b",
            },
            {
              name: "People who dislike Ketchup",
              y: dislikes,
              z: dislikes,
              color: "#f87171",
            },
          ],
        },
      ],
    });
  }, [likes, dislikes]);

  return (
    <StyledKetchupChartContainer>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%", width: "100%" } }}
      />
    </StyledKetchupChartContainer>
  );
}
