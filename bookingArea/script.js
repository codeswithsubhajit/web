var date = new Date();
  var year = date.getFullYear();
  var month = String(date.getMonth()+1).padStart(2,'0');
  var todayDate = String(date.getDate()).padStart(2,'0');
  var datePattern = year + '-' + month + '-' + todayDate;
  document.getElementById("date1").value = datePattern;
  
//   var nextDate = String(date.getDate()+1).padStart(2,'0');
//   var datePattern1 = year + '-' + month + '-' + nextDate;
//   document.getElementById("date3").value = datePattern1;
