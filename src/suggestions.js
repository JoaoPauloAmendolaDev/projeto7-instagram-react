let suggests=[
    {
        fotoPerfil: 'assets/bad.vibes.memes.svg', 
        nomePerfil:'bad.vibes.memes', 
        perfilInfo:'Segue você' 
    },
    {
        fotoPerfil: 'assets/chibirdart.svg', 
        nomePerfil:'chibirdart', 
        perfilInfo:'Segue você'
    },
    {
        fotoPerfil: 'assets/razoesparaacreditar.svg', 
        nomePerfil:'razoesparaacreditar', 
        perfilInfo:'Novo no Instagram'
    },
    {
        fotoPerfil: 'assets/adorable_animals.svg', 
        nomePerfil:'adorable_animals', 
        perfilInfo:'Segue você'
    },
    {
        fotoPerfil: 'assets/smallcutecats.svg', 
        nomePerfil:'smallcutecats', 
        perfilInfo:'Segue você'
    }
]


export default function Suggestions(){
    function Suggests(props){
        return(
            <div>
        <div class="sugestao">
            <div class="usuario">
              <img src={props.fotoPerfil} />
              <div class="texto">
                <div class="nome">{props.nomePerfil}</div>
                <div class="razao">{props.perfilInfo}</div>
              </div>
            </div>
            <div class="seguir">
            Seguir
            </div>
        </div>
    </div>
    )
    }
    return(suggests.map((s) => <Suggests 
                                    fotoPerfil={s.fotoPerfil}
                                    nomePerfil={s.nomePerfil} 
                                    perfilInfo={s.perfilInfo}/>))
                                }
