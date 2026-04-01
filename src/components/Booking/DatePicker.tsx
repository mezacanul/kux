"use client";
import { useResponsive } from "@/hooks/useResponsive";
interface DatePickerProps {
  data: any;
  date: { month: string; day: string };
  setDate: (date: { month: string; day: string }) => void;
  isValid: boolean;
}

function Title({
  data,
  isValid,
}: {
  data: any;
  isValid: boolean;
}) {
  return (
    <div>
      <p className="w-full ">{data.form.date.title}</p>
      {!isValid && (
        <p className="text-red-500 text-sm">
          {data.form.date.invalid}
        </p>
      )}
    </div>
  );
}

export default function DatePicker({
  data,
  date,
  setDate,
  isValid,
}: DatePickerProps) {
  function handleDayChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDate({
      ...date,
      day: e.target.value,
    });
  }
  function handleMonthChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDate({
      ...date,
      month: e.target.value,
    });
  }

  const inputClass =
    "p-2 border-b-2 border-black  focus:outline-none text-center";
  return (
    <div>
      {useResponsive([
        <Title data={data} isValid={isValid} />,
        null,
        null,
      ])}
      <div className="w-full grid gap-4 items-center grid-cols-3 sm:grid-cols-4">
        {useResponsive([
          null,
          <Title data={data} isValid={isValid} />,
          <Title data={data} isValid={isValid} />,
        ])}
        <input
          type="text"
          placeholder="MM"
          value={date.month}
          onChange={handleMonthChange}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="DD"
          value={date.day}
          onChange={handleDayChange}
          className={inputClass}
        />
        <input
          type="text"
          // placeholder="YYYY"
          readOnly
          value={"2026"}
          className={inputClass}
        />
      </div>
    </div>
  );
}
