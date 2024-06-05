import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Summary from "../components/summary/Summary";

function Dashboard() {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <section>
      <div className="relative flex justify-between">
        <h2 className="title">{t("dashboard")}</h2>
        <p className="text-5xl "> <i className="bi bi-clock"></i> {formattedTime}</p>
      </div>
      <Summary />
    </section>
  );
}

export default Dashboard;
