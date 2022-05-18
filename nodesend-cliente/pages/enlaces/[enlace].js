import Layout from "../../components/Layout";
import clienteAxios from "../../config/axios";

export async function getServerSideProps({params}) {
    const {enlace} = params;
    //Camps almacenats a sa BD
    const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);

    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    //Routing
    const enlaces = await clienteAxios.get('/api/enlaces');
    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: { enlace : enlace.url}
        })),
        fallback: false
    }
}
export default ({enlace}) => {
    console.log(enlace)
    
    return (
        <Layout>
            <h1>Desde enlace</h1>
        </Layout>
    )
}