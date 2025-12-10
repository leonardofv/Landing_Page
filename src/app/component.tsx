'use client';
import { useEffect } from "react"

export function ErrorComponent() {
    
    useEffect(() => {
        throw new Error('Componente lançando erro');
    },[]);

    return (
        <h2>Error Component</h2>
    )
}