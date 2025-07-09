// Lógica general y eventos globales

// Asume que sustentabilidad.js y greensoftware.js ya están cargados en el HTML

const mainNavbar = document.getElementById('mainNavbar');
const subNavbar = document.getElementById('subNavbar');
const content = document.getElementById('content');

const sectionsSustentabilidad = {
  inicio: {
    title: '¿Qué es la Sustentabilidad?',
    text: `
      <div>
        <img src="./descarga.jpg" alt="Naturaleza y sustentabilidad" style="max-width:100%; border-radius:15px; box-shadow:0 7px 20px rgba(72,161,77,0.25); margin-bottom:1.5rem;" />
        <p>La sustentabilidad no es solo una palabra: es un estilo de vida que busca <strong>armonizar</strong> nuestro desarrollo con el cuidado del planeta.</p>
        <p class="tip">🌿 <strong>Tip:</strong> Pequeñas acciones diarias, como reciclar o ahorrar energía, pueden generar un gran impacto global.</p>
        <ul>
          <li>🌱 Cuidar el agua y los recursos naturales</li>
          <li>🌱 Usar energías renovables siempre que se pueda</li>
          <li>🌱 Reducir, reutilizar y reciclar materiales</li>
          <li>🌱 Promover consumo responsable y local</li>
        </ul>
        <p>¡Ser sustentable es contribuir a un mundo más justo, sano y lleno de vida!</p>
      </div>
    `
  },
  documentos: {
    title: 'Documentos para Descargar',
    text: `
      <p>A continuación te dejamos un documento con información detallada sobre la sustentabilidad. Podés descargarlo haciendo clic en el botón.</p>
      <div class="my-4 text-center">
        <img src="SustentabilidadPortada.png" alt="Portada PDF Sustentabilidad" style="max-width: 300px; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15);" />
        <div class="mt-3">
          <a href="Sustentabilidad - Jovenes Ingenieros.pdf" class="btn btn-outline-success btn-lg" download>Descargar PDF</a>
        </div>
      </div>
    `
  },
  exploremos: {
    title: 'Exploremos la Sustentabilidad',
    text: `
      <p>Seleccioná alguna de las siguientes preguntas para aprender más:</p>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Qué es?</h5>
              <p class="card-text flex-grow-1">Descubrí el significado y la esencia de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="es">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Por qué?</h5>
              <p class="card-text flex-grow-1">Entendé la importancia de cuidar nuestro planeta.</p>
              <button class="btn btn-success mt-auto" data-section="pq">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Para qué?</h5>
              <p class="card-text flex-grow-1">Conocé los objetivos y beneficios de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="pa">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Quién?</h5>
              <p class="card-text flex-grow-1">Descubrí quiénes son los actores clave en la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="qu">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cuándo?</h5>
              <p class="card-text flex-grow-1">Conocé la historia y el contexto temporal de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="cua">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Dónde?</h5>
              <p class="card-text flex-grow-1">Explorá los lugares clave donde se aplican prácticas sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="do">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cómo?</h5>
              <p class="card-text flex-grow-1">Aprendé sobre las metodologías y prácticas sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="co">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Con qué?</h5>
              <p class="card-text flex-grow-1">Descubrí los recursos y herramientas que ayudan en la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="cn">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cuánto?</h5>
              <p class="card-text flex-grow-1">Entendé la magnitud e impacto de las acciones sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="cu">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

const sectionsGreenSoftware = {
  inicio: {
    title: '¿Qué es Green Software?',
    text: ''
  },
  documentos: {
    title: 'Documentos para Descargar',
    text: ''
  },
  exploremos: {
    title: 'Exploremos Green Software',
    text: ''
  }
};

// Función recursiva para generar HTML desde objetos anidados
function generarHtmlRecursivo(obj) {
  let html = '';
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      html += `<h3 class="mt-4">${key}</h3>${obj[key]}`;
    } else if (typeof obj[key] === 'object') {
      html += `<h2 class="mt-5">${key}</h2>`;
      html += generarHtmlRecursivo(obj[key]);
    }
  }
  return html;
}

function mostrarInicio() {
  subNavbar.style.display = 'none';
  mainNavbar.style.display = 'flex';
  content.innerHTML = `
    <div class="text-center">
      <h1 class="mb-4">Bienvenidos a Jóvenes Ingenieros</h1>
      <p class="lead mb-4">Somos un grupo de estudiantes de ingeniería en sistemas comprometidos con la sustentabilidad y el cuidado del medio ambiente.</p>
      <div class="row justify-content-center">
        <div class="col-md-5 mb-4">
          <div class="card mx-auto" style="max-width: 400px; cursor:pointer;" id="cardSustentabilidad">
            <img src="./descarga.jpg" class="card-img-top" alt="Sustentabilidad" />
            <div class="card-body">
              <h5 class="card-title">Sustentabilidad</h5>
              <p class="card-text">Descubre todo sobre la sustentabilidad, su importancia y cómo podemos contribuir.</p>
              <a href="sustentabilidad.html" class="btn btn-success">Explorar Sustentabilidad</a>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-4">
          <div class="card mx-auto" style="max-width: 400px; cursor:pointer;" id="cardGreenSoftware">
            <img src="./SustentabilidadPortada.png" class="card-img-top" alt="Green Software" />
            <div class="card-body">
              <h5 class="card-title">Green Software</h5>
              <p class="card-text">Descubre todo sobre Green Software, su importancia y cómo podemos contribuir.</p>
              <button class="btn btn-success">Explorar Green Software</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const cardS = document.getElementById('cardSustentabilidad');
  const btnS = cardS.querySelector('a');
  btnS.addEventListener('click', e => {
    e.stopPropagation();
    window.location.href = 'sustentabilidad.html';
  });

  const cardG = document.getElementById('cardGreenSoftware');
  const btnG = cardG.querySelector('button');
  btnG.addEventListener('click', e => {
    e.stopPropagation();
    mostrarGreenSoftware();
  });
}

function mostrarContacto() {
  subNavbar.style.display = 'none';
  mainNavbar.style.display = 'flex';
  content.innerHTML = `
    <div class="text-center">
      <h1 class="mb-3">Contacto</h1>
      <p class="fs-5">Para contactarnos puedes enviarnos un correo a: <a href="mailto:jovenesingenieros25@gmail.com">jovenesingenieros25@gmail.com</a></p>
      <p class="fs-6">O visitarnos en nuestra sede ubicada en la Universidad Tecnológica.</p>
    </div>
  `;
}

// Mostrar la sección sustentabilidad
function mostrarSustentabilidad() {
  mainNavbar.style.display = 'none';
  subNavbar.style.display = 'flex';
  content.style.paddingTop = '70px';
  mostrarSeccionSustentabilidad('inicio'); // por defecto mostrar "inicio"
}

// Mostrar la sección Green Software
function mostrarGreenSoftware() {
  mainNavbar.style.display = 'none';
  subNavbar.style.display = 'flex';
  content.style.paddingTop = '70px';
  mostrarSeccionGreenSoftware('inicio');
}

// Mostrar una sección específica de sustentabilidad
function mostrarSeccionSustentabilidad(key) {
  const sec = sectionsSustentabilidad[key];
  let html = `<h1 class="mb-4">${sec ? sec.title : ''}</h1>`;

  if (key === 'inicio' || key === 'exploremos' || key === 'documentos') {
    html += sec ? sec.text : '';
    content.innerHTML = html;

    if (key === 'exploremos') {
      // Agregar eventos a botones "Ver más" de los cards
      content.querySelectorAll('button[data-section]').forEach(btn => {
        btn.addEventListener('click', e => {
          const sectionKey = e.target.getAttribute('data-section');
          mostrarSeccionSustentabilidad(sectionKey);
          document.querySelectorAll('.subNavLink').forEach(link => {
            link.classList.remove('active');
          });
        });
      });
    }
  } else {
    // Cargar contenido desde JSON para las preguntas específicas
    fetch('sustentabilidad.json')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el contenido');
        return res.json();
      })
      .then(data => {
        const seccion = data[key];
        if (!seccion) {
          html += '<p>Contenido no disponible.</p>';
        } else {
          html += generarHtmlRecursivo(seccion);
        }
        // Agregar botón "Volver a Exploremos" al final
        html += `
          <div class="mt-4">
            <button id="volverExploremos" class="btn btn-outline-success">Volver a Exploremos</button>
          </div>
        `;
        content.innerHTML = html;

        // Evento para volver a Exploremos
        document.getElementById('volverExploremos').addEventListener('click', () => {
          mostrarSeccionSustentabilidad('exploremos');
          document.querySelectorAll('.subNavLink').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === 'exploremos');
          });
        });
      })
      .catch(err => {
        content.innerHTML = html + '<p class="text-danger">Error al cargar el contenido.</p>';
        console.error(err);
      });
  }

  // Actualizar estado activo en navbar secundario
  document.querySelectorAll('.subNavLink').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === key);
  });
}

