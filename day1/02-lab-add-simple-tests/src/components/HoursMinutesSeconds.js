import { useState } from 'react';

export default function HoursMinutesSeconds() {
  const [seconds, setSeconds] = useState(0);
  const hours = Number(seconds / 3600);
  const minutes = Number(seconds / 60);

  return (
    <div>
      <label>Hours:
        <input type="text" value={hours} onChange={(e) => setSeconds(Number(e.target.value) * 3600)} />
      </label>
      <label>Minutes:
        <input type="text" value={minutes} onChange={(e) => setSeconds(Number(e.target.value) * 60)} />
      </label>
      <label>Seconds:
        <input type="text" value={seconds} onChange={(e) => setSeconds(Number(e.target.value) * 1)} />
      </label>
    </div>
  );
}
