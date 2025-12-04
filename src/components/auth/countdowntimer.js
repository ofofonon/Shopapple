import { useEffect, useState } from "react";


export default function CountdownTimer() {
  // Set your target date here
  const targetDate = new Date("2025-12-31T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / 1000 / 60) % 60);

      setTimeLeft({
        days: days > 0 ? days : 0,
        hours: hours > 0 ? hours : 0,
        mins: mins > 0 ? mins : 0,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex items-center gap-6 text-white font-semibold font-monserrat">
        
        {/* Days */}
        <div className="flex flex-col items-center">
          <span className="md:text-4xl text-2xl">{timeLeft.days}</span>
          <span className="text-xs mt-1 opacity-60">Days</span>
        </div>

        <span className="text-3xl -mt-2">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className="md:text-4xl text-2xl">{timeLeft.hours}</span>
          <span className="text-xs mt-1 opacity-60">Hours</span>
        </div>

        <span className="text-3xl -mt-2">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className="md:text-4xl text-2xl">{timeLeft.mins}</span>
          <span className="text-xs mt-1 opacity-60">Mins</span>
        </div>

      </div>
    </div>
  );
}
