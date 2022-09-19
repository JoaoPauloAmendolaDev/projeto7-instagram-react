import React from "react";
import Suggestions from "./suggestions";
import User from "./user";



export default function SideBar(){
  
      return(
        <div class="sidebar">
        <User/>
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Suggestions/>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
          </div> 

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        </div>
        )

}

