import khodamArray from './khodamArray';

const stringToHashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const generateRandomNumber = (input) => {
  // Add some randomness to the input by appending a random number
  const noisyInput = input + Math.random();

  // Calculate the hash code of the noisy input
  const hashCode = stringToHashCode(noisyInput);

  // Calculate random number between 1 and 12
  const randomNumber = Math.abs(hashCode % 12) + 1;
console.log(randomNumber);
  return randomNumber;
};

const generateKhodam = (input) => {
  const randomNumber = generateRandomNumber(input);

  const khodam = khodamArray.find((item) => item.id === randomNumber);

  return khodam;
};

export default generateKhodam;
