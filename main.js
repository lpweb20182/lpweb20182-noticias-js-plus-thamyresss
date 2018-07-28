var noticias = [];
var now = new Date();

if(now.getMonth()<9){
    var mes = '0'+(now.getMonth()+1);
}
else{
    var mes = (now.getMonth()+1);
}


var datetime = now.getFullYear() + "-" + mes + "-" + now.getDate() + "T" + now.getHours() + ":" + now.getMinutes();
console.log(datetime);

function atualizarLista(noticia) {
    var data = noticia.dataHora;
    console.log(data);

    if(data != 0){
        if(data <= datetime){
            var lista = document.getElementById('noticias-recentes-list');
            var li = document.createElement('li');
            li.setAttribute('id', 'noticia-' + noticia.id);
            li.setAttribute('class', 'noticia');
            li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
                + noticia.nome
                + '<br>'
                + noticia.email
                + '<br>'
                + noticia.titulo
                + '<br>'
                +noticia.dataHora
                + '</p>'
                + '<p class="conteudo">'
                + noticia.conteudo
                + '<br>'
                + '<span>------------------</span>'
                + '<br>'
                + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
                + '</p>';
            lista.appendChild(li);
        }
    }

    
}

function salvar(form) {
    var nome = document.getElementById('frm-nome').value;
    var email = document.getElementById('frm-email').value;
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var dataHora = document.getElementById('frm-dataHora').value;
    var noticia = {
        id: noticias.length,
        nome: nome,
        email: email,
        titulo: titulo,
        conteudo: conteudo,
        dataHora: dataHora
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}