import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout =  ({ children, pagina }) => {
  return (
    <div>
        <Head>
            <title> Guitar App - {pagina} </title>
            <meta 
                name="description" 
                content="Sitio Web de venta de guitarras" />
        </Head>
        <Header/>
        
        {children}

        <Footer/>
    </div>
  )
}

export default Layout