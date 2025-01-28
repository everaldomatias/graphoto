'use client'

import { useEffect, useState } from "react"
import Head from "next/head"
import { fetchSiteInfo } from "@/lib/fetchSiteInfo"

export default function DynamicHead() {
    const [siteName, setSiteName] = useState("Carregando...")

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchSiteInfo()
                setSiteName(data.name)
            } catch (error) {
                console.error("Erro ao buscar informações do site:", error)
                setSiteName("Erro ao carregar")
            }
        }

        fetchData()
    }, [])

    return (
        <Head>
            <title>{siteName}</title>
        </Head>
    )
}