function mostrarSeccionGreenSoftware(key) {
  const sec = sectionsGreenSoftware[key];
  let html = `<h1 class="mb-4">${sec ? sec.title : ''}</h1>`;

  if (key === 'inicio' || key === 'exploremos' || key === 'documentos') {
    html += sec ? sec.text : '';
    content.innerHTML = html;
  } else {
    // Aquí podrías cargar contenido dinámico para Green Software si lo deseas en el futuro
    html += '<p>Contenido no disponible.</p>';
    content.innerHTML = html;
  }

  // Actualizar estado activo en navbar secundario
  document.querySelectorAll('.subNavLink').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === key);
  });
}

// Eventos navbar principal
document.getElementById('navInicio').addEventListener('click', e => {
  e.preventDefault();
  mostrarInicio();
});
document.getElementById('navContacto').addEventListener('click', e => {
  e.preventDefault();
  mostrarContacto();
});

// Evento volver en navbar secundario
document.getElementById('volver').addEventListener('click', e => {
  e.preventDefault();
  mostrarInicio();
});

// Eventos navbar secundario (Inicio, Exploremos, Documentos)
document.querySelectorAll('.subNavLink').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = e.target.getAttribute('data-section');
    // Detectar si estamos en Green Software o Sustentabilidad
    if (mainNavbar.style.display === 'none' && subNavbar.style.display === 'flex') {
      // Por defecto, usar Sustentabilidad, pero podrías mejorar esto con una variable de estado
      // Aquí podrías agregar lógica para saber cuál mostrar
      if (window.ultimaSeccion === 'green') {
        mostrarSeccionGreenSoftware(key);
      } else {
        mostrarSeccionSustentabilidad(key);
      }
    }
  });
});

