export const generateRandomNumber = () => {
  const max = 999999;
  const min = 100000;
  const randomNumber = Math.trunc(Math.random() * (max - min) + min);

  return randomNumber;
};
