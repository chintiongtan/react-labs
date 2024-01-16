export function delay(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getTimeNow() {
  const today = new Date();

  return today.toUTCString();
}
