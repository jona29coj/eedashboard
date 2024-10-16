import React from 'react';
import { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Doughnut } from 'react-chartjs-2'; // Make sure to install chart.js and react-chartjs-2
import { Bar } from 'react-chartjs-2'; // Chart.js bar chart
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import bgImg from '../img1.png';
import carImg from '../carmov.png';
import '../App.css';
import BarChart from './Charts/BarChart';
import ReactSlider from 'react-slider';
import bgpic from '../img1.png'
import Plot from 'react-plotly.js';
import PieChart from '../components/Charts/3DPieChart';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Batteries from './Batteries';
import WaterStorage from './WaterStorage';
import EVchargers from './evchargers';
import Chiller from './Chiller';
import '../pages/enerndbuist.css';
import TrendLineChart from './Charts/TrendLineChart';
import StyledDatePicker from './StyledDatePicker';













// Custom multi-colored slider component
const MultiColoredSlider = () => (
  <ReactSlider
    className="custom-slider"
    trackClassName="track"
    thumbClassName="thumb"
    min={0}
    max={100}
    defaultValue={50}
    renderTrack={(props, state) => (
      <div
        {...props}
        className={`${props.className} ${
          state.index === 0
            ? 'bg-green-500'
            : state.index === 1
            ? 'bg-yellow-500'
            : 'bg-red-500'
        }`}
      />
    )}
    renderThumb={(props) => (
      <div {...props} className="thumb"></div>
    )}
  />
);

