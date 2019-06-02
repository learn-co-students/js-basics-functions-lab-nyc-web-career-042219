  function distanceFromHqInBlocks(numblocks) {
    if (numblocks > 42) {
      return numblocks - 42
    } else {
      return 42 - numblocks;
    }
  }

  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }

  function distanceTravelledInFeet(begin, end) {
    if (begin < end) {
      return (end - begin)* 264;
    } else {
      return (begin - end)* 264;
    }
  }

  function calculatesFarePrice(begin, end) {
    const distance = distanceTravelledInFeet(begin, end);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
