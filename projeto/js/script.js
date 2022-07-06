function validarFormulario() {
	let nome = document.getElementById("nome-completo").value
	let email = document.getElementById("email").value
	let telefone = document.getElementById("telefone").value
	let estado = document.getElementById("estado").value
	let cidade = document.getElementById("cidade").value
	let caixatexto = document.getElementById("caixa-texto").value
		
		
		
		
		if(email == ""){
			alert("O campo está vazio")
			
		}
		if(caixatexto == ""){
			alert("O campo está vazio")
			
		}
		if(estado == ""){
			alert("O campo está vazio")
			
		}
		if(cidade == ""){
			alert("O campo está vazio")
			
		}
		if(nome == ""){
			alert("O campo está vazio")
			
		}
		if(telefone == "" || telefone.length<8){
			alert("O campo está vazio")
			
		}
		
		
		console.log(nome)
		console.log(email)
		console.log(telefone)
		console.log(estado)
		console.log(cidade)
		console.log(caixatexto)
		
		
		
		}
		
	function validarFormularioLogin(){
	let email = document.getElementById("email_login").value
	let senha = document.getElementById("senha_log").value
		if(email == "")
		{
			alert("O campo está vazio")
			
		}
		if(senha == ""){
			alert("O campo está vazio")
			
		}
	
	}
	function validarFormularioCadastro(){
	let nome = document.getElementById("nome_cad").value
	let senha = document.getElementById("senha_cad").value
	let email = document.getElementById("email_cad").value
	let confsenha = document.getElementById("senha_cad1").value
	let confemail = document.getElementById("email_cad1").value
	let telefone = document.getElementById("nmr-telefone").value
		
		
		if(email == "")
		{
			alert("O campo está vazio")
			
		}
		if(senha == ""){
			alert("O campo está vazio")
			
		}
		if(confsenha == ""){
			alert("O campo está vazio")
			
		}
		if(confemail == ""){
			alert("O campo está vazio")
			
		}
		if(nome == ""){
			alert("O campo está vazio")
			
		}
		if(telefone == "" || telefone.length<8){
			alert("O campo está vazio")
			
		}
	}