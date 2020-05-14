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
