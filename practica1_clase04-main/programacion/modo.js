const btn = document.getElementById("modeToggleBtn");
  const icon = document.getElementById("modeIcon");

  let darkMode = false;

  btn.addEventListener("click", () => {
    darkMode = !darkMode;

    // Cambiar el ícono
    icon.classList.toggle("bi-sun", !darkMode);
    icon.classList.toggle("bi-moon", darkMode);

    // (Opcional) Cambiar modo visual
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-white", darkMode);
  });