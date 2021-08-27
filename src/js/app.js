export default function formatTelNumber(telNumber) {
  const regExpMain = /(\s)|([()])|(-)/g;
  const regExpEight = /^8/g;

  let telNumberCorrect = telNumber;

  telNumberCorrect = telNumberCorrect.replace(regExpMain, '');
  telNumberCorrect = telNumberCorrect.replace(regExpEight, '+7');

  return telNumberCorrect;
}