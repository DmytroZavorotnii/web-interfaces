
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Menu {
    constructor() {
        this.loremText = fs.readFileSync('lorem.txt', 'utf-8');
    }

    displayWords(count) {
        const words = this.loremText.split(' ');
        const result = words.slice(0, count).join(' ');
        console.log(`Перші ${count} слів: ${result}`);
    }

    performMathOperation(a, b) {
        const sum = a + b;
        console.log(`Результат додавання ${a} + ${b} = ${sum}`);
    }

    start() {
        console.log('Меню:');
        console.log('1. Вивести вказану кількість слів з "Lorem ipsum".');
        console.log('2. Виконати математичну операцію.');
        console.log('3. Вийти.');

        rl.question('Оберіть пункт меню (1, 2, 3): ', (choice) => {
            switch (choice) {
                case '1':
                    rl.question('Скільки слів вивести? ', (count) => {
                        this.displayWords(parseInt(count, 10));
                        this.start();
                    });
                    break;
                case '2':
                    rl.question('Введіть перше число: ', (a) => {
                        rl.question('Введіть друге число: ', (b) => {
                            this.performMathOperation(parseInt(a, 10), parseInt(b, 10));
                            this.start();
                        });
                    });
                    break;
                case '3':
                    console.log('Нуууу добреее...');
                    rl.close();
                    break;
                default:
                    console.log('Неправильний вибір, спробуйте ще раз.');
                    this.start();
            }
        });
    }
}

function main() {
    const menu = new Menu();
    menu.start();
}

main()