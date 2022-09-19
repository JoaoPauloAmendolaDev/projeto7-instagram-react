import React from "react"

export default function User(){
        function perguntar(){
            let nomePrompt = prompt('Digite o seu nome de Usuário: ')
            setNome(nomePrompt)
        }

        function perguntarFoto(){
            let fotoPrompt = prompt('digite a URL da sua nova foto: ')
            while (fotoPrompt === null || fotoPrompt === undefined || fotoPrompt === ''){
                fotoPrompt = prompt('digite a URL da sua nova foto: ')
            }
            setFoto(fotoPrompt)
        }

        let [nome, setNome] = React.useState("")
        let [foto, setFoto] = React.useState("assets/catanacomics.svg")
        return (
                <div class="usuario">
                    <img onClick={() => perguntarFoto()} src= {foto} />
                    <div class="texto">
                    <strong>catanacomics</strong><span onClick={() => perguntar()}>
                     {(nome === '' || nome === null) ? "Catana" : nome }
                    <ion-icon name="pencil"></ion-icon>
                    </span>
                    </div>
                </div>
        )

    }
