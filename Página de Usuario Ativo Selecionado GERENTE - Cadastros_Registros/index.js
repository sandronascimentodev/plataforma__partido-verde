const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

const url = 'https://instance.servicenow.com/api/now/table/incident/d977b66a4f411200adf9f8e18110c7b2';
const contatosContainer = document.querySelector("#contatos-container");



//Pegar Todos os Contatos
async function puxarContatos() {

    //Chamar resposta da variável url através da função fetch
    const response = await fetch(url);

    //print da variável response
    console.log(response);

    //ativar metodo json(recebe dados que vieram da variável response em um formato de array de objetos)
    const data = await response.json();

    //print da variável data
    console.log(data);


    data.map((contato) => {

        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const link = document.createElement("a");

    })

}

puxarContatos();

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

// Sua função validarFormulario()
function validarFormulario() {
    // Captura os valores dos campos do formulário
    var nomeCompleto = document.getElementById('nome-completo').value;
    var atividadeProfissional = document.getElementById('atv-profissional').value;
    var endereco = document.getElementById('endereco').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    // Verifica se os campos estão vazios
    if (nomeCompleto === "" || atividadeProfissional === "" || endereco === "" || complemento === "" || cidade === "" || estado === "") {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }

    // Verifica se o nome completo contém apenas letras
    if (!/^[a-zA-Z\s]*$/.test(nomeCompleto)) {
        alert("O nome completo não pode conter caracteres numéricos!");
        return false;
    }

    // Verifica se a atividade profissional contém apenas letras
    if (!/^[a-zA-Z\s]*$/.test(atividadeProfissional)) {
        alert("A atividade profissional não pode conter caracteres numéricos.");
        return false;
    }

    // Verifica se a cidade contém apenas letras
    if (!/^[a-zA-Z\s]*$/.test(cidade)) {
        alert("A cidade não pode conter caracteres numéricos.");
        return false;
    }

    // Verifica se o estado contém apenas letras
    if (!/^[a-zA-Z\s]*$/.test(estado)) {
        alert("O estado não pode conter caracteres numéricos.");
        return false;
    }

    // Se todas as validações passarem, retorna true
    return true;
}

// Função para fechar o modal apenas se o formulário for válido
function hideModalComplete() {
    // Valida o formulário antes de fechar o modal
    if (validarFormulario()) {
        var element = document.getElementById("modal");
        var elementDois = document.getElementById("cadastro-sucesso");
        element.classList.remove("show-modal");
        elementDois.classList.add("mostrar-cadastro-sucesso");
    }
}



//Aparecer Texto de Contato Cadastrado
//function hideModalComplete() {

   // var element = document.getElementById("modal");
   // var elementDois = document.getElementById("cadastro-sucesso");
   // element.classList.remove("show-modal");
    ///elementDois.classList.add("mostrar-cadastro-sucesso");

//}



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

function auth() {
    var config = {
        'client_id': '107765724452-7ul237bdc74bcqa19t9ftob6v04p30ov.apps.googleusercontent.com',
        'scope': 'https://www.google.com/m8/feeds'
    };
    gapi.auth.authorize(config, function () {
        fetch(gapi.auth.getToken());

    });
}

function fetch(token) {
    $.ajax({
        url: "https://www.google.com/m8/feeds/contacts/default/full?access_token=" + token.access_token + "&alt=json",
        dataType: "jsonp",
        success: function (data) {
            // display all your data in console
            console.log(JSON.stringify(data));
        }
    });
}	