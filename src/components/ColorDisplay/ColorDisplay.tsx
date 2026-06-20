// componente - ColorDisplay.tsx
// recebe a cor via props e exibe tudo
// conceito: componente "burro" - só exibe, não decide nada.

import React from "react";
import {Wrapper, HexCode, Label, Button} from "./ColorDisplay.Styles"

// interface de props - contrato entre pai e filho
interface ColorDisplayProps {
    color: string; // ex: "#a3f2c1"
    textColor: string; // "#111111" ou "#ffffff"
    onGenerate: () => void; 
}

// React.FC<Props> = componente funcional com props tipadas
const ColorDisplay: React.FC<ColorDisplayProps> = ({
    color,
    textColor,
    onGenerate,
}) => {
    return (
        // props dinâmicas passadas ao styled component
        <Wrapper $bg={color} $text={textColor}>
            <Label>Cor atual</Label>

            {/* exibe o código hex em maiúsculas */}
            <HexCode>{color.toUpperCase()}</HexCode>

            <Button $text={textColor} onClick={onGenerate}>
                gerar nova cor
            </Button>
        </Wrapper>
    )
}

export default ColorDisplay