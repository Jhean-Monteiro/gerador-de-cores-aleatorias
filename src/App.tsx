// raiz
// conect a hook ao componente

import React from "react";
import { useRandomColor } from "./hooks/useRandomColor";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";

export const App: React.FC = () => {
    // Hook retorna os dados e a função de gerar
    const {color, textColor, generate} = useRandomColor();

    React.useEffect(() => {
        document.title = color.toUpperCase();
    }, [color]);

    return (
        <ColorDisplay 
            color={color}
            textColor={textColor}
            onGenerate={generate}
        />
    )
}