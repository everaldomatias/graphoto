'use client';

import React, { useEffect, useState } from "react";
import { fetchSiteInfo } from "@/lib/fetchSiteInfo";
import "@/styles/components/header.scss";

export default function Header() {
    const [siteName, setSiteName] = useState<string>("Carregando...");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchSiteInfo()
                setSiteName(data.name)
            } catch (error) {
                console.error("Erro ao buscar informações do site:", error);
                setSiteName("Erro ao carregar 2");
            }
        }

        fetchData();
    }, []);

    return (
        <header className="header">
            <h1>{siteName}</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}
