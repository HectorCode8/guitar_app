import Link from 'next/link'
import styles from '../styles/header.module.css'
import Image from 'next/image'

const Header = ({guitarra}) => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
           <div className={styles.barra}>
            <Link href="/">
              <a>
                <Image width={400} height={100} src="/img/logo.svg" alt='logo' />
              </a>
              </Link>

            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/tienda">Tienda</Link>
            </nav>
           </div>

          {guitarra && (
            <div className={styles.modelo}>
              <h2>Model {guitarra.nombre}</h2>
              <p>{guitarra.descripcion}</p>
              <p className={styles.precio}>${guitarra.precio}</p>
              <Link href={`/guitarras/${guitarra.url}`}>
                <a className={styles.enlace}>
                  Ver Producto
                </a>
              </Link>
            </div>
          )}
        </div>
    </header>
  )
}

export default Header