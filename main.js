(function(){
var actualizarHora=function(){
	var fecha=new Date(),
		mes=fecha.getMonth(),
		horas=fecha.getHours(),
		segundos=fecha.getSeconds(),
		minutos=fecha.getMinutes(),
		diaSemana=fecha.getDay(),
		dia=fecha.getDate(),
		year=fecha.getFullYear(),
		ampm;

		var pHoras=document.getElementById("horas"),
			pMes=document.getElementById("mes"),
			pDiaSemana=document.getElementById("diaSemana"),
			pDia=document.getElementById("dia"),
			pSegundos=document.getElementById("segundos"),
			pMinutos=document.getElementById("minutos"),
			pYear=document.getElementById("year"),
			pAmPm=document.getElementById("ampm");


			var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
			pDiaSemana.textContent=semana[diaSemana];

			var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
			pMes.textContent=meses[mes];
			pYear.textContent=year;
			pDia.textContent=dia;
			

			if(horas>=12){
				horas=horas-12;
				ampm="AM";

			}else{
				ampm="PM";
			}
			if(horas==0){
				horas=12;
			}
			if(minutos<10){
				minutos="0"+minutos;
			}
			if(segundos<10){
				segundos="0"+segundos;
			}

			pHoras.textContent=horas;
			pAmPm.textContent=ampm;
			pMinutos.textContent=minutos;
			pSegundos.textContent=segundos;

}
actualizarHora();
var intervalo=setInterval(actualizarHora,1000);
}())