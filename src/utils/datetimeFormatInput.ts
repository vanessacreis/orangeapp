export function datetimeFormatInput(date: string, time: string) {
  return `${date}T${time}`;
}

export function dateObjectFormat(datetime: string) {
  const [date, time] = datetime.split("T");
  return {
    day: date,
    time: time,
  };
}



