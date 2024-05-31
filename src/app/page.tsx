'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Aleo } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



const aleo = Aleo({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  // return (
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <p>
  //         Comenzando a programar en react;
  //         <code className={styles.code}> texto con estilo en negrita</code>
  //       </p>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className={styles.grid}>
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Learn <span>-&gt;</span>
  //         </h2>
  //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p>Explore starter templates for Next.js.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // );
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Aquí puedes realizar cualquier acción cuando se hace hover
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Aquí puedes realizar cualquier acción cuando se deja de hacer hover
    console.log('Mouse left');
  };

  return(
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
            <h4 className={styles.segmentoTexto}>De Interes</h4>
          </div>

          <div className={styles.segmento}>
            <h4 className={styles.segmentoTexto}>Contactanos</h4>
          </div>
        </div>


    </nav>


    
    <section className={styles.vistaPrincipal}>

      <div className={styles.imagenFondo}>
        <div className={styles.fondoFilter}>

        </div>
      </div>

      <div className={styles.cardIntroduccion}>
        <h1 className={styles.introduccionTexto}>
        Somos una empresa consultora, supervisora y constructora de diversas obras civiles, con
        mucha experiencia en el mercado. 
        </h1>
      </div>

      <div className= {styles.introduccionFlecha}>
        <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronLeft} fade />
      </div>

      <div className= {styles.introduccionFlechaDerecha}>
        <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronRight} fade />
      </div>

      <div className={styles.mainFooter}>

      </div>

    </section>
    
    <div className={styles.vista2}>
        <div className={styles.vista2Titulo}>
          <h1 className={styles.tituloVista2}>Nuestros Servicios</h1>
        </div>

        <div className={styles.vista2Servicios}>

          <div className={styles.vista2ServiciosFila}>
            <div className={styles.vista2Servicio}>
              <div className={styles.servicioImagen}>
                <div className={styles.servicioImagenSombra} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className={styles.servicioDescripcion}>
                    <br />
                    <h2 className={styles.descripcionH2}>Servicio Nombre</h2>
                    <br />
                    <h3 className={styles.descripcionH3}> ofrecemos asesoramiento técnico especializado para el
                                                          diseño y planificación de proyectos civiles, desde la conceptualización, descripción
                                                          de actividades a ejecutarse, presupuesto de obra y hasta la elaboración de los planos
                                                          y especificaciones técnicas. También brindamos apoyo en la selección de materiales,
                                                          tecnologías y procesos constructivos más adecuados para cada proyecto.
                    </h3>
                  </div>
                </div>
              </div>
              
            </div>
            <div className={styles.vista2Servicio}></div>
            <div className={styles.vista2Servicio}></div>
          </div>

          <div className={styles.vista2ServiciosFila}>
            <div className={styles.vista2Servicio}></div>
            <div className={styles.vista2Servicio}></div>
            <div className={styles.vista2Servicio}></div>
          </div>

        </div>
    </div>
    </main>

  );

}
