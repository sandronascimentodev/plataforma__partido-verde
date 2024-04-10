const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");



//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//Mostrar Modal
function showModal(body) {

    var element = document.getElementById("modal");
    element.classList.add("show-modal");
    

}


//Esconder Modal
function hideModal() {

    var element = document.getElementById("modal");
    element.classList.remove("show-modal");

}


//Aparecer Texto de Contato Cadastrado
function hideModalComplete() {

    var element = document.getElementById("modal");
    var elementDois = document.getElementById("cadastro-sucesso");
    element.classList.remove("show-modal");
    elementDois.classList.add("mostrar-cadastro-sucesso");

}



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