function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на елементи
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищаємо контейнер перед додаванням нових елементів
  boxesContainer.innerHTML = '';
  
  // Створюємо масив елементів
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    
    // Встановлюємо розміри (перший 30x30px, кожен наступний +10px)
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    
    // Встановлюємо випадковий колір фону
    box.style.backgroundColor = getRandomHexColor();
    
    // Додаємо базові стилі
    box.style.display = 'inline-block';
    box.style.margin = '5px';
    
    boxes.push(box);
  }
  
  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Слухач події для кнопки Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  
  // Валідація: перевіряємо чи значення в межах 1-100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо input
  }
  // Якщо значення поза межами, нічого не робимо
});

// Слухач події для кнопки Destroy
destroyButton.addEventListener('click', destroyBoxes);