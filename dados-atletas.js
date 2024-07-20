class Atleta{

    constructor(nome,idade,massa,altura,notas){
        this.nome = nome
        this.idade = idade
        this.massa = massa
        this.altura = altura
        this.notas = notas
    }

    obtemNomeAtleta(){
        console.log("")
        console.log("Nome: "+this.nome)
    }

    obtemIdadeAtleta(){
        console.log("Idade: "+this.idade)
    }

    obtemPesoAtleta(){
        console.log("Peso: "+this.massa)
    }

    obtemAlturaAtleta(){
        console.log("Altura: "+this.altura)
    }   
    
    obtemNotasAtleta(){
        console.log("Notas: "+this.notas.join(", "))
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade<=11){
            console.log("Categoria: Infantil")
        }
        else if(this.idade>=12 && this.idade<=13){
            console.log("Categoria: Juvenil")
        }
        else if(this.idade>=14 && this.idade<=15){
            console.log("Categoria: Intermediário")
        }
        else if(this.idade>=16 && this.idade<=30){
            console.log("Categoria: Adulto")
        }
        else{
            console.log("Categoria: Sem categoria")
        }
    }

    obtemIMC(){
        //calculo do IMC arrendondando para uma casa após a vírgula
        console.log("IMC: "+(this.massa/(this.altura)**2).toFixed(1))
    }

    obtemMediaValida(){
        //ordenando o array em ordem crescente
        this.notas = this.notas.sort((a,b) => a - b)
        //somando as notas, desconsiderando a nota mais baixa e a mais alta
        let soma = 0
        for(let i = 1;i<this.notas.length-1;i++){
            soma += this.notas[i]
        }
        //calculando a média válida arredondando para duas casa depois da vírgula
        console.log("Média válida: "+(soma/(this.notas.length-2)).toFixed(2))
        console.log("")
    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.obtemNomeAtleta()//nome
atleta.obtemIdadeAtleta()//idade
atleta.obtemPesoAtleta()//massa
atleta.obtemAlturaAtleta()//altura
atleta.obtemNotasAtleta()//notas
atleta.calculaCategoria()//categoria
atleta.obtemIMC()//imc
atleta.obtemMediaValida()//média valida
