function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'php', 'js'];
        for (let i = 0; i < skills.length; i++) {
            console.log("Я владею " + skills[i]);
        }
    }
    showSkills();

    function checkAge() {
        const answer = +prompt("Сколько вам лет?", `${age}`);
        if (answer >= 18) {
            console.log('Супер! Ты молодец что не останавливаешься на достигнутом.');
        } else {
            console.log('Ты молодец что стараешься развиваться в юном возрасте.');
        }
    }
    checkAge();

    function calcPow(num) {

        return num * num;
    }
let input = +prompt("Введите число для вычисления квадрата:");
console.log("Квадрат числа", input, "равен:", calcPow(input));
}

myFirstApp("Artem", 41);