// Dropdown component for selecting time period
const DropDown = ({ currentMode }) => (
  <div className="w-28 border border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: currentMode === 'Dark' && 'white',
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

// Data for Doughnut Chart
const doughnutData = {
  labels: ['Grid', 'Diesel', 'Wheeled in Solar', 'Rooftop', 'Today\'s Renewable Share'],
  datasets: [
    {
      data: [30, 10, 40, 20, 2],
      backgroundColor: [
        '#4CAF50', // Green
        '#FFC107', // Amber
        '#2196F3', // Blue
        '#FF5722', // Deep Orange
        '#9E9E9E', // Grey
      ],
      hoverBackgroundColor: [
        '#388E3C', // Darker Green
        '#FFA000', // Darker Amber
        '#1976D2', // Darker Blue
        '#F4511E', // Darker Deep Orange
        '#757575', // Darker Grey
      ],
    },
  ],
};

// Data for Stacked Bar Chart
const barData = {
  labels: ['Building Consumption'],
  datasets: [
    {
      label: 'Clients',
      backgroundColor: '#4CAF50', // Green for Clients
      data: [100],
    },
    {
      label: 'Chillers',
      backgroundColor: '#2196F3', // Blue for Chillers
      data: [80],
    },
    {
      label: 'Common Area',
      backgroundColor: '#FF5722', // Deep Orange for Common Area
      data: [60],
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      position: 'bottom', // Place the legend at the bottom for better readability
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
};

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  const [startDateEnergy, setStartDateEnergy] = useState(new Date());
  const [startDateConsumption, setStartDateConsumption] = useState(new Date());



  return (
<div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
  {/* Top Cards with Animation */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Facility Information Card */}
  <div className="bg-blue-500 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 animate-fade-in">
    <h3 className="text-lg font-semibold text-white mb-2">Facility Information</h3>
    <ul className="text-white text-sm">
      <li><strong>Location:</strong> IIT Madras Research Park</li>
      <li><strong>BUA:</strong> 12 lakhs sq.ft.</li>
      <li><strong>City:</strong> Chennai, India</li>
      <li><strong>Climate:</strong> Hot & Humid</li>
      <li><strong>Facility Type:</strong> Research & Development</li>
      <li><strong>Occupancy:</strong> 1,200 Employees</li>
    </ul>
  </div>

 {/* Elements Score Card */}
<div className="bg-green-500 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 animate-fade-in">
  <h3 className="text-lg font-semibold text-white mb-2">Elements Score</h3>
  <p className="text-white text-sm mb-1">Building Score: <span className="font-bold">760</span> (Above Average)</p>
  <p className="text-white text-sm mb-1">Energy Efficiency: <span className="font-bold">80%</span></p>
  <p className="text-white text-sm mb-1">Water Usage Efficiency: <span className="font-bold">75%</span></p>
  <p className="text-white text-sm mb-1">HVAC Performance: <span className="font-bold">85%</span></p>
  <Button
    color="white"
    className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-lg w-full"
    text="VIEW DETAILS"
  />
</div>


  {/* Environmental Awareness Card */}
  <div className="bg-orange-500 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 animate-fade-in">
    <h3 className="text-lg font-semibold text-white mb-2">Environmental Awareness</h3>
    <p className="text-white text-sm mb-1">Current CO₂ Footprint: <span className="font-bold">24,000 tons/year</span></p>
    <p className="text-white text-sm mb-1">Energy Savings: <span className="font-bold">15% YoY</span></p>
    <p className="text-white text-sm mb-1">Renewable Energy Used: <span className="font-bold">25%</span></p>
    <p className="text-white text-sm mb-2">Waste Recycling Rate: <span className="font-bold">50%</span></p>
  </div>
</div>

{/* Charts Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Energy Sources Card */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
        
        {/* Animated Border Pulse */}
        <div className="absolute inset-0 border-4 rounded-xl animate-glow"></div>

        <div className="flex justify-between items-center mb-4 relative z-10">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Energy Sources</h3>
          <StyledDatePicker
            selectedDate={startDateEnergy}
            setSelectedDate={setStartDateEnergy}
          />
        </div>

        {/* Animated Progress Circle for Total Energy */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-700 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full flex items-center justify-center font-bold text-indigo-700">
              60%
            </div>
          </div>
          <div className="flex-1 pl-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Energy Breakdown</h4>
            <ul className="mt-2 text-gray-600 text-sm space-y-1">
              <li><i className="fas fa-plug mr-2 text-blue-600"></i> Grid: <span className="font-bold text-blue-600">30%</span></li>
              <li><i className="fas fa-industry mr-2 text-red-600"></i> Diesel: <span className="font-bold text-red-600">10%</span></li>
              <li><i className="fas fa-sun mr-2 text-yellow-600"></i> Solar: <span className="font-bold text-yellow-600">60%</span></li>
              <li><i className="fas fa-leaf mr-2 text-green-600"></i> Renewable: <span className="font-bold text-green-600">20%</span></li>
            </ul>
          </div>
        </div>

        {/* Mini Cards for Energy Breakdown */}
        <div className="grid grid-cols-2 gap-2 mb-4 relative z-10">
          <div className="bg-blue-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-blue-600">Grid</h4>
            <p className="font-bold text-blue-600">30%</p>
          </div>
          <div className="bg-red-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-red-600">Diesel</h4>
            <p className="font-bold text-red-600">10%</p>
          </div>
          <div className="bg-yellow-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-yellow-600">Solar</h4>
            <p className="font-bold text-yellow-600">60%</p>
          </div>
          <div className="bg-green-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-green-600">Renewable</h4>
            <p className="font-bold text-green-600">20%</p>
          </div>
        </div>

        {/* Additional Components */}
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Total Energy Produced</h4>
          <p className="font-bold">500 kWh</p>
          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Emission Reduction</h4>
          <p className="font-bold">200 kg CO2</p>
        </div>
      </div>

      {/* Building Consumption Card */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
        
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 border-4 rounded-xl animate-glow"></div>

        <div className="flex justify-between items-center mb-4 relative z-10">
          <h3 className="text-lg font-bold  text-gray-800 dark:text-gray-200">Building Consumption</h3>
          <StyledDatePicker
            selectedDate={startDateConsumption}
            setSelectedDate={setStartDateConsumption}
          />
        </div>

        {/* Animated Icons */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-600 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full flex items-center justify-center font-bold text-green-600">
              80%
            </div>
          </div>
          <div className="flex-1 pl-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Consumption Breakdown</h4>
            <ul className="mt-2 text-gray-600 text-sm space-y-1">
              <li><i className="fas fa-user mr-2 text-blue-600"></i> Clients Total: <span className="font-bold">100 kWh</span></li>
              <li><i className="fas fa-fan mr-2 text-green-600"></i> Chillers Total: <span className="font-bold">80 kWh</span></li>
              <li><i className="fas fa-lightbulb mr-2 text-yellow-600"></i> Common Area: <span className="font-bold">60 kWh</span></li>
            </ul>
          </div>
        </div>

        {/* Mini Cards for Consumption Breakdown */}
        <div className="grid grid-cols-2 gap-2 mb-4 relative z-10">
          <div className="bg-blue-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-blue-600">Clients Total</h4>
            <p className="font-bold">100 kWh</p>
          </div>
          <div className="bg-green-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-green-600">Chillers Total</h4>
            <p className="font-bold">80 kWh</p>
          </div>
          <div className="bg-yellow-100 p-2 rounded-lg shadow">
            <h4 className="text-md font-semibold text-yellow-600">Common Area</h4>
            <p className="font-bold">60 kWh</p>
          </div>
        </div>

        {/* Additional Components */}
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Total Consumption Today</h4>
          <p className="font-bold">240 kWh</p>
          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Peak Consumption</h4>
          <p className="font-bold">10:00 AM</p>
        </div>
      </div>
    </div>





<Chiller/>
<EVchargers/>
<WaterStorage />
<Batteries />

    <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;