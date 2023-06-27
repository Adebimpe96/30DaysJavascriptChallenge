// const secondHandTick = document.querySelector('.second-hand');
// const minuteHandTick = document.querySelector('.min-hand');
// const hourHandTick = document.querySelector('.hour-hand');
// const setDate = () => {
//    const date = new Date();
//    const seconds = date.getSeconds();
//    const secondsInDegrees = ((seconds / 60) * 360) + 90;
//    secondHandTick.style.transform = `rotate(${secondsInDegrees}deg)`


//    const minutes = date.getMinutes();
//     const minutesInDegrees = ((minutes / 60) * 360) + 90;
//     minuteHandTick.style.transform = `rotate(${minutesInDegrees}deg)`

//     const hours = date.getHours();
//     const hoursInDegrees = ((hours / 12) * 360) + 90;
//     hourHandTick.style.transform = `rotate(${hoursInDegrees}deg)`

//     if (hoursInDegrees >= 360) {
//         hourHandTick.style.transition = 'none'; // Disable transition temporarily
//         hourHandTick.style.transform = `rotate(${hoursInDegrees - 360}deg)`;
//         setTimeout(() => {
//           hourHandTick.style.transition = ''; // Re-enable transition
//         }, 100);
//       }
//     };
// setInterval(() => {
//     setDate()
// }, 1000);

const secondHandTick = document.querySelector('.second-hand');
const minuteHandTick = document.querySelector('.min-hand');
const hourHandTick = document.querySelector('.hour-hand');

const setDate = () => {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsInDegrees = ((seconds / 60) * 360) + 90;
  applyRotation(secondHandTick, secondsInDegrees);

  const minutes = date.getMinutes();
  const minutesInDegrees = ((minutes / 60) * 360) + 90;
  applyRotation(minuteHandTick, minutesInDegrees);

  const hours = date.getHours();
  const hoursInDegrees = ((hours / 12) * 360) + 90;
  applyRotation(hourHandTick, hoursInDegrees);
};

const applyRotation = (hand, degrees) => {
  hand.style.transform = `rotate(${degrees}deg)`;

  if (degrees >= 360) {
    hand.style.transition = 'none';
    hand.style.transform = `rotate(${degrees - 360}deg)`;
    setTimeout(() => {
      hand.style.transition = '';
    }, 100);
  }
};

setInterval(setDate, 1000);
