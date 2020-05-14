function myFunction() {
  var sheet=SpreadsheetApp.getActive();
  var filas =sheet.getDataRange();
  var nfilas=filas.getNumRows()-1;
  var valores=filas.getValues();
  for(var i=1;i<=nfilas;i++){
    var nombre=valores[i][1];
    var apellidos=valores[i][2];
    var email=valores[i][3];
    var numero=valores[i][4];
    GmailApp.sendEmail(email, 'Bienvenid@'+nombre , 'Llenaste el formulario y con eso haz confirmado tu inscripcion '+apellidos+' ,'+nombre+'Felicitaciones ')
  }
}
