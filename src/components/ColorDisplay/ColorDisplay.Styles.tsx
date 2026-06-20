// estilos:
// conceito: props dinâmicas no styled component
// mudam o css em tempo real conforme o estado muda

import styled from "styled-components";

// props que vêm do componente pai
// $ no prefixo: convenção para não vazar pro DOM HTML
interface WrapperProps {
    $bg: string; // cor de fundo
    $text: string; // cor do texto (preto ou branco)
}

// o fundo inteiro da tela muda de cor
// conceito: transição CSS no styled component
export const Wrapper = styled.div<WrapperProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    /* props dinâmicas: a função recebe as props e retorna o valor */
    background-color: ${({$bg}) => $bg};
    color: ${({$text}) => $text};

    /* transição suave entre cores */
    transition: background-color 0.4s ease, color 0.3s ease;
`;

// exibe o código hex da cor atual
export const HexCode = styled.p`
    font-family: "JetBrains Mono", "Courier New", monospace;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`;

// label menor acima do hex
export const Label = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    opacity: 0.6;
`;

// Botão de gerar nova cor
export const Button = styled.button<{ $text: string }>`
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    border-radius: 999px;
    border: 2px solid ${({ $text }) => $text};
    background: transparent;
    color: ${({ $text }) => $text};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        /* inverte fundo e texto no hover */
        background: ${({$text}) => $text};
        /* quando o $text é branco, o fundo do hover fica branco
            e o texto precisa ser escuro - usamos "revert" via filter */
        filter: invert(0);
        color: ${({$text}) => ($text === "#ffffff" ? "#111111" : "#ffffff")};
    }

    &:active {
        transform: scale(0.97);
    }
`;