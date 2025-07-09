// Lógica específica para Green Software

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

function mostrarGreenSoftware() {
  mainNavbar.style.display = 'none';
  subNavbar.style.display = 'flex';
  content.style.paddingTop = '70px';
  mostrarSeccionGreenSoftware('inicio');
}

function mostrarSeccionGreenSoftware(key) {
  const sec = sectionsGreenSoftware[key];
  let html = `<h1 class=\"mb-4\">${sec ? sec.title : ''}</h1>`;

  if (key === 'inicio' || key === 'exploremos' || key === 'documentos') {
    html += sec ? sec.text : '';
    content.innerHTML = html;
  } else {
    html += '<p>Contenido no disponible.</p>';
    content.innerHTML = html;
  }

  document.querySelectorAll('.subNavLink').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === key);
  });
}

// Variables globales
let contenidoJSON = null;
let seccionActual = null;

// Función para cargar el contenido JSON
async function cargarContenidoJSON() {
  try {
    const response = await fetch('./greensoftware.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    contenidoJSON = await response.json();
    console.log('Contenido JSON cargado exitosamente');
  } catch (error) {
    console.error('Error al cargar el contenido JSON:', error);
    mostrarError('Error al cargar el contenido. Por favor, intenta nuevamente.');
  }
}

// Función para mostrar secciones específicas
async function mostrarSeccion(seccion) {
  try {
    // Si no tenemos el contenido JSON, lo cargamos
    if (!contenidoJSON) {
      await cargarContenidoJSON();
    }

    // Obtener el contenido de la sección
    let contenidoSeccion = null;
    if (contenidoJSON.es && contenidoJSON.es[seccion]) {
      contenidoSeccion = contenidoJSON.es[seccion];
    } else if (contenidoJSON[seccion]) {
      contenidoSeccion = contenidoJSON[seccion];
    } else {
      throw new Error('Sección no encontrada');
    }

    // Ocultar la sección exploremos
    document.getElementById('exploremos').style.display = 'none';
    
    // Mostrar el contenido específico
    mostrarContenidoSeccion(seccion, contenidoSeccion);
    
  } catch (error) {
    console.error('Error al mostrar la sección:', error);
    mostrarError('Error al cargar el contenido de la sección. Por favor, intenta nuevamente.');
  }
}

// Función para mostrar el contenido de una sección específica
function mostrarContenidoSeccion(seccion, contenidoSeccion) {
  // Crear el HTML para mostrar el contenido
  let html = `
    <section class="container my-5" id="contenido-seccion">
      <div class="row text-center mb-5">
        <div class="col-12">
          <button class="btn btn-outline-info mb-4" onclick="volverAExploremos()">
            ← Volver a Exploremos
          </button>
          <h2 class="display-5 fw-bold text-info">${obtenerTituloSeccion(seccion)}</h2>
          <p class="lead">Descubre todo sobre ${obtenerTituloSeccion(seccion).toLowerCase()}</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card shadow-lg">
            <div class="card-body p-5">
  `;
  
  // Agregar el contenido de cada subsección
  for (const [key, value] of Object.entries(contenidoSeccion)) {
    if (typeof value === 'string') {
      html += `
        <div class="mb-4">
          <h4 class="text-info mb-3">${key}</h4>
          <div class="contenido-texto">
            ${value}
          </div>
        </div>
      `;
    } else if (typeof value === 'object') {
      html += `
        <div class="mb-4">
          <h4 class="text-info mb-3">${key}</h4>
          <div class="contenido-texto">
      `;
      
      for (const [subKey, subValue] of Object.entries(value)) {
        html += `
          <div class="mb-3">
            <h5 class="text-success">${subKey}</h5>
            <div class="contenido-texto">
              ${subValue}
            </div>
          </div>
        `;
      }
      
      html += `
          </div>
        </div>
      `;
    }
  }
  
  html += `
            </div>
          </div>
        </div>
      </div>
      
      <!-- Botón de volver al final -->
      <div class="row text-center mt-5">
        <div class="col-12">
          <button class="btn btn-info btn-lg" onclick="volverAExploremos()">
            ← Volver a Exploremos
          </button>
        </div>
      </div>
    </section>
  `;
  
  // Insertar el contenido después de la sección de estadísticas
  const statsSection = document.querySelector('.stats-section');
  statsSection.insertAdjacentHTML('afterend', html);
  
  // Scroll suave hacia el nuevo contenido
  document.getElementById('contenido-seccion').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Función para obtener el título de la sección
function obtenerTituloSeccion(seccion) {
  const titulos = {
    'es': '¿Qué es Green Software?',
    'pq': '¿Por qué Green Software?',
    'pa': '¿Para qué Green Software?',
    'qu': '¿Quién implementa Green Software?',
    'cua': '¿Cuándo surgió Green Software?',
    'do': '¿Dónde se aplica Green Software?',
    'co': '¿Cómo implementar Green Software?',
    'cn': '¿Con qué herramientas Green Software?',
    'cu': '¿Cuánto impacto tiene Green Software?'
  };
  return titulos[seccion] || 'Información de Green Software';
}

// Función para volver a la sección de exploración
function volverAExploremos() {
  // Ocultar el contenido específico
  const contenidoSeccion = document.getElementById('contenido-seccion');
  if (contenidoSeccion) {
    contenidoSeccion.remove();
  }
  
  // Mostrar la sección exploremos
  document.getElementById('exploremos').style.display = 'block';
  
  // Scroll suave hacia exploremos
  document.getElementById('exploremos').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Función para mostrar errores
function mostrarError(mensaje) {
  const html = `
    <section class="container my-5" id="contenido-seccion">
      <div class="row text-center mb-5">
        <div class="col-12">
          <div class="alert alert-danger">
            <h4>Error</h4>
            <p>${mensaje}</p>
          </div>
        </div>
      </div>
      
      <!-- Botón de volver al final -->
      <div class="row text-center mt-5">
        <div class="col-12">
          <button class="btn btn-info btn-lg" onclick="volverAExploremos()">
            ← Volver a Exploremos
          </button>
        </div>
      </div>
    </section>
  `;
  
  const statsSection = document.querySelector('.stats-section');
  statsSection.insertAdjacentHTML('afterend', html);
}

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

// Cargar el contenido JSON cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  cargarContenidoJSON();
}); 