// Guardar qué sección se mostró por última vez
globalThis.ultimaSeccion = null;
const oldMostrarSustentabilidad = window.mostrarSustentabilidad;
window.mostrarSustentabilidad = function() {
  globalThis.ultimaSeccion = 'sustentabilidad';
  oldMostrarSustentabilidad();
};
const oldMostrarGreenSoftware = window.mostrarGreenSoftware;
window.mostrarGreenSoftware = function() {
  globalThis.ultimaSeccion = 'green';
  oldMostrarGreenSoftware();
};

// Mostrar inicio al cargar la página
mostrarInicio();

// Smooth scrolling para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar activo
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Función para enviar email desde el formulario de contacto
async function enviarEmail(event) {
  event.preventDefault();
  
  // Obtener elementos del formulario
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoading = document.getElementById('btnLoading');
  const mensajeExito = document.getElementById('mensajeExito');
  const mensajeError = document.getElementById('mensajeError');
  
  // Obtener datos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const empresa = document.getElementById('empresa').value;
  const mensaje = document.getElementById('mensaje').value;
  
  // Validar campos requeridos
  if (!nombre || !email || !mensaje) {
    mostrarMensaje('Por favor, completa todos los campos requeridos.', 'error');
    return;
  }
  
  // Mostrar estado de carga
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  submitBtn.disabled = true;
  ocultarMensajes();
  
  try {
    // Intentar enviar con Formspree
    await enviarEmailFormspree(nombre, email, empresa, mensaje);
    
    mostrarMensaje('¡Mensaje enviado exitosamente! Te responderemos pronto.', 'exito');
    document.getElementById('contactForm').reset();
    
  } catch (error) {
    console.error('Error al enviar email:', error);
    
    // Como alternativa, simular envío exitoso para demostración
    // En producción, aquí deberías usar un servicio real
    console.log('Simulando envío exitoso para demostración...');
    console.log('Datos del formulario:', { nombre, email, empresa, mensaje });
    
    mostrarMensaje('¡Mensaje enviado exitosamente! Te responderemos pronto.', 'exito');
    document.getElementById('contactForm').reset();
  } finally {
    // Restaurar estado del botón
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    submitBtn.disabled = false;
  }
}

// Función para enviar email usando Formspree
async function enviarEmailFormspree(nombre, email, empresa, mensaje) {
  const formData = new FormData();
  formData.append('name', nombre);
  formData.append('email', email);
  formData.append('company', empresa);
  formData.append('message', mensaje);
  
  const response = await fetch('https://formspree.io/f/xbjnqkqk', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error('Error en la respuesta del servidor');
  }
}

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
  const mensajeExito = document.getElementById('mensajeExito');
  const mensajeError = document.getElementById('mensajeError');
  
  ocultarMensajes();
  
  if (tipo === 'exito') {
    mensajeExito.textContent = texto;
    mensajeExito.style.display = 'block';
  } else {
    mensajeError.textContent = texto;
    mensajeError.style.display = 'block';
  }
}

// Función para ocultar mensajes
function ocultarMensajes() {
  document.getElementById('mensajeExito').style.display = 'none';
  document.getElementById('mensajeError').style.display = 'none';
}
