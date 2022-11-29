export const animateYear = (year: number, prevYear: number, setYear: (from: number) => void) => {
  const YEAR_OFFSET = 5;
  const DELAY = 50;

  if (prevYear < year) {
    let from = year - YEAR_OFFSET;

    let timer = setInterval(() => { 
      from <= year ? setYear(from++) : clearInterval(timer); 
    }, DELAY);
  } else if (prevYear > year) {
    let from = year + YEAR_OFFSET;

    let timer = setInterval(() => { 
      from >= year ? setYear(from--) : clearInterval(timer); 
    }, DELAY);
  } else {
    return;
  }
}