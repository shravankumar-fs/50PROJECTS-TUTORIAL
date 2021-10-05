const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = 0;
  const target = +counter.getAttribute("data-target");
  let count = 0;
  let step = Math.ceil(target / 3000) * 50 + 1;
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      counter.innerText = count;
    }
  }, 50);
});
