const incrementString = (string) => {
  // Convert passed arguments to string
  const str = string.toString();
  // Extracting string's number
  let number = str.match(/\d+/) === null ? 0 : str.match(/\d+/)[0];

  // Storing number's length
  const numberLength = number.length;

  // Incrementing number by 1
  number = (parseInt(number) + 1).toString();

  // If there were leading 0s, add them again
  while (number.length < numberLength) {
    number = '0' + number;
  }

  return str.replace(/[0-9]/g, '').concat(number);
};

export default incrementString;
