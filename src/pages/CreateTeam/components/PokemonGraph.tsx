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
import { memo } from "react";
import { PokemonData } from "../../../utils/types/types";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface PokemonGraphProps {
  pokemonData: PokemonData;
}

const PokemonGraph = memo(({ pokemonData }: PokemonGraphProps) => {
  const { hp, attack, defense, spAttack, spDefense, speed } = pokemonData.stats;

  const data = {
    labels: [
      ["HP", hp],
      ["Attack", attack],
      ["Defense", defense],
      ["Sp. Attack", spAttack],
      ["Sp. Defense", spDefense],
      ["Speed", speed],
    ],
    datasets: [
      {
        data: [hp, attack, defense, spAttack, spDefense, speed],
        backgroundColor: "rgba(27, 118, 255, 0.8)",
        borderWidth: 0,
      },
      {
        data: [300, 300, 300, 300, 300, 300],
        backgroundColor: "rgba(19, 77, 165, 0.5)",
        borderColor: "white",
        borderWidth: 5,
      },
    ],
  };

  ChartJS.defaults.color = "white";
  ChartJS.defaults.elements.point.pointStyle = false;

  const options = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    plugins: {
      tooltip: { enabled: false },
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
});

export default PokemonGraph;
