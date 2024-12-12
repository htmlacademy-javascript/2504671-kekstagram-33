// Функция для проверки длины строки. Эта функция нам пригодится для валидации формы.

function checkTextLength(inputText, maxLength) {
  return (inputText.length <= maxLength);
}


// Функция для проверки, является ли строка палиндромом.

const isPolindrom = (text) => {
  const normalizedText = text.toLowerCase().replaceAll(' ','');
  const reversedText = normalizedText.split('').reverse().join('');
  return normalizedText === reversedText;
};


// Функция для извлечения всех цифр из строки.

const extractDigits = (inputChar) => {

  const nomalizedChars = inputChar.replaceAll(' ', '').split(''); /* Убирает пробелы и разбивает на символы */

  let digits = ''; /* Переменная для хранения цифр */

  for (const char of nomalizedChars) {
    if (!isNaN(char)) {
      digits += char;
    }
  }
  return digits ? Math.abs(parseInt(digits, 10)) : NaN;
};