document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // CURIOSIDADES DA COPA
    // =========================

    const curiosidades = [
        "🇧🇷 O Brasil é a seleção que mais conquistou Copas do Mundo.",
        "⚽ Pelé é o único jogador a conquistar três Copas do Mundo.",
        "🏆 A primeira Copa do Mundo aconteceu em 1930, no Uruguai.",
        "🌎 A Copa do Mundo reúne seleções de vários continentes.",
        "🥅 O futebol é um dos esportes mais populares do planeta.",
        "🏆 A Copa do Mundo é disputada a cada quatro anos.",
        "🇦🇷 A Argentina conquistou a Copa do Mundo de 2022.",
        "🇫🇷 A França conquistou o título mundial em 1998 e 2018."
    ];

    const botao = document.querySelector("button");
    const campoCuriosidade = document.getElementById("curiosidade");

    if (botao && campoCuriosidade) {

        botao.addEventListener("click", () => {

            const numero =
                Math.floor(Math.random() * curiosidades.length);

            campoCuriosidade.textContent = curiosidades[numero];

            campoCuriosidade.style.opacity = "0";

            setTimeout(() => {
                campoCuriosidade.style.transition = "opacity 0.5s";
                campoCuriosidade.style.opacity = "1";
            }, 50);
        });
    }


    // =========================
    // MENU COM ROLAGEM SUAVE
    // =========================

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const destino =
                document.querySelector(link.getAttribute("href"));

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    });


    // =========================
    // ANIMAÇÃO DOS CARDS
    // =========================

    const cards = document.querySelectorAll(".card");

    const observador = new IntersectionObserver(
        entradas => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observador.observe(card);

    });


    // =========================
    // CONTADOR DE CLIQUES
    // =========================

    let cliques = 0;

    if (botao) {

        botao.addEventListener("click", () => {

            cliques++;

            console.log(
                "Você já descobriu " +
                cliques +
                " curiosidade(s)!"
            );

        });

    }


    // =========================
    // EFEITO NO CABEÇALHO
    // =========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 100) {

            header.style.transition = "0.3s";
            header.style.padding = "35px 20px";

        } else {

            header.style.padding = "60px 20px";

        }

    });

});
