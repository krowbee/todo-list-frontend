import { useEffect, useRef } from "react";

export const CalendarButton = ({ date, setDate }) => {

    const ref = useRef(null);

    useEffect(()=>{
        const el = ref.current;
        if (!el) return;

        if (date){
          el.value = date;
        }

        const handleChange = (e) => {
            const newDate = e.target.value;
            setDate(newDate);
        };

        el.addEventListener("change", handleChange);
        return () => el.removeEventListener("change", handleChange)
    }, [setDate, date])

  return (
    <div>
      <button
        popoverTarget="cally-popover1"
        className="input input-border text-neutral-500"
        id="cally1"
        style={{ anchorName: "--cally1" }}
        type="button"
      >
        { date ? date : "Due to" }
      </button>

      <div
        popover="auto"
        id="cally-popover1"
        className="dropdown bg-base-100 rounded-box shadow-lg"
        style={{ positionAnchor: "--cally1" }}
      >
        <calendar-date
          ref={ref}
          className="cally"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
        >
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
};