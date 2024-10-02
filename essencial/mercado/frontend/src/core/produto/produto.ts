import Especificacoes from './especificacoes'
import Precificavel from './precificavel'

export default interface Produto extends Precificavel {
    // Aqui o ideal seria criar as regras de negócios 
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    nota: number
    videoReview: string
    tags: string[]
    especificacoes: Especificacoes
}

// Exemplo criar uma outra entidade separada para colocar estatisticas do produto(nota, quantidade de reviews...)  