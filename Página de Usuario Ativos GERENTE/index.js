const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const clicavel = document.querySelector("#clicavel");
const url = '/Página Principal GERENTE/index.html';

//função para chamar a url e abrir uma nova página
function openInNewTab(url) {
    window.location.href = "/Página Principal GERENTE/index.html";
    const win = window.open('/Página Principal GERENTE/index.html', '_blank');
    win.focus();
}

//clicar no usuário ativo e abrir uma nova página
clicavel.addEventListener('click', () => {
    openInNewTab(url)
})

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
/*Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${order.numero}</td>
                    <td>${order.nome}</td>
                    <td>${order.email}</td>
                    <td>${order.contatosCadastrados}</td>
                    <td>${order.ultimoAcesso}</td>
                    <td class="primary">...</td>
        
                    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})*/