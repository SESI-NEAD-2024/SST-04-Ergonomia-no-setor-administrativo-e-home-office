import{onMounted,nextTick}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){return onMounted(()=>{function a(e){e.preventDefault();e=e.target.getAttribute("href"),e=document.querySelector(e).offsetTop;window.scroll({top:e-120,behavior:"smooth"})}document.querySelectorAll(".sidenav a[href^='#']").forEach(e=>{e.addEventListener("click",a)}),nextTick(()=>{var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{})})}),{}},template:`

  <ul id="slide-out" class="sidenav">
    <li class="mb-24">
      <div class="user-view">
        <img src="src/img/core/logo-sesi-vida.webp" alt="logo-sesi-vida" style="max-width: 120px;"/>
        <p class=" blue-deep-text">Segurança e saúde no trabalho</p>
        <h2 class="sidenav__specific-title">
        Ergonomia no setor administrativo e Home Office 
        </h2>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div> 
          <h3>
            <span class="progress-box__number">1%</span> concluído
          </h3>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: Início</a>
    </li>
    <li>
      <a href="#introducao">02: Introdução</a>
    </li>
    <li>
      <a href="#postura">03: Postura</a>
    </li>
    <li>
      <a href="#cadeira">04: A cadeira</a>
    </li>
    <li>
      <a href="#computador">05: Uso do computador</a>
    </li>
    <li>
    <a href="#telefone">06: Uso do telefone e celular</a>
  </li>
  <li>
  <a href="#remoto">07: Postura e trabalho remoto</a>
</li>
<li>
  <a href="#qualidade">08: Qualidade de vida no trabalho</a>
</li>
<li>
  <a href="#finalizar">09: Para finalizar...</a>
</li>
<li>
  <a href="#referencias">10: Referências</a>
</li>
    <li>
      <a href="#concluir">11: Conclusão</a>
    </li>
    
  </ul>
  `};