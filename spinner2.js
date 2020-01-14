const cursorAnimations = ['\r|     ', '\r/     ','\r-     ','\r\\     ','\r|     ','\r/     ','\r-     ','\r\\     ','\r|     '];
let timer = 100;
let timerIncrement = 200;

for (let cursor of cursorAnimations) {
  setTimeout(() => {
    process.stdout.write(cursor);
  }, timer);
  timer += timerIncrement;
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer);
     