['wmre-nav','wmre-footer'].forEach(async tag=>{
  let html = await (await fetch(tag+'.html')).text();
  let div = document.createElement('div');
  div.innerHTML = html;

  customElements.define(tag, class extends HTMLElement{
    constructor(){
      super();

      this.attachShadow({mode:'open'}).append(...div.children)
    }
  });
})