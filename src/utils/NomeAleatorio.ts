import { randomBytes } from 'crypto';

export function gerarNomeAleatorio(tamanho: number = 16): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const bytes = randomBytes(tamanho);
    let resultado = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = bytes[i] % caracteres.length;
        resultado += caracteres.charAt(indice);
    }

    return resultado;
}
