function emailOnFormSubmit(e) {
// Crea tantas variables como respuestas (columnas en tu hoja de cálculo) que necesitas enviar
	var nombre = e.values[1];
	var apellidos = e.values[2];
	var email= e.values[3];
	
// El asunto del correo electrónico
	var subject = "Confirmo su inscripcion" + nombre;
    GmailApp.sendEmail(email, subject, 'Llenaste el formulario y con eso haz confirmado tu inscripcion '
                       +apellidos+' ,'+nombre+'Felicitaciones ')
}
function Notas(){
  var sheet=SpreadsheetApp.getActive();
  var filas =sheet.getDataRange();
  var nfilas=filas.getNumRows()-1;
  var valores=filas.getValues();
  for(var i=1;i<=nfilas;i++){
    var nombre=valores[i][1];
    var apellidos=valores[i][2];
    var email=valores[i][3];
    var Nota1=valores[i][5];
    var Notap1=valores[i][6];
    var Nota2=valores[i][7];
    var Notap2=valores[i][8];
    var Nota3=valores[i][9];
    var Notap3=valores[i][10];
    if (Nota1!=""&&Nota2==""&&Nota3==""){
      GmailApp.sendEmail(email, 'Reporte de notas' , 
                       apellidos+' ,'+nombre+'A continuacion se presetaran tus notas'+Nota1);
    }else if(Nota1!=""&&Nota2!=""&&Nota3==""){
      GmailApp.sendEmail(email, 'Reporte de notas' , 
                       apellidos+' ,'+nombre+'A continuacion se presetaran tus notas Nota1= '+Nota1+' Nota2= '+Nota2);
    }else{
       GmailApp.sendEmail(email, 'Reporte de notas' , 
                       apellidos+' ,'+nombre+'A continuacion se presetaran tus notas Nota1= '+Nota1+' Nota2= '+Nota2+' Nota3= '+Nota3);
    }
    
    
  }
}
function onOpen(){
  var sheet =SpreadsheetApp.getActiveSpreadsheet();
  var enviarnotas=[{name:"EnviarNotas",functionName:"Notas"}]
  sheet.addMenu("gmailNotas", enviarnotas)
  
}