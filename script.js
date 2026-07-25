const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const titles = {
  overview: "Обзор бизнеса",
  clients: "Клиенты",
  deals: "Сделки",
  analytics: "Аналитика",
  tasks: "Задачи"
};

document.querySelectorAll(".demo-menu button[data-screen]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".demo-menu button[data-screen]").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".demo-screen").forEach(screen => screen.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(`screen-${button.dataset.screen}`).classList.add("active");
    document.getElementById("demoTitle").textContent = titles[button.dataset.screen];
  });
});

const form = document.getElementById("leadForm");
form.addEventListener("submit", event => {
  event.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  form.querySelector("button").textContent = "Заявка сохранена";
  form.querySelector("button").disabled = true;
});

/*
ПОДКЛЮЧЕНИЕ ФОРМЫ

Форма сейчас работает в демонстрационном режиме.

Вариант 1: Formspree / Web3Forms
- создайте форму в выбранном сервисе;
- замените обработчик submit на отправку POST-запроса.

Вариант 2: Telegram
- создайте бота через @BotFather;
- отправляйте данные формы на собственный backend или serverless-функцию;
- не размещайте токен Telegram-бота прямо в этом файле.

Вариант 3: собственная CRM
- замените демонстрационный обработчик на POST-запрос к API CRM.
*/
