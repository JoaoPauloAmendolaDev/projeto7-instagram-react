


let arrayStories = [
    {name: '9gang',imagem : '/assets/9gag.svg'
    }
,   {name: 'meowed',imagem : '/assets/meowed.svg'
    }
,   {name: 'barked',imagem : '/assets/barked.svg'
    }
,   {name: 'nathanwp...',imagem : '/assets/nathanwpylestrangeplanet.svg'
    }
,   {name: 'wawavic...',imagem : '/assets/wawawicomics.svg'
    }
,   {name: 'respondeai',imagem : '/assets/respondeai.svg'
    }
,   {name: 'filomoderna',imagem : '/assets/filomoderna.svg'
    }
,   {name: 'memeriag...',imagem : '/assets/memeriagourmet.svg'
    }
]


export default function Stories(){
    function Story(props){
        return (
            <div class="story">
              <div class="imagem">
                <img src={props.imagem} />
              </div>
              <div class="usuario">
                {props.name}
              </div>
            </div>
      )
    }
    return (arrayStories.map(s => <Story name={s.name} imagem={s.imagem}/>))
    
}
