import { Device } from "@prisma/client";
import { useEffect, useState } from "react";

interface DeviceCardProps {
  device: Device;
}
export default function DeviceCard({ device }: DeviceCardProps) {
  const [value, setValue] = useState(Number);
  useEffect(() => {
    fetch(`api/sencing/${device.id}`)
      .then((res) => res.json())
      .then((json) => setValue(json.result));
  }, []);

  return (
    <div
      key={device.id}
      className="shadow-3d bg-red-200 border-2 w-52 h-52 p-4 flex flex-col justify-between rounded-xl m-5 bg-gradient-to-b from-blue-200 to-cyan-200 hover:from-blue-300 hover:to-cyan-300"
    >
      <div className="flex justify-end">
        <span className="text-5xl dark:text-gray-500">
          {value ? value : "-"}
        </span>
        <span className="text-2xl text-gray-500 dark:text-gray-700">
          {device.unit}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 dark:text-gray-700">
          {device.location}
          {device.memo ? `-${device.memo}` : ""}{" "}
        </span>
        <span className="text-xl dark:text-gray-500">{device.product}</span>
      </div>
    </div>
  );
}
