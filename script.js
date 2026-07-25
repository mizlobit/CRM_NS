const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  const open = menuToggle.classList.toggle("open");
  mobileNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const scenarioData = {
  sales: ["Продажи", "Все обращения в одной системе", ["1 290 000 ₽", "780 000 ₽", "590 000 ₽"]],
  exchange: ["Обмен валют", "Полный контроль заявок, платежей и балансов", ["420 000 ₽", "360 000 ₽", "215 000 ₽"]],
  shop: ["Интернет-магазин", "Заказы автоматически проходят от оплаты до доставки", ["870 000 ₽", "540 000 ₽", "310 000 ₽"]],
  service: ["Сервисный центр", "Ремонт, мастер, детали и сроки в одном окне", ["680 000 ₽", "470 000 ₽", "290 000 ₽"]],
  construction: ["Строительство", "Объекты, подрядчики и документы под контролем", ["3 200 000 ₽", "1 840 000 ₽", "920 000 ₽"]]
};

document.querySelectorAll(".scenario").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scenario").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const [badge, title, values] = scenarioData[button.dataset.target];
    document.getElementById("previewBadge").textContent = badge;
    document.getElementById("previewTitle").textContent = title;
    document.querySelectorAll(".mini-kanban article strong").forEach((el, index) => el.textContent = values[index]);
  });
});

document.querySelectorAll(".demo-tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".demo-tabs button").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".demo-screen").forEach(screen => screen.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(`screen-${button.dataset.screen}`).classList.add("active");
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
Форма работает в демонстрационном режиме.

Для подключения:
1. Formspree / Web3Forms — отправляйте POST-запрос на адрес формы.
2. Telegram — отправляйте данные на собственный backend или serverless-функцию.
3. CRM — замените обработчик submit на POST-запрос к API CRM.

Не храните токены Telegram-бота прямо в этом файле.
*/


document.querySelectorAll(".feature-trigger").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".feature-item");
    const opening = !item.classList.contains("open");

    document.querySelectorAll(".feature-item").forEach(other => {
      other.classList.remove("open");
      const otherTrigger = other.querySelector(".feature-trigger");
      otherTrigger.setAttribute("aria-expanded", "false");
      otherTrigger.querySelector("b").textContent = "+";
    });

    if (opening) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      trigger.querySelector("b").textContent = "−";
    }
  });
});

document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.querySelector("b").textContent = open ? "−" : "+";
  });
});


document.querySelectorAll(".process-item > button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".process-item");
    const opening = !item.classList.contains("open");

    document.querySelectorAll(".process-item").forEach(other => {
      other.classList.remove("open");
      const otherButton = other.querySelector("button");
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.querySelector("b").textContent = "⌄";
    });

    if (opening) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector("b").textContent = "⌃";
    }
  });
});
