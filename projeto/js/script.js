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
		
	