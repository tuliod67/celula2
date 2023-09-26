document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu p[data-cor]");
    const quadrados = document.querySelectorAll(".quadrado");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const cor = link.getAttribute("data-cor");

            // Remover classes de destaque de todos os itens do menu
            menuLinks.forEach((menuLink) => {
                menuLink.classList.remove("destaque");
            });

            // Adicionar classe de destaque ao item do menu clicado
            link.classList.add("destaque");

            // Esconder todos os quadrados
            quadrados.forEach((quadrado) => {
                quadrado.style.display = "none";
            });

            // Mostrar o quadrado correspondente à cor do menu clicado
            document.getElementById(`quadrado${cor.charAt(0).toUpperCase() + cor.slice(1)}`).style.display = "block";

            // Alterar a cor do ícone quando um item de menu é selecionado
            menuLinks.forEach((menuLink) => {
                const icon = menuLink.querySelector("i");
                if (menuLink.classList.contains("destaque")) {
                    // Ícone destacado (cor de destaque)
                    icon.style.color = "#8a00ff";
                } else {
                    // Ícone não destacado (branco com baixa opacidade)
                    icon.style.color = "rgba(255, 255, 255, 0.5)";
                }
            });
        });
    });

    // Adicionar evento de clique ao botão para redirecionar
    const meuBotao = document.getElementById("meuBotao");
    if (meuBotao) {
        meuBotao.addEventListener("click", function () {
            // Redirecionar para o link desejado
            window.location.href = "https://www.google.com/maps/place/R.+Monte+C%C3%A1ceros,+527+-+Zona+03,+Maring%C3%A1+-+PR,+87050-180/@-23.4297937,-51.9240242,19z/data=!3m1!4b1!4m6!3m5!1s0x94ecd0c653e193d9:0x77f9f497d980beaa!8m2!3d-23.4297937!4d-51.9240242!16s%2Fg%2F11g9mnl85f?entry=ttu";
        });
    }
});
