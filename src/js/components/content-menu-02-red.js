export default{name:"ContentMenu02Red",data(){return{idSelected:0,items:[{id:4,html:`
            
            
          
            <div>
              <p class="mt-0">
              Ficar muito tempo parado pode limitar seus movimentos, deixando o corpo mais inativo.
               </p>
            </div>
          
              `},{id:5,html:`
           
            
            <div>
              <p class="mt-0">
               Manter-se na mesma posição por muito tempo pode causar retificação da coluna, comprometendo sua postura natural.​
               </p>
            </div>
          
              `},{id:6,html:`
          
            <div>
              <p class="mt-0">
             Ficar sentado, especialmente com a cadeira mal ajustada, pode causar estase sanguínea nos membros inferiores, especialmente quando há compressão nas coxas ou panturrilhas.​
               </p>
            </div>
       
              `}]}},methods:{menu(e,t){for(var i=document.getElementsByClassName("nucleos-item2"),a=0;a<i.length;a++)i[a].classList.remove("selected");e.target.classList.add("selected"),this.idSelected=t}},mounted(){},template:`
     
          <div class="content_menu_02 content_menu_02--red" :data-order="idSelected">
            <div class="box-attention  content p-0-mobile p-0-tablet" >
              <div class="row">
                <div class="col m5 s4 nucleos-menu p-16 p-4-mobile py-8-mobile">
                  <ul class="ml-16">
                  <li @click="menu($event, 0)" class="selected pointer nucleos-item2 white-t">Sedentarismo</li>
                  
                  <li @click="menu($event, 1)" class="pointer nucleos-item2 white-t">Desalinhamento da coluna</li>
                  <li @click="menu($event, 2)" class="pointer nucleos-item2 white-t">Má circulação</li>
                    
                    

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