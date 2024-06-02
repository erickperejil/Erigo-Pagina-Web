'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faHelmetSafety, faCompassDrafting,faClipboardCheck, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const servicios = [
  {
    titulo: "Consultoría de proyectos",
    descripcion: "Ofrecemos asesoramiento técnico especializado para el diseño y planificación de proyectos civiles, desde la conceptualización, descripción de actividades a ejecutarse, presupuesto de obra y hasta la elaboración de los planos y especificaciones técnicas. También brindamos apoyo en la selección de materiales, tecnologías y procesos constructivos más adecuados para cada proyecto."
  },
  {
    titulo: "Supervisión de obras",
    descripcion: "Nos encargamos de la supervisión técnica, administrativa y financiera de los proyectos civiles en todas sus etapas, asegurando que se cumplan los plazos, presupuestos y estándares de calidad requeridos."
  },
  {
    titulo: "Construcción de obras civiles",
    descripcion: " somos especialistas en la construcción de obras civiles de todo tipo, desde pequeñas infraestructuras hasta grandes proyectos urbanos e industriales, ofreciendo soluciones integrales y personalizadas para cada cliente."
  },
  {
    titulo: "Diseño y planificación",
    descripcion: "contamos con un equipo altamente capacitado para el diseño y planificación de proyectos civiles, utilizando tecnologías de última generación para garantizar la calidad y eficiencia en cada etapa del proyecto."
  }
  ]

const serviciosIconos = [
  <FontAwesomeIcon className={styles.iconoService} icon={faHelmetSafety}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faCompassDrafting}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faPersonChalkboard}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faClipboardCheck}  style={{ color: "#065569" }} />,
];

const serviciosIconosHover = [
  <FontAwesomeIcon className={styles.iconoService} icon={faHelmetSafety} bounce style={{ color: "#EDAA25" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faCompassDrafting} bounce style={{ color: "#EDAA25" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faPersonChalkboard} bounce style={{ color: "#EDAA25" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faClipboardCheck} bounce style={{ color: "#EDAA25" }} />,
];
  

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.tituloNav}>
        <div className={styles.tituloLogo}>
          <Image
            src="/img/Erigo-logo.png"
            alt="Erigo Logo"
            className={styles.erigoLogo}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={styles.tituloTitulo}>
          <h2>ERIGO INGENIERIA</h2>
        </div>
        <div className={styles.navSegmentos}>
          <div className={styles.segmento}>
            <h4 className={styles.segmentoTexto}>Sobre Nosotros</h4>
          </div>
          <div className={styles.segmento}>
            <h4 className={styles.segmentoTexto}>Nuestros Proyectos</h4>
          </div>
          <div className={styles.segmento}>
            <h4 className={styles.segmentoTexto}>De Interés</h4>
          </div>
          <div className={styles.segmento}>
            <h4 className={styles.segmentoTexto}>Contáctanos</h4>
          </div>
        </div>
      </nav>

      <section className={styles.vistaPrincipal}>
        <div className={styles.imagenFondo}>
          <div className={styles.fondoFilter}></div>
        </div>
        <div className={styles.cardIntroduccion}>
          <h1 className={styles.introduccionTexto}>
            Somos una empresa consultora, supervisora y constructora de diversas obras civiles, con mucha experiencia en el mercado.
          </h1>
        </div>
        <div className={styles.introduccionFlecha}>
          <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronLeft} fade />
        </div>
        <div className={styles.introduccionFlechaDerecha}>
          <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronRight} fade />
        </div>
        <div className={styles.mainFooter}></div>
      </section>

      <div className={styles.vistaDato}>
        <div className={styles.datoFooter}></div>
        <div className={styles.datoLeft}><h2 className={styles.introduccionTexto} style={{fontSize:'35px'}}>Desde su fundación, hemos trabajado en una gran variedad de proyectos, desde pequeñas obras de construcción hasta grandes infraestructuras, nos comprometemos con la excelencia y la satisfacción del cliente. </h2> <br /> <h2 className={styles.introduccionTexto} style={{fontSize:'50px'}}>Juntos construimos el futuro</h2></div>
      </div>

      <div className={styles.vista2}>
        <div className={styles.vista2Titulo}>
          <h1 className={styles.tituloVista2}>Nuestros Servicios</h1>
        </div>
        <div className={styles.vista2Servicios}>
          <div className={styles.serviciosIconos}></div>
          <div className={styles.vista2ServiciosFila}>
            {servicios.map((servicio, index) => (
              <div className={styles.servicioContenedor}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.servicioIcono}>
                  {hoveredIndex === index ? serviciosIconosHover[index] : serviciosIconos[index]}
                </div>
                <div key={index} className={styles.vista2Servicio}>
                  <div className={styles.servicioImagen}>
                    <div className={styles.servicioImagenSombra}>
                      <div className={styles.servicioDescripcion} style={{
                        height: hoveredIndex === index ? '100%' : '100%',
                        transition: 'height 1s',
                      }}>
                        <div style={{ height: hoveredIndex === index ? '12%' : '90%', transition: 'height 1s' }}></div>
                        <h2 className={styles.descripcionH2} style={{ height: hoveredIndex === index ? '10%' : '0%', transition: 'height 1s' }}>{servicio.titulo}</h2>
                        <br />
                        <h3 className={styles.descripcionH3} style={{marginTop: hoveredIndex === index ? (index === 2 ? '5%' : '-10px') : '30px', height: hoveredIndex === index ? '78%' : '0%', transition: 'margin-top 1s, height 1s' }}>
                          {servicio.descripcion}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
