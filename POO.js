/*


*/
console.log("POO / PROGRAMACION ORIENTADA A OBJETOS CON JAVASCRIPT")
const _private = new WeakMap()
class Alumno {
    //abstraccion
    constructor(name, lastname, email){
        const properties = {
            _name : name,
            _lastname : lastname,
            _email : email
        }
        //encapsulamiento
        _private.set(this,  {properties})
    }
    get name(){
        return _private.get(this).properties['_name']
    }
    set name(newName){
        return _private.get(this).properties['_name'] = newName
    }
    get name(){
        return _private.get(this).properties['_name']
    }
    set lastname(newLastname){
        return _private.get(this).properties['_lastname'] = newLastname
    }
    get lastname(newLastname){
        return _private.get(this).properties['_lastname'] 
    }
    set email(newEmail){
        return _private.get(this).properties['_email'] = newEmail
    }
    get email(){
        return _private.get(this).properties['_email']
    }

    getAllData(){
        console.log("Name : " + " " + this.name)
        console.log("LastName : " + " " + this.lastname)
        console.log("Email : " + " " + this.email)
    }


};
class Profile extends Alumno {
    constructor(name, lastname, email, ilustrators){
        super(name, lastname, email)
        this.ilustrators = ilustrators
    }
    addIlustrator(newIlustrators = []){
        this.ilustrators.push(newIlustrators)
    }
    getAllData(){
        super.getAllData();
        console.log("Ilustrador :" + " " + this.ilustrators)
    }
};
class Portfolio{
    constructor(){
        this.products = [];
    }

    addProducts(amount, price){
        //creamos una copia del array con la cantidad de ventas y le concatenamos los precios
        this.products.push( ...Array(amount).fill(price) )
    }
    showProducts(){
        console.log(this.products)
    }
    calcTotal(){
        return this.products.map( price => price).reduce((ac, price) => ac + price, 0)
    }
    printTiket(){
        console.log("Total a pagar " + this.calcTotal())
    }
}
const Alumno1 = new Alumno("Felipe", "Traina", "felipe.traina.azul@gmail")
const Profile1 = new Profile("Feli", "Nanni", "felipeweb87@gmail.com", ["Felipe", "Feli", "HCKT"])
const port = new Portfolio()

port.addProducts(2, Profile1.email)
port.addProducts(1, Alumno.email)
port.showProducts()
port.printTiket()
Alumno1.getAllData()
Profile1.getAllData()
