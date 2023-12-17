import { useLoaderData } from "react-router-dom";
import { Tooltip, Legend, RadialBar, RadialBarChart } from "recharts";


export const Dashboard = () => {
  const { postView, productView }: any = useLoaderData();

  return (
    <>
      <div className="pt-40 pb-72 px-10 flex flex-wrap">
        <RadialBarChart
          width={500}
          height={250}
          innerRadius="15%"
          outerRadius="120%"
          data={productView}
          startAngle={180}
          endAngle={-180}
        >
          
          <RadialBar
            label={{ fill: "#666", position: "insideStart" }}
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>

        <RadialBarChart
          width={730}
          height={250}
          innerRadius="50%"
          outerRadius="120%"
          data={postView}
          startAngle={180}
          endAngle={-180}
        >
          
          <RadialBar
            label={{ fill: "#666", position: "insideStart" }}
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
    </>
  );
};
