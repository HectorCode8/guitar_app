import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>

            <Image layout="responsive" 
                    src='/img/nosotros.jpg' 
                    alt='Nosotros' 
                    width={600} 
                    height={450} />

            <div>
              <p>
              Suspendisse pretium tellus quis viverra luctus.
               Cras eleifend mi a ex finibus commodo.
                Donec quis nibh volutpat, rutrum tortor id, scelerisque ligula.
                 Pellentesque sed consectetur ex. Sed imperdiet egestas sapien ac congue.
                  Curabitur feugiat vel dui id ullamcorper. Morbi interdum orci purus.
                   Aenean consequat ante et enim hendrerit, eget volutpat erat interdum.
                    Vestibulum lacinia erat nisi, non ornare enim finibus et.
                     Suspendisse varius urna consectetur nunc mattis, quis bibendum tortor fermentum.
                      Nulla nec ultrices dolor. Donec dapibus sem et tortor convallis posuere.
                       Suspendisse iaculis est eget mattis pellentesque.
                        Nam porttitor sem felis, vel vestibulum est rutrum vitae.
              </p>
              <p>
              Suspendisse pretium tellus quis viverra luctus.
               Cras eleifend mi a ex finibus commodo.
                Donec quis nibh volutpat, rutrum tortor id, scelerisque ligula.
                 Pellentesque sed consectetur ex. Sed imperdiet egestas sapien ac congue.
                  Curabitur feugiat vel dui id ullamcorper. Morbi interdum orci purus.
                   Aenean consequat ante et enim hendrerit, eget volutpat erat interdum.
                    Vestibulum lacinia erat nisi, non ornare enim finibus et.
                     Suspendisse varius urna consectetur nunc mattis, quis bibendum tortor fermentum.
                      Nulla nec ultrices dolor. Donec dapibus sem et tortor convallis posuere.
                       Suspendisse iaculis est eget mattis pellentesque.
                        Nam porttitor sem felis, vel vestibulum est rutrum vitae.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros