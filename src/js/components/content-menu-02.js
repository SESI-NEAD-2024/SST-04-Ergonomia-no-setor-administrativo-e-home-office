export default {
  data() {
    return {
      idSelected: 0,
      items: [
        {
          id: 0,
          
          html://html
           `
            
            <div>
              
              <p class="mt-0">Como os músculos dos membros inferiores não são tão exigidos, você sente menos desconforto e cansaço.​</p>
            </div>
          
              `,
        },

        {
          id: 1,
          
          html: //html
          `

          
            <div>
              
              <p class="mt-0">
                Ficar sentado ajuda a posturas forçadas e desconfortáveis que podem causar dores.
              </p>
            </div>
          
              `,
        },
        {
          id: 2,
          
          html://html
           `
           
            <div>
              
              <p class="mt-0">
              O corpo consome menos energia, o que contribui para manter o foco e a disposição por mais tempo.
              </p>
            </div>
          
              `,
        },
        {
          id: 3,
          
          html: //html
          `
            
            <div>
              
            
              <p class="mt-0">
              Estar sentado permite maior controle e precisão em atividades que exigem concentração e movimentos finos, como digitar, escrever ou operar equipamentos no computador.
              </p>
            </div>
          
              `,
        },
        
        {
          id: 4,
          //html
          html: `
            
            
          
            <div>
              <p class="mt-0">
              Ficar muito tempo parado pode limitar seus movimentos, deixando o corpo mais inativo.
               </p>
            </div>
          
              `,
        },
        {
          id: 5,
          //html
          html: `
            
            <div>
              <p class="mt-0">
               Às vezes, sem perceber, adotamos posições inadequadas, como excesso de lordose (curvatura exagerada na lombar) ou cifose (curvatura acentuada nas costas).​
               </p>
            </div>
          
              `,
        },
        
        {
          id: 6,
          //html
          html: `
           
            
            <div>
              <p class="mt-0">
               Manter-se na mesma posição por muito tempo pode causar retificação da coluna, comprometendo sua postura natural.​
               </p>
            </div>
          
              `,
        },
        {
          id: 7,
          //html
          html: `
          
            <div>
              <p class="mt-0">
             Ficar sentado, especialmente com a cadeira mal ajustada, pode causar estase sanguínea nos membros inferiores, especialmente quando há compressão nas coxas ou panturrilhas.​
               </p>
            </div>
       
              `,
        },

      ],
    };
  },
  methods: {
    menu(event, menuOption) {
      // Remove classe de todos
      let nucleosItems = document.getElementsByClassName("nucleos-item");
      for (var i = 0; i < nucleosItems.length; i++) {
        nucleosItems[i].classList.remove("selected");
      }

      // Adiciona a classe para o item clicado
      event.target.classList.add("selected");

      // Conteúdo atual selecionado para mostrar html
      this.idSelected = menuOption;


    },
  },
  mounted() {
    
  },

 
  template: //html 
   
   `
     
          <div class="content_menu_02" :data-order="idSelected">
            <div class="box-attention box-attention--purple content p-0-mobile p-0-tablet" >
              <div class="row">
                <div class="col m4 s4 nucleos-menu p-16 p-4-mobile py-8-mobile">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item white-t selected">Descanso das pernas</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item white-t">Postura mais natural</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item white-t">Economia de energia</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item white-t">Praticidade manual</li>
                    <li @click="menu($event, 4)" class="pointer nucleos-item white-t">Sedentarismo</li>
                    <li @click="menu($event, 5)" class="pointer nucleos-item white-t">Posturas incorretas</li>
                    <li @click="menu($event, 6)" class="pointer nucleos-item white-t">Desalinhamento da coluna</li>
                    <li @click="menu($event, 7)" class="pointer nucleos-item white-t">Má circulação</li>
                    

                  </ul>
                </div>
                <div class="col m8 s8 flex--align-center" >
                  <div class="box flex--align-center white-t" v-html="items[idSelected].html">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    `,
};

