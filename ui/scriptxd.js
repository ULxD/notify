function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $('#timer').html(`${minutes + ":" + seconds}`)
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(document).ready(function(){
	window.addEventListener("message",function(event){
    var id = event.data.css+event.data.diferencial;
    if (event.data.nuiMsg) {
        $(`.left`).append(` 
        <li id='procurado1' class="animate__animated animate__backInLeft procurado">
        <i class="fas fa-star procurado"></i>
        <i class="fas fa-star procurado"></i>
        <i class="fas fa-star procurado"></i>
        <i class="fas fa-star procurado"></i>
        <i class="fas fa-star procurado"></i>
        <p class="searchTimer"><b>${event.data.mensagem} </b></p>
        </li>
        `)
    }
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
    }else if(event.data.css == 'zancudo'){
        var duration = 60 * 20; // Converter para segundos
         // selecionando o timer
        startTimer(duration); // iniciando o timer
        $(`.left`).append(` 
        <li id='${id}' class="animate__animated animate__backInRight ${event.data.css}">
        <i class="fas fa-user-clock ${event.data.css}"></i>
        <p>Invasão ao zancudo em: <span id="timer"></span>  </p>
        </li>
        `)
        /* console.log("aa")
        if (Number(event.data.tempo2) > 0) {
            $(`.zancudoTimer`).html(`${event.data.mensagem}`)
        } else {
            $(`#${id}`).removeClass("animate__backInRight")
            $(`#${id}`).addClass(`animate__backOutRight `)
            setTimeout(function(){
                $(`#${id}`).remove();   
            }, 100);
        } */
    }else if(event.data.css == 'procurado'){
        if (Number(event.data.tempo) > 0) {
            $(`.searchTimer`).html(`${event.data.mensagem}`)
        } else {
            $(`#${id}`).removeClass("animate__backInRight")
            $(`#${id}`).addClass(`animate__backOutRight `)
            setTimeout(function(){
                $(`#${id}`).remove();   
            }, 100);
        }
        
    }
    if (event.data.css !== "procurado") {
        setTimeout(function(){
            
                $(`#${id}`).removeClass("animate__backInRight")
                $(`#${id}`).addClass(`animate__backOutRight `)
            
            
        },event.data.tempo + 2000);
        setTimeout(function(){
            $(`#${id}`).remove();   
        }, event.data.tempo + 2500);
    }


// REMOVE NOTIFICAÇÃO
// 
  })
});


