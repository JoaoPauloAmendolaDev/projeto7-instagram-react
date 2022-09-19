import React from "react";

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
    function Posts(props){
        const [curtido, verificaCurtido] = React.useState(0)
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

                    <div class="conteudo" onClick={() => curtir()} >
                        <img src={props.imagemConteudo}/>
                    </div>

                    <div class="fundo">
                    <div class="acoes">
                <div>
                    {(curtido == 1 || curtido == null) ? <ion-icon name="heart-sharp"></ion-icon> : <ion-icon name="heart-outline" onClick={() => curtir()}></ion-icon> }
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
                        <div class="curtidas">
                            <img src={props.imagemCurtidor} />
                                <div class="texto">
                                    Curtido por <strong>{props.curtidor}</strong> e <strong>outras {props.numeroCurtidores} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
    
                function curtir(){
        console.log('123')
        
        verificaCurtido(1)
        
} 

        
    }
    return(arrayPosts.map((p) => <Posts fotoUsuario={p.fotoUsuario} nomeUsuario={p.nomeUsuario} imagemConteudo={p.imagemConteudo}
                                                    imagemCurtidor={p.imagemCurtidor} curtidor={p.curtidor} numeroCurtidores={p.numeroCurtidores} />))
}
