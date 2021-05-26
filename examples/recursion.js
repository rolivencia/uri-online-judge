const likes = (names) => {
    // Caso base, sin nombres
    if(!!names && names.length === 0 ) {
        return 'no one likes this, JA';
    }
    // Caso base de un solo nombre, para el final de la sentencia
    if(names.length === 1) {
        const lastOrOnlyName = [].concat(names).pop();
        return `${lastOrOnlyName} likes this.`;
    }
    // Caso de dos nombres - "and" en el medio;
    if(names.length === 2) {
        const slicedNames = names.slice(1);
        return `${names.slice(0,1)} and ${likes(slicedNames)}`;
    }
    // Caso general/recursivo (más de dos nombres) - agrego comas al final de cada nombre
    const slicedNames = names.slice(1);
    return `${names.slice(0,1)}, ${likes(names.slice(1))}`;
}

console.log(likes(["Peter", "Carlitos", "Tomás"]));
// console.log(likes(["Peter", "Carlitos", "Tomás", "Pepe"]));
// console.log(likes([])); // no one likes this, JA
// console.log(likes(['Hernán'])); // Peter likes this.
// console.log(likes(["Peter", "Carlitos"])); // Peter likes this.



