moveElement(document.querySelector("li"), { x: 20, y: 300 }).then(() => {
  console.log("Element has been moved");
});

async function translateOneByOne() {
  const redCircle = document.querySelector(".marks").firstElementChild;
  await moveElement(redCircle, {
    x: 20 - parseInt(redCircle.style.left),
    y: 300 - parseInt(redCircle.style.top),
  }).then(() => {
    console.log("Element has been moved: " + redCircle);
  });

  const blueCircle =
    document.querySelector(".marks").firstElementChild.nextElementSibling;
  await moveElement(blueCircle, {
    x: 400 - parseInt(blueCircle.style.left),
    y: 300 - parseInt(blueCircle.style.top),
  }).then(() => {
    console.log("Element has been moved: " + blueCircle);
  });

  const greenCircle = document.querySelector(".marks").lastElementChild;
  await moveElement(greenCircle, {
    x: 400 - parseInt(greenCircle.style.left),
    y: 20 - parseInt(greenCircle.style.top),
  }).then(() => {
    console.log("Element has been moved: " + greenCircle);
  });
}
