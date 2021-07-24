const counter = {
  value: 0,

  increment() {
    console.log('increment -> this', this);
    this.value += 1;
  },

  decline() {
    console.log('decline -> this', this);
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector('.increment');
const declineBtn = document.querySelector('.decline');
const valueEl = document.querySelector('.value');

incrementBtn.addEventListener('click', () => {
  console.log('нажали на кнопку увеличить');
  counter.increment();
  valueEl.textContent = counter.value;
});

declineBtn.addEventListener('click', () => {
  console.log('нажали на кнопку уменьшить');
  counter.decline();
  valueEl.textContent = counter.value;
});
