   // Efeito de digitação
        const text = "Desenvolvedora Front-End";
        let index = 0;
        let deleting = false;
        const typingElement = document.getElementById('typing-effect');

        function type() {
            if (deleting) {
                if (index > 0) {
                    typingElement.innerHTML = text.substring(0, index - 1);
                    index--;
                    setTimeout(type, 100);
                } else {
                    deleting = false;
                    setTimeout(type, 1000);
                }
            } else {
                if (index < text.length) {
                    typingElement.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, 150);
                } else {
                    deleting = true;
                    setTimeout(type, 2000);
                }
            }
        }
        type();

        // Alternador de tema
        const themeToggle = document.getElementById("theme-toggle");
        const icon = themeToggle.querySelector(".icon");
        const body = document.body;

        function setTheme(theme) {
            if (theme === "dark") {
                body.classList.add("dark");
                icon.textContent = "🌙";
            } else {
                body.classList.remove("dark");
                icon.textContent = "☀️";
            }
            localStorage.setItem("theme", theme);
        }

        themeToggle.addEventListener("click", () => {
            const isDark = body.classList.contains("dark");
            setTheme(isDark ? "light" : "dark");
        });

        // Carregar tema salvo
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);