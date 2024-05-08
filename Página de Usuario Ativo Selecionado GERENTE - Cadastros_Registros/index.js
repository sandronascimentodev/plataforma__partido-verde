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

//Mostrar Modal Cadastrar Manualmente
function showModal(body) {

    var element = document.getElementById("modal");
    element.classList.add("show-modal");
    

}


//Esconder Modal Cadastrar Manualmente
function hideModal() {

    var element = document.getElementById("modal");
    element.classList.remove("show-modal");

}

//Mostrar Modal Relatório
function showModal2(body) {

    var element = document.getElementById("modal-2");
    element.classList.add("show-modal");
    
}

//Esconder Modal  Relatório
function hideModal2() {

    var element = document.getElementById("modal-2");
    element.classList.remove("show-modal");

}

function validarFormulario() {
    var nomeCompleto = document.getElementById('nome-completo').value;
    var atividadeProfissional = document.getElementById('atv-profissional').value;
    var endereco = document.getElementById('endereco').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    if (nomeCompleto === "" || atividadeProfissional === "" || endereco === "" || complemento === "" || cidade === "" || estado === "" ) {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(nomeCompleto)) {
        alert("O nome completo não pode conter caracteres numéricos!");
        return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(atividadeProfissional)) {
        alert("A atividade profissional não pode conter caracteres numéricos.");
        return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(cidade)) {
        alert("A cidade não pode conter caracteres numéricos.");
        return false;
    }

    if (!/^[a-zA-Z\s]*$/.test(estado)) {
        alert("O estado não pode conter caracteres numéricos.");
        return false;
    }

    return true;

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