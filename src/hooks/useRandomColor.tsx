// HOOk - useRandomColor.ts
// Gera cores aleatórias e calcula se o texto deve ser preto ou branco dependendo do fundo

import {useState, useCallback} from "react";

// Gera um canal hex de 2 dígitos (ex: a3)
const randomChannel = (): string => 
    Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");

// Monta a cor completa: "#a3f2c1"
const generateHex = (): string =>
    `#${randomChannel()}${randomChannel()}${randomChannel()}`;

// decide se o texto deve ser preto ou branco com base na luminância percebida da cor de fundo.
// Fórmula padrão de accessibilidade (WCAG).
const getTextColor = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#111111" : "#ffffff";
};

export function useRandomColor() {
    // useState com valor inicial já gerado
    // conceito: função como valor inicial do useState - roda só uma vez
    const [color, setColor] = useState<string>(() => generateHex());
    
    // useCallback para não recriar a função a cada render
    const generate = useCallback(() => {
        setColor(generateHex());
    }, []);

    const textColor = getTextColor(color);

    return {color, textColor, generate}
}
