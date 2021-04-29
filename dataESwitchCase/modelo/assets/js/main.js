const resultado = document.querySelector('h1')
const date = new Date();
const hour = date.getHours()
 const minutes = date.getMinutes()
 const weekDay = date.getDay()

resultado.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}) //não funciona o timeStyle

//exemplo de solução: 
// function getWeekDayText(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
//   return diasSemana[diaSemana]
// }

// getWeekDayText(weekDay)





// const weekDay = date.getDay()
// let weekDayText;
// const today = date.getDate()
// const month = date.getMonth()
// let monthText;
// const year = date.getFullYear()
// const hour = date.getHours()
// const minutes = date.getMinutes()

// switch(weekDay) {
//   case 0:
//    weekDayText = 'Domingo'
//   break;
//   case 1:
//    weekDayText = 'Segunda-feira'
//   break;
//   case 2:
//    weekDayText = 'Terça-feira'
//   break;
//   case 3:
//    weekDayText = 'Quarta-feira'
//   break;
//   case 4:
//    weekDayText = 'Quinta-feira'
//   break;
//   case 5:
//    weekDayText = 'Sexta-feira'
//   break;
//   case 6:
//    weekDayText = 'Sábado'
//   break;
//   default:
//     alert('error')
// }

// switch(month) {
//   case 0:
//     monthText = 'Janeiro'
//   break;
//   case 1:
//     monthText = 'Fevereiro'
//   break;
//   case 2:
//     monthText = 'Março'
//   break;
//   case 3:
//     monthText = 'Abril'
//   break;
//   case 4:
//     monthText = 'Maio'
//   break;
//   case 5:
//     monthText = 'Junho'
//   break;
//   case 6:
//     monthText = 'Julho'
//   break;
//   case 7:
//     monthText = 'Agosto'
//   break;
//   case 8:
//     monthText = 'Setembro'
//   break;
//   case 9:
//     monthText = 'Outubro'
//   break;
//   case 10:
//     monthText = 'Novembro'
//   break;
//   case 11:
//     monthText = 'Dezembro'
//   break;
//   default:
//     alert('error')
// }

// const hora = (hour) => {
//   if(hour < 10) {
//     return `0${hour}`
//   } else {
//     return hour
//   }
// }

// const minuto = (minute) => {
//   if(minute < 10) {
//     return `0${minute}`
//   } else {
//     return minute
//   }
// }

// resultado.innerHTML = `${weekDayText}, ${today} de ${monthText} de ${year}
// ${hora(hour)}:${minutes}
// `