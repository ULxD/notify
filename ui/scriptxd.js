$(document).ready(function(){
	window.addEventListener("message",function(event){
    var id = event.data.css+event.data.diferencial;
    if ( event.data.css == 'aviso'){
        $(`.right`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight ${event.data.css}">
        <i class="fas fa-exclamation-triangle ${event.data.css}"></i>
        <p>${event.data.mensagem} </p>
        </li>
        `)
    }else if(event.data.css == 'sucesso'){
        $(`.right`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight ${event.data.css}">
        <i class="fas fa-check-circle ${event.data.css}"></i>
        <p>${event.data.mensagem}  </p>
        </li>
        `)
    }else if(event.data.css == 'negado'){
        $(`.right`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight ${event.data.css}">
        <i class="fas fa-minus-circle ${event.data.css}"></i>
        <p>${event.data.mensagem}  </p>
        </li>
        `)
    }else if(event.data.css == 'importante'){
        $(`.right`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight ${event.data.css}">
        <i class="fas fa-info-circle ${event.data.css}"></i>
        <p>${event.data.mensagem}  </p>
        </li>
        `)
    }else if(event.data.css == 'procurado'){
        $(`.left`).append(` 
        <li id='${id}' class="animate__animated animate__backInLeft ${event.data.css}">
        <i class="fas fa-star ${event.data.css}"></i>
        <i class="fas fa-star ${event.data.css}"></i>
        <i class="fas fa-star ${event.data.css}"></i>
        <i class="fas fa-star ${event.data.css}"></i>
        <i class="fas fa-star ${event.data.css}"></i>
        <p><b>  ${event.data.tempo} </b></p>
        </li>
        `)
    }

    setTimeout(function(){
        
        $(`#${id}`).removeClass("animate__backInRight")
        $(`#${id}`).addClass(`animate__backOutRight `)
      },event.data.tempo + 2000);


// REMOVE NOTIFICAÇÃO
setTimeout(function(){
    // $("#"+event.data.css+"").removeClass("show");
    /* <div id='${id}' class="exit animate__backOutRight  animate__delay-1s"> */
    
    $(`#${id}`).remove();
    // $("#notifications").removeClass("show");
  }, event.data.tempo + 2500);
  })
});


