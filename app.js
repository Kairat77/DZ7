//задание 1
class Worker {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days){
        this.surname=surname
        this.days=days
        this.name=name
        this.rate=rate
    }
    getSalary(rate, days){
        let zarplata =this.rate * this.days;
        return zarplata;
    }
}
const worke = new Worker('Kairat','Tom', 7, 25);
console.log(worke.name);
console.log(worke.surname);
console.log(worke.rate);
console.log(worke.days);
console.log(worke.getSalary());

//задание 2
class WorkerTwo{
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName(){
        return this.#name;
    }
    getSurname(){
        return this.#surname
    }
    getRate(){
        return this.#rate
    }
    getDays(){
        return this.#days
    }
    getSalary(rate, days) {
        let zarplata = this.#rate * this.#days;
        return zarplata;
    }
}
function myFunc(a,b){
    return a+b
}

const result = new WorkerTwo ('Kairat', 'Tom', 20, 54);
console.log(result.getName());
console.log(result.getSurname());
console.log(result.getRate());
console.log(result.getDays());
console.log(result.getSalary());


