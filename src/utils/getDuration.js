export const getDuration = (totalSeconds) => {
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor(totalSeconds / 3600);

  if (hours > 0) {
    const roundedMinutes = Math.round(minutes + seconds / 60);
    return `${hours}h ${roundedMinutes}m`;
  } else if (minutes > 0) {
    const roundedMinutes = Math.round(minutes + seconds / 60);
    return `${roundedMinutes}m`;
  } else {
    return `${seconds}s`;
  }
};
