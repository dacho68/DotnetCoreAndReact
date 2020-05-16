
export interface ICar{
    color : string;
    model : string;
    topSpeed? :number;
}

const car1 = {
    color : 'blue',
    model: 'BMW'
}

const car2 = {
    color : 'red',
    model: 'Mercedes',
    topSpeed: 100
}

const multiply = (x : number,y : number) : string => {
    return (x*y).toString();
}

export const cars = [car1,car2];