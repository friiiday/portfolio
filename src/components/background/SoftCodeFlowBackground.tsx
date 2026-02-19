import React, { useMemo } from "react";
import "./SoftCodeFlowBackground.css";
import data from "../../data/code_snippets.json";

interface CodeSnippetFile { 
    snippets: string[]; 
}

export const SoftCodeFlowBackground: React.FC = () => {

    const file = data as CodeSnippetFile
    const codeSnippets: string[] = file.snippets

    const colors = [
        "#aa0e0e",
        "#b02c2c",
        "#0ec742",
        "#0ec73c",
        "#d1d40e",
    ];

    const snippetStyles = useMemo(() => {
        const positions: { left: number; top: number }[] = []
        const minDistance = 12

        const isTooClose = (x: number, y: number) =>
        positions.some((p) => {
            const dx = p.left - x
            const dy = p.top - y
            return Math.sqrt(dx * dx + dy * dy) < minDistance
        });

        return codeSnippets.map(() => {
        let left = 0
        let top = 0

        do {
            left = Math.random() * 80 + 5
            top = Math.random() * 80 + 5
        } while (isTooClose(left, top))

        positions.push({ left, top })

        const direction = Math.random() > 0.5 ? 1 : -1
        const color = colors[Math.floor(Math.random() * colors.length)]
        const color2 = colors[Math.floor(Math.random() * colors.length)]

        return {
                left: `${ left }%`,
                top: `${ top }%`,
                delay: `${ Math.random() * 10 }s`,
                driftX: Math.random() * 40 - 10,
                driftY: direction * (Math.random() * 200 + 250),
                duration: Math.random() * 30 + 80,
                rotation: Math.random() * 6 - 3,
                parallax: Math.random() * 0.8 + 0.6,
                gradient: `linear-gradient(135deg, ${ color }, ${ color2 })`,
                fontSize: Math.random() * 25 - 10,
            }
        })
    }, [codeSnippets])

    return (
        <div className="code-flow-bg">
        {
            codeSnippets.map((snippet, i) => (
                <div
                key={ i }
                className="code-snippet"
                style={{
                    left: snippetStyles[i].left,
                    top: snippetStyles[i].top,
                    animationDelay: snippetStyles[i].delay,
                    "--drift-x": `${ snippetStyles[i].driftX * snippetStyles[i].parallax }%`,
                    "--drift-y": `${ snippetStyles[i].driftY * snippetStyles[i].parallax }%`,
                    "--duration": `${ snippetStyles[i].duration / snippetStyles[i].parallax }s`,
                    "--rotation": `${ snippetStyles[i].rotation }deg`,
                    "--gradient": snippetStyles[i].gradient,
                    fontSize: snippetStyles[i].fontSize,
                } as React.CSSProperties}
                >
                <pre>{ snippet }</pre>
                </div>
            ))
        }
        </div>
    );
};
