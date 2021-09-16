

$(document).ready(function(){
	window.addEventListener("message",function(event){
    var id = event.data.css+event.data.diferencial;
    
    if ( event.data.css == 'aviso'){
        $(`ul`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight sucesso">
        <i class="fas fa-exclamation-triangle ${event.css}"></i>
        <p>${event.data.mensagem}</p>
        </li>
        `)
    }else if(event.data.css == 'sucesso'){
        $(`ul`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight sucesso">
        <i class="fas fa-check-circle ${event.css}"></i>
        <p>${event.data.mensagem}</p>
        </li>
        `)
    }else if(event.data.css == 'negado'){
        $(`ul`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight sucesso">
        <i class="fas fa-minus-circle ${event.css}"></i>
        <p>${event.data.mensagem}</p>
        </li>
        `)
    }else if(event.data.css == 'importante'){
        $(`ul`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight sucesso">
        <i class="fas fa-info-circle ${event.css}"></i>
        <p>${event.data.mensagem}</p>
        </li>
        `)
    }


// REMOVE NOTIFICAÇÃO
setTimeout(function(){
    // $("#"+event.data.css+"").removeClass("show");
    $(`#${id}`).remove();
    // $("#notifications").removeClass("show");
  }, event.data.tempo + 2500);
  })
});


