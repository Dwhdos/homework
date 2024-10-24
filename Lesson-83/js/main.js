// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
const user = [
    {
        name: 'Dima',
        age: 16,
        country: 'Russia',
        isAdmin: true
    }
]

console.log(user)


// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
const helloUser = {
    Dima: {
        age: 16,
        country: 'Russia',
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}
console.log(helloUser.Dima)
helloUser.Dima.sayHello('Dima')

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.
const users = [
    {
        name: 'Harry', 
        age: 21,
        country: 'Russia',
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Alex', 
        age: 38,
        country: 'Russia',
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Jake', 
        age: 18,
        country: 'Russia',
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Oliver', 
        age: 11,
        country: 'Russia',
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Max', 
        age: 27,
        country: 'Russia',
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
]

function notAdmin(array) {
    let x = 0
    for(let i = 0; i < array.length; i++) {
        if (array[i].isAdmin === false) {
            x++
        }
    }
    return x
}

console.log(notAdmin(users))