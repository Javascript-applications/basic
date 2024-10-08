let i = 0;

for (;;) {
  console.log("Tha number is: " + i);
  if (i > 5) break;
  i++;
}

for (let l = 0, getl = () => l; l < 3; getl = () => l, l++) {
  console.log(getl());
}

for (
  let m = 0, getI = () => m, incrementI = () => m++;
  getI() < 3;
  incrementI()
) {
  console.log(m);
}
