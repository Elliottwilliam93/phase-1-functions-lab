function distanceFromHqInBlocks(num) {
  let blocks = 0;
  if(num > 42) {
    blocks = num - 42;
    } else {
    blocks = 42 - num;
    }
  return blocks;
}

function distanceFromHqInFeet(num) {
  let blocks = 0;
  if(num > 42) {
    blocks = num - 42;
    } else {
    blocks = 42 - num;
    }
  let feet = 264 * blocks
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let blocks = 0;
  if(start > end) {
    blocks = start - end;
    } else {
    blocks = end - start;
    }
  let feet = 264 * blocks
  return feet;
}

function calculatesFarePrice(start, end) {
  let blocks = 0;
  let fare = 0;
  if(start > end) {
    blocks = start - end;
    } else {
    blocks = end - start;
    }
  let feet = 264 * blocks
  if(feet <= 400){
    return fare;
  } else if(feet > 400 && feet <= 2000) {
    let newFeet = feet - 400;
    fare = newFeet * .02;
    return fare;
  } else if(feet > 2000 && feet <= 2500) {
    fare = 25;
    return fare;
  } else if(feet > 2500) {
    return "cannot travel that far";
  }
}