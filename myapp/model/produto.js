export default class produto{
    #id //# = propriedade privada.
    #nome
    #preco

    constructor(nome,id, preco){
        this.#nome = nome;
        this.#id = id;
        this.#preco = preco;
    }

    get nome(){
        return this.#nome;
    }

    get id(){ 
        return this.#id;
    }

    get preco(){
        return this.#preco;
    }

    

}

