import React, { useState } from "react";

let arrayPosts= [
    {
        nomeUsuario: 'meowed', fotoUsuario: '/assets/meowed.svg', 
        imagemConteudo: '/assets/gato-telefone.svg', imagemCurtidor: '/assets/respondeai.svg', 
        curtidor: 'respondeai', numeroCurtidores: 101523
    },
    {
        nomeUsuario: 'barked', fotoUsuario: '/assets/barked.svg', 
        imagemConteudo: '/assets/dog.svg', imagemCurtidor: '/assets/adorable_animals.svg', 
        curtidor: 'adorable_animals', numeroCurtidores: 200541
    }
]




export default function Post(){

    return(arrayPosts.map((p) => <Posts 
                                        fotoUsuario={p.fotoUsuario}
                                        nomeUsuario={p.nomeUsuario}
                                        imagemConteudo={p.imagemConteudo}
                                        imagemCurtidor={p.imagemCurtidor}
                                        curtidor={p.curtidor}
                                        numeroCurtidores={p.numeroCurtidores}
                                                                            />))
}


function Posts(props){
    let [curtido, setCurtido] = useState(0)
    let [numeroDeCurtidas, setNumeroDeCurtidas] = useState(props.numeroCurtidores)
    let [selecionado, setSelecionado] = useState(0)

    function curtir(){
        let novoNumeroDeCurtidas = numeroDeCurtidas + 1
        console.log(novoNumeroDeCurtidas)
        setNumeroDeCurtidas(novoNumeroDeCurtidas)
        setCurtido(1)
    }

    function descurtir(){
        let novoNumeroDeCurtidas = numeroDeCurtidas - 1
        console.log(novoNumeroDeCurtidas)
        setNumeroDeCurtidas(novoNumeroDeCurtidas)
        setCurtido(0)
    }    

    function selecionar(){
        console.log('selecionei')
        setSelecionado(1)
    }

    function deselecionar(){
        console.log('desselecionei')
        setSelecionado(0)
    }

    return(
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src= {props.fotoUsuario} />
                            {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo" onClick={ curtido == 1 ? () => descurtir() : () => curtir()} >
                    <img src={props.imagemConteudo}/>
                </div>

                <div class="fundo">
                <div class="acoes">
            <div>
                {(curtido == 1 || curtido == null) ? <ion-icon name="heart-sharp" class='corVermelho' onClick={() => descurtir()}></ion-icon> : <ion-icon name="heart-outline" onClick={() => curtir()}></ion-icon> }
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                {(selecionado == 1 || selecionado == null) ? <ion-icon name="bookmark-sharp" onClick={() => deselecionar()}></ion-icon> : <ion-icon name="bookmark-outline" onClick={() => selecionar()} ></ion-icon>}
            </div>
        </div>
                    <div class="curtidas">
                        <img src={props.imagemCurtidor} />
                            <div class="texto">
                                Curtido por <strong>{props.curtidor}</strong> e <strong>outras {numeroDeCurtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ) 
}
