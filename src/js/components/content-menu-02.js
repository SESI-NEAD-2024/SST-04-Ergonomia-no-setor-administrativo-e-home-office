export default {
  name: "ContentMenu02",
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
          id: 2,
          
          html: //html
          `
            
            <div>
              
            
              <p class="mt-0">
              Estar sentado permite maior controle e precisão em atividades que exigem concentração e movimentos finos, como digitar, escrever ou operar equipamentos no computador.
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
            <div class="box-attention  content p-0-mobile p-0-tablet" >
              <div class="row">
                <div class="col m5 s4 nucleos-menu p-16 p-4-mobile py-8-mobile">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item white-t selected">Descanso das pernas</li>
                   
                    <li @click="menu($event, 1)" class="pointer nucleos-item white-t">Economia de energia</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item white-t">Praticidade manual</li>
                    
                    

                  </ul>
                </div>
                <div class="col m7 s8 flex--align-center" >
                  <div class="box flex--align-center white-t" v-html="items[idSelected].html">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    `,
};

