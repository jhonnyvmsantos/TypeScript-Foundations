let b = 8;
// b = "test";

// É NECESSÁRIO DECLARAR O TIPO DA VAR


let x : number = 16;

// x = "dwadwa";

let y : string = "omg";

// y = 10;

let myArray : number[] = [1, 2, 3];

// myArray = ["awda", true];

// array com tipos (diferentes) imutaveis
let myTuple : [string, number, boolean, string[]] = ["aa", 1, true, ["we", "da"]];
// myTuple = [true, "10", false, ["we", "eee"]];

// object literals
let myObject : {name: string, id: number} = {
    id: 1,
    name: "pedro"
};

myObject.name = "joao"
// myObject.omg = "polui";

// any type (tipo de var dinamico)
let a : any = 0;
a = "aaa";
a = true;

// union type
let id : string | number = "henrique";
id = 0;

// alias type
type myIdType = number | string;
const userid : myIdType = 10;
const stringidt : myIdType = "hente";
// const boolid : myIdType = false;

// enum type - coleçao de dados (object)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa : {} = {
    name: "Camisa colada",
    size: Size.G
}

// literal type
let teste : "autenticado" | null;

// teste = "dawdwadwad";
teste = null;

// functions

// function soma(a, b) {
    // os tipos de argumentos e retornos não declarados são considerados "any"
// }

function soma(a : number, b : number) : number {
    // return true
    return a + b
}

console.log(soma(16, 4));

// retornando nada
function nada(msg: string) : void {
    console.log(msg)
    // return msg
}

nada("testando");

// Defina um parametro como opcional...
function opcional(id: number, name: string, greet?: string) : void {
    if (greet) {
        console.log(`Olá ${name}, usuário do id ${id}... ${greet}`)
    } else {
        console.log(`Olá ${name}, usuário do id ${id}`)
    }
}

// opcional(16, "jhonny")
opcional(16, "jhonny", "dawdad")

// interfaces - Criação de uma estrutura padronizada...
interface MathFcuntionParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums : MathFcuntionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 5}));

// narrowing (checagem de tipos)
function checagem (info : number | string) : void {
    if (typeof info === "number") {
        console.log(`O número é igual a ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

checagem("dwad")
checagem(16)

// generics - Aceita vários tipos de array, por exemplo...
function genericsTest<T>(arr: T[]) { //Normalmente utiliza-se "T" ou "U" para generalizar o tipo
    arr.forEach(element => {
        console.log(`Item: ${element}`);
    });
}

const a1: number[] = [1, 5, 6];
genericsTest(a1);
const a2: string[] = ["a", "b", "c"];
genericsTest(a2);
const a3: any[] = [144, "dawd", true];
genericsTest(a3);

// classes - Programação Orientada à Objetos
class User {
    name;
    role;
    isAproved;

    constructor (name: string, role: string, isAproved: boolean) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }

    // Métodos (Functions)
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`O papel do usuário é ${this.role}`);
            return
        }
        console.log(`Indisponível parqa compartilhar tal informação`);
    }
}

const jose = new User("josé", "admin", true);
console.log(jose);
jose.showUserName();
// jose.showUserRole(false);
jose.showUserRole(true);

// Classes + interfaces (A interface dita como tal classe irá se comportar)
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

// herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels) //O 'super' irá subir os dados para o constructor do 'pai'
        this.engine = engine
    }
}

const a4 = new SuperCar("Toyo", 15, 14);
a4.showBrand();
