export default{name:"ContentMenu02",data(){return{idSelected:0,items:[{id:0,html:`
            
            <div>
              
              <p class="mt-0">Como os músculos dos membros inferiores não são tão exigidos, você sente menos desconforto e cansaço.​</p>
            </div>
          
              `},{id:1,html:`
           
            <div>
              
              <p class="mt-0">
              O corpo consome menos energia, o que contribui para manter o foco e a disposição por mais tempo.
              </p>
            </div>
          
              `},{id:2,html:`
            
            <div>
              
            
              <p class="mt-0">
              Estar sentado permite maior controle e precisão em atividades que exigem concentração e movimentos finos, como digitar, escrever ou operar equipamentos no computador.
              </p>
            </div>
          
              `}]}},methods:{menu(e,t){for(var i=document.getElementsByClassName("nucleos-item"),o=0;o<i.length;o++)i[o].classList.remove("selected");e.target.classList.add("selected"),this.idSelected=t}},mounted(){},template:`
     
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

    
    `};