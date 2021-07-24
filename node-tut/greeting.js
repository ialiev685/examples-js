const helloMessage = 'Hello World!!!';

const goodbyeMessage = 'Goodbye!!!';

const hello = () => {
  console.log(helloMessage);
};

const goodbye = () => {
  console.log(goodbyeMessage);
};

module.exports = {
  hello,
  goodbye,
};
