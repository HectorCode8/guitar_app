import {useRouter} from 'next/router'

const EntradaBlog = () => {
    const router = useRouter()
  return (
    <div>
        <h1>Desde Entrada Blog</h1>
    </div>
  )
}

export async function getServerSideProps() {
    return{
        props: {
            
        }
    }
}

export default EntradaBlog