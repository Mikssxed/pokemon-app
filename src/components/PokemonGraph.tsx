import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PokemonGraph = () => {
  const data = {
    labels: [
      ["HP", 255],
      ["Attack", 255],
      ["Defense", 255],
      ["Sp. Attack", 255],
      ["Sp. Defense", 255],
      ["Speed", 255],
    ],
    datasets: [
      {
        data: [80, 100, 120, 90, 80, 110],
        backgroundColor: "rgba(27, 118, 255, 0.6)",
        borderWidth: 0,
      },
    ],
  };

  ChartJS.defaults.color = "white";

  const options = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    plugins: {
      title: {
        display: false,
        text: "Chart.js Radar Chart",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },

        angleLines: {
          display: true,
          color: "white",
        },

        grid: {
          display: true,
          color: "white",
        },
        suggestedMin: 1,
        suggestedMax: 255,
        pointLabels: {
          font: {
            size: 16,
          },
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
};

export default PokemonGraph;
