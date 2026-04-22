// Pequeñas interacciones: menú móvil, formulario simulado y año dinámico.
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', ()=> {
  nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'block';
  // estilo simple para móviles
  if(window.innerWidth < 700){
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.5rem';
    nav.style.padding = '0.5rem 0';
  }
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  status.textContent = 'Enviando...';
  // Simular envío - aquí conecta con tu backend o servicio de correo
  setTimeout(()=>{
    status.textContent = 'Gracias. Hemos recibido su mensaje y nos pondremos en contacto pronto.';
    form.reset();
  }, 900);
});
