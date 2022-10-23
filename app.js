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
    getOne(){
        return this.#name;
    }
    getTwo(){
        return this.#surname
    }
    getThree(){
        return this.#rate
    }
    getFour(){
        return this.#days
    }
    getSalary(rate, days) {
        let zarplata = this.#rate * this.#days;
        return zarplata;
    }
}

const result = new WorkerTwo ('Kairat', 'Tom', 20, 54);
console.log(result.getOne());
console.log(result.getTwo());
console.log(result.getThree());
console.log(result.getFour());
console.log(result.getSalary());
