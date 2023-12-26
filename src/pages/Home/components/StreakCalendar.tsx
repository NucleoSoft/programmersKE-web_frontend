import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale";
import { BsCalendar2Plus, BsChevronLeft, BsChevronRight } from "react-icons/bs";

dayjs.locale("en");

interface StreakCalendarProps {
  events: { date: string; title: string }[];
}

export const StreakCalendar = ({ events }: StreakCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfMonth = currentMonth.startOf("month").day();
  const days = [];
  let streakCount = 0;

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="text-center"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = currentMonth.date(i);
    const isToday = date.isSame(dayjs(), "day");
    const eventForDay =
      events && Array.isArray(events)
        ? events.find((event) => dayjs(event.date).isSame(date, "day"))
        : undefined;

    if (eventForDay) {
      streakCount++;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      streakCount = 0;
    }

    days.push(
      <div
        key={date.format("YYYY-MM-DD")}
        className={`text-center text-sm font-adventpro 
                                                 ${
                                                   isToday
                                                     ? "bg-primary rounded-full text-white dark:bg-secondary dark:text-black"
                                                     : "text-slate-900 dark:text-white dark:text-shadow-md dark:shadow-white"
                                                 }`}
      >
        {i}
        {eventForDay && <div>{eventForDay.title}</div>}
      </div>
    );
  }

  const Days = (props: { children: React.ReactNode }) => {
    return (
      <div
        className="text-center font-novaflat text-sm
                         text-primary dark:text-secondary"
      >
        {props.children}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-7 gap-2 w-5/6 mx-auto">
      <button
        onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
      >
        <BsChevronLeft className="text-md text-slate-900 dark:text-slate-200 col-span-1" />
      </button>
      <div className="col-span-4 text-center text-slate-900 text-md font-novaflat dark:text-slate-300">
        {currentMonth.format("MMMM YYYY")}
      </div>
      <button onClick={() => setCurrentMonth(dayjs())}>
        <BsCalendar2Plus className="text-sm text-slate-900 dark:text-slate-200 col-span-1" />
      </button>
      <button onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
        <BsChevronRight className="text-md text-slate-900 dark:text-slate-200 col-span-1" />
      </button>
      <Days>Sun</Days>
      <Days>Mon</Days>
      <Days>Tue</Days>
      <Days>Wed</Days>
      <Days>Thu</Days>
      <Days>Fri</Days>
      <Days>Sat</Days>
      {days}
    </div>
  );
};

export default StreakCalendar;
