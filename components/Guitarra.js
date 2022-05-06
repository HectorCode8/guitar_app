import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({guitarra}) => {
    const {descripcion, imagen, nombre, precio, url} = guitarra
  return (
    <div>
       <Image 
            layout='responsive' 
            width={500} 
            height={350} 
            src={imagen.url} 
            alt={`Imagen Guitarra ${nombre}`} 
            priority={true}
        />
        <div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <Link href={`/guitarras/${url}`}>
                <a>Ver detalles</a>
            </Link>
        </div>
    </div>
  )
}

export default Guitarra