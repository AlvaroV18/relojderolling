function crearHora() {
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        numeroDia = fecha.getDate(),
        numeroMes = fecha.getMonth(),
        numeroAnio = fecha.getFullYear();

    //Enviar al HTML las variables

    let pdiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    //Asignar valorees a los objetos del HTML

    pDia.innerText = numeroDia;
    pAnio.innerText = numeroAnio;

    let semana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    pdiaSemana.innerText = semana[diaSemana];

    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio", "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    pMes.innerText = meses[numeroMes]

    //Obtener los objetos del HTML

    let pHora = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pAmPm = document.getElementById("ampm");


    if (hora >= 12) {
        pAmPm.innerText = "PM";
        // hora = hora - 12
    } else {
        pAmPm.innerText = "AM";
    }

    if (segundos < 10) {
        pSegundos.innerText = "0" + segundos;
    } else {
        pSegundos.innerText = segundos;
    }

    if (minutos < 10) {
        pMinutos.innerText = "0" + minutos;
    } else {
        pMinutos.innerText = minutos;
    }

    if (hora < 10) {
        pHora.innerText = "0" + hora;
    } else {
        pHora.innerText = hora;
    }

    console.log("0" + hora)
}

window.setInterval(crearHora, 1000);
