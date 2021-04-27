import React from "react";
import "./MainCard.css";
import { Line } from "react-chartjs-2";

const line_labels = ["Week1", "Week2", "Week3", "Week4"];
const line_labels1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const line_data = {
  labels: line_labels,
  datasets: [
    {
      label: "Health Condition",
      data: [48, 50, 75, 100],
      fill: false,
      borderColor: "rgb(75, 192, 192)",

      tension: 0.1,
    },
  ],
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
          stepSize: 5,
          min: 0,
          max: 100,
        },
      },
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const line_data_1 = {
  labels: line_labels1,
  datasets: [
    {
      label: "sleep pattern",
      data: [9, 8, 5, 7, 5, 3, 0, 5, 6],
      fill: false,
      borderColor: "rgb(75, 192, 192)",

      tension: 0.1,
    },
  ],
};

const options_line1 = {
  scales: {
    xAxes: [
      {
        display: false,
        grid: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },
      },
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

function MainCard() {
  return (
    <div className="main_card_container">
      <div className="main_card_container_left">
        <div className="main_card_container__top">
          <p>Health Conditions</p>
          <div className="select_duration">
            <select name="cars" id="cars">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <div className="main_card_container__bottom">
          <Line data={line_data} options={options_line} />
        </div>
      </div>
      <div className="main_card_container_right">
        <div className="main_card_container_right__top">
          <p>Lab Results</p>
          <div className="lab_info">
            <div className="lab_cards_top">
              <div className="lab_cards">
                <p id="t-s">5 Aug</p>
                <p id="t-c">Sugar</p>
                <p>140 mg/dL</p>
              </div>
              <div className="lab_cards">
                <p id="t-s">5 Aug</p>
                <p id="t-c">Haemoglobin</p>
                <p>140 mg/dL</p>
              </div>
              <div className="lab_cards">
                <p id="t-s">5 Aug</p>
                <p id="t-c">White Blood Cell</p>
                <p>140 mg/dL</p>
              </div>
            </div>

            <div className="lab_cards_bottom">
              <div className="lab_cards">
                <p id="t-s">5 Aug</p>
                <p id="t-c">Lymohocyte</p>
                <p>3800</p>
              </div>
              <div className="lab_cards">
                <p id="t-s">5 Aug</p>
                <p id="t-c">Red Blood Cell</p>
                <p>4.9 million cells/mcL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main_card_container_right_bottom">
          <div className="main_card_container_right_bottom__left">
            <p>Calories Burned</p>
            <div class="loader">
              <p>230</p>
              <p>Kcal</p>
            </div>
          </div>
          <div className="main_card_container_right_bottom__right">
            <p>Sleep Pattarn</p>
            <div className="s-g">
              <Line data={line_data_1} options={options_line1}></Line>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
