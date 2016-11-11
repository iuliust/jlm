let labelCache: {[label: string]: boolean} = {};

export function label<T>(etiquette: T | ''): T {
    if (labelCache[<string> etiquette]) {
        throw new Error(`Le type d'action "${etiquette}" n'est pas unique"`);
    }

    labelCache[<string>etiquette] = true;

    return <T>etiquette;
}
