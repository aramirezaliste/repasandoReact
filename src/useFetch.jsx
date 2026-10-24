//Custom hook para hacer fetch, tiene que comenzar con use
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    {/*json() transforma el json en una javascript object */ }
    {/*.ok es parte de la respuesta puede ser true o false */ }
    {/* La logica es crear un error si no hay unfetch correcto y
     que despues lo capture el catch */ }

    useEffect(() => {
        //Funcion para abortar fetch en caso de cambio rapido de url
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('No se pudo obtener la informacion')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    //console.log(e.message)
                    setIsPending(false)
                    setError(e.message)
                }

            })

        return () => abortCont.abort()
    }, [url])

    return { data, isPending, error }
}

export default useFetch;