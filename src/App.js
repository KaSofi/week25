
import './App.css';
import { Chart } from "react-google-charts";


export const data = [
  ["Понедельник", "Часов в день"],
  ["Понедельник", 4],
  ["Вторник", 4],
  ["Среда", 4],
  ["Четверг", 4],
  ["Пятница", 4],
  ["Суббота", 3],
  ["Воскресенье", 3]
];

export const options = {
  title: "Время, потраченное на изучение React c 06.03 по 12.03",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}




export default App;
