//Day 969
//7 - Commenting Made Easy - https://www.codewars.com/kata/6759ced1a4ab02be3b21f29d/train/javascript
function comment(text, style) {
    switch (style) {
        case "Bash" : case "Python" : return `# ${text.replace(/\n/g, "\n# ")}`
        case "Bash Multiline"       : return `: "\n${text}\n"`
        case "JavaDoc"              : return `/**\n* ${text.replace(/\n/g, "\n* ")}\n*/`
        case "Python Multiline"     : return `"""\n${text}\n"""`
        case "Javascript"           : return `// ${text.replace(/\n/g, "\n// ")}`
        case "Javascript Multiline" : return `/*\n${text}\n*/`
        case "SGML"                 : return `<!-- ${text.replace(/\n/g, " -->\n<!-- ")} -->`
        case "SQL"                  : return `-- ${text.replace(/\n/g, "\n-- ")}`
        default                     : throw new Error("Unsupported language")
    }
}