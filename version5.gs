function emailOnFormSubmit(e) {
    var nombre = e.values[1];
	var apellidos = e.values[2];
	var email= e.values[3];
	var subject = "Confirmo su inscripcion" + nombre;
    GmailApp.sendEmail(email, subject, 'Llenaste el formulario y con eso haz confirmado tu inscripcion '
                       +apellidos+' ,'+nombre+'Felicitaciones ')
}
function Notas(){
  var sheet=SpreadsheetApp.getActive();
  var sheets=sheet.getSheets()[0];
  var filas =sheet.getDataRange();
  var nfilas=filas.getNumRows()-1;
  var valores=filas.getValues();
  var valor1=valores[0][6]; 
  var valor2=valores[0][8];
  var valor3=valores[0][10];
  for(var i=1;i<=nfilas;i++){
    var nombre=valores[i][1];
    var apellidos=valores[i][2];
    var email=valores[i][3];
    var Nota1=valores[i][5];
    var Nota2=valores[i][7];   
    var Nota3=valores[i][9];
    var number=1+ +i;
     sheets.getRange(number,7).setValue(Nota1*valor1);
      SpreadsheetApp.flush();
    sheets.getRange(number,9).setValue(Nota2*valor2);
      SpreadsheetApp.flush();
     sheets.getRange(number,11).setValue(Nota3*valor3);
      SpreadsheetApp.flush();
    if (Nota1!=""&&Nota2==""&&Nota3==""){
      GmailApp.sendEmail(email, 'Reporte de notas' , 
                         apellidos+' ,'+nombre+'A continuacion se presetaran tus notas: \n Nota1= '+Nota1+'    NotaNeta= '+(Nota1*valor1));
    }else if(Nota1!=""&&Nota2!=""&&Nota3==""){
      GmailApp.sendEmail(email, 'Reporte de notas' , 
                         apellidos+' ,'+nombre+'A continuacion se presetaran tus notas:\n Nota1= '+Nota1+'    NotaNeta= '+(Nota1*valor1)+'\n Nota2= '+Nota2+'    NotaNeta= '+(Nota2*valor2));
    }else{
       GmailApp.sendEmail(email, 'Reporte de notas' , 
                          apellidos+' ,'+nombre+'A continuacion se presetaran tus notas:\n Nota1= '+Nota1+'    NotaNeta= '+(Nota1*valor1)+'\n Nota2= '+Nota2+'    NotaNeta= '+(Nota2*valor2)+'\n Nota3= '+Nota3+'    NotaNeta= '+(Nota3*valor3));
    }
  }
  total();
}
function onOpen(){
  var sheet =SpreadsheetApp.getActiveSpreadsheet();
  var enviarnotas=[{name:"EnviarNotas",functionName:"Notas"}]
  sheet.addMenu("gmailNotas", enviarnotas) 
  hojas();
}
function hojas(){
  var sps=SpreadsheetApp.getActive();
  var hojas=sps.getSheets()[0];
  var hoja2=sps.getSheets()[1];
  var grafica1=hoja2.newChart().setChartType(Charts.ChartType.BAR)
  .addRange(hojas.getRange("F2:F5"))
  .setPosition(4,3,0,0)
  .build();
  var grafica2=hoja2.newChart().setChartType(Charts.ChartType.BAR)
  .addRange(hojas.getRange("B2:B5"))
  .setPosition(25,3,0,0)
  .build();
  var grafica3=hoja2.newChart().setChartType(Charts.ChartType.BAR)
  .addRange(hojas.getRange("B2:B5"))
  .setPosition(45,3,0,0)
  .build();
  hoja2.insertChart(grafica1);  
  hoja2.insertChart(grafica2); 
  hoja2.insertChart(grafica3); 
}
function Examen(){
  var sheet=SpreadsheetApp.getActive();
  var filas =sheet.getDataRange();
  var nfilas=filas.getNumRows()-1;
  var valores=filas.getValues();
  var emails="";
  var examen1=valores[0][5];
  var valor1=valores[0][6];
  var examen2=valores[0][7];
  var valor2=valores[0][8];
  var examen3=valores[0][9];
  var valor3=valores[0][10];
  for(var i=1;i<=nfilas;i++){
    var email=valores[i][3];
    emails=emails+email;
    if(i!=nfilas){
      emails=emails+",";
    }
  }
  var calendario=CalendarApp.getCalendarById("jquispejar@unsa.edu.pe");
  var evento=calendario.createAllDayEvent("Examen ->Curso<-",new Date(examen1),
                                    {description:"Recordatorio de Examen1 con un valor de "+valor1+"del total",guests:emails,sendInvites:true});
  var calendario=CalendarApp.getCalendarById("jquispejar@unsa.edu.pe");
  var evento=calendario.createAllDayEvent("Examen ->Curso<-",new Date(examen2),
                                    {description:"Recordatorio de Examen2 con un valor de "+valor2+"del total",guests:emails,sendInvites:true});
  var calendario=CalendarApp.getCalendarById("jquispejar@unsa.edu.pe");
  var evento=calendario.createAllDayEvent("Examen ->Curso<-",new Date(examen3),
                                    {description:"Recordatorio de Examen3 con un valor de "+valor3+"del total",guests:emails,sendInvites:true});
}
function total(){
   var sheet=SpreadsheetApp.getActive();
  var sheets=sheet.getSheets()[0];
  var filas =sheet.getDataRange();
  var nfilas=filas.getNumRows()-1;
  var valores=filas.getValues();
  for(var i=1;i<=nfilas;i++){
    var valor1=valores[i][6]; 
    var valor2=valores[i][8];
    var valor3=valores[i][10];
    var number=1+ +i;
     sheets.getRange(number,12).setValue(valor1+valor2+valor3);
      SpreadsheetApp.flush();
}
}