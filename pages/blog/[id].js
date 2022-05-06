import {useRouter} from 'next/router'

const EntradaBlog = ({entrada}) => {
    const router = useRouter()
  return (
    <div>
        <h1>Desde Entrada Blog</h1>
    </div>
  )
}

export async function getStaticPaths() {

}

export async function getStaticProps({query: {id}}) {
    const url = `http://localhost:1337/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return{
        props: {
            entrada
        }
    }
}


// export async function getServerSideProps({query: {id}}) {

//     const url = `http://localhost:1337/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     return{
//         props: {
//             entrada
//         }
//     }
// }

export default EntradaBlog