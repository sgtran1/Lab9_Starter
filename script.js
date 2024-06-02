let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  try {
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    output.innerHTML = 'Error: Invalid input';
    console.error('Calculation error:', error.message);
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

document.getElementById('logButton').addEventListener('click', () => {
  console.log('This is a log message');
});

document.getElementById('errorButton').addEventListener('click', () => {
  console.error('This is an error message');
});

document.getElementById('countButton').addEventListener('click', () => {
  console.count('Count button clicked');
});

document.getElementById('warnButton').addEventListener('click', () => {
  console.warn('This is a warning message');
});

document.getElementById('assertButton').addEventListener('click', () => {
  console.assert(false, 'This is an assertion error');
});

document.getElementById('clearButton').addEventListener('click', () => {
  console.clear();
});

document.getElementById('dirButton').addEventListener('click', () => {
  console.dir(document.body);
});

document.getElementById('dirxmlButton').addEventListener('click', () => {
  console.dirxml(document);
});

document.getElementById('groupStartButton').addEventListener('click', () => {
  console.group('Group Start');
  console.log('Inside group');
});

document.getElementById('groupEndButton').addEventListener('click', () => {
  console.groupEnd();
});

document.getElementById('tableButton').addEventListener('click', () => {
  console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
});

document.getElementById('startTimerButton').addEventListener('click', () => {
  console.time('Timer');
});

document.getElementById('endTimerButton').addEventListener('click', () => {
  console.timeEnd('Timer');
});

document.getElementById('traceButton').addEventListener('click', () => {
  console.trace('Trace message');
});

document.getElementById('globalErrorButton').addEventListener('click', () => {
  nonExistentFunction(); // This will trigger a global error
});

document.getElementById('customErrorButton').addEventListener('click', () => {
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }

  try {
    throw new CustomError('This is a custom error!');
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
});

// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global error caught:', message);

  if (navigator.onLine) {
    TrackJS && TrackJS.track(message);
  } else {
    console.warn('Internet disconnected, error not sent to TrackJS');
  }

  return true; // Prevent the default browser error handler
};

// Event listener for the button to trigger an error
document.getElementById('triggerErrorButton').addEventListener('click', () => {
    // Manually throw an error
    throw new Error('This is a test error.');
});
