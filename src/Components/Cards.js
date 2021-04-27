import React from "react";
import "./Cards.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Bar, Line, Canvas } from "react-chartjs-2";
import numeral from "numeral";
const bar_labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const line_labels = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM"];

function Cards() {
  const data = {
    labels: bar_labels,
    datasets: [
      {
        label: "Activity",
        data: [15, 19, 50, 75, 20, 30, 35],
        backgroundColor: [
          "blue",
          "#2196F3",
          "blue",
          "#2196F3",
          "blue",
          "#2196F3",
          "blue",
        ],

        borderWidth: 1,
      },
    ],
  };

  const bar_data1 = {
    labels: bar_labels,
    datasets: [
      {
        label: "Clinic",
        data: [120, 100, 150, 95, 100, 90, 85],
        backgroundColor: [
          "yellow",
          "orange",
          "yellow",
          "orange",
          "yellow",
          "orange",
          "yellow",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options_bar = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "black",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0%");
            },
          },
        },
      ],
    },
  };

  const options_line = {
    scales: {
      x: [
        {
          display: false,
          grid: {
            display: false,
          },
        },
      ],
      y: [
        {
          ticks: {
            stepSize: 50,
            min: 50,
            max: 150,
          },
        },
        {
          display: false,
          grid: {
            display: false,
          },
        },
      ],
    },
  };

  const line_data = {
    labels: line_labels,
    datasets: [
      {
        label: "Heart beat",
        data: [100, 50, 75, 100, 120, 150],
        fill: false,
        borderColor: "rgb(75, 192, 192)",

        tension: 0.1,
      },
    ],
  };

  const line_data1 = {
    labels: bar_labels,
    datasets: [
      {
        label: "Temperature",
        data: [30, 35, 40, 30, 35, 40, 48],
        fill: false,
        borderColor: "red",
        backgroundColor: "rgb(247, 195, 165)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="cards_Container">
      <div className="card">
        <div className="card_top">
          <p>Activity</p>
          <div className="drop_down_content">
            <select name="cars" id="cars">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="card_bottom">
          <Bar data={data} options={options_bar} />
        </div>
      </div>
      <div className="card">
        <div className="card_top">
          <p>Heart Rate</p>
          <div className="drop_down_content">
            <select name="cars" id="cars">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="card_bottom">
          <Line data={line_data} options={options_line} />
        </div>
      </div>
      <div className="card">
        <div className="card_top">
          <p>Blood Pressure</p>
          <div className="drop_down_content">
            <select name="cars" id="cars">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="card_bottom">
          <Bar data={bar_data1} options={options_bar} />
        </div>
      </div>
      <div className="card">
        <div className="card_top">
          <p>Body Temperature</p>
          <div className="drop_down_content">
            <select name="cars" id="cars">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="card_bottom">
          <Line data={line_data1} options={options_line} />
        </div>
      </div>
      <div className="card">
        <div className="card_top">
          <p>Past Appointment</p>
        </div>
        <div className="card_bottom  last_card">
          <div className="left">
            <p>10AM - 11AM</p>
            <p>Dr. Rakesh Chavan</p>
          </div>
          <div className="right"> 2 Sept</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
