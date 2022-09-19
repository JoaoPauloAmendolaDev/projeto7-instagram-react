import React from "react";
import Suggestions from "./suggestions";



export default function SideBar(){
  const [nome, perguntarNome] = React.useState("")
    return (
    <div class="sidebar">
        <div class="usuario">
          <img src="assets/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            <span onClick={() => perguntar()}>
              {(nome === '' || nome === null) ? "Catana" : nome }
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          <Suggestions/>
          </div>
          <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
        </div>
    
)
function perguntar(){
  let nomePrompt = prompt('Digite o seu nome de Usuário: ')
  perguntarNome(nomePrompt)
}
}

