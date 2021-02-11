//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, answers = [];

function doWhile(num00, num0, num1, num2){
    do {//Выводим вопрос
    ok = false;
    event = +prompt(num00 + num1 + num2 + '-1 - Выход из игры');
    if (event == -1) {
        return -1;
    } else {
        ok = isAnswer(num0, event);
        return event;
    }
} while (!ok);
}

event = doWhile(works.a00, works.a0, works.a1, works.a2); //Выводим первый вопрос
answers.push(event);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = doWhile(works.b00, works.b0, works.b1, works.b2); 
        answers.push(event);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = doWhile(works.d00, works.d0, works.d1, works.d2);
                answers.push(event);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = doWhile(works.d00, works.d0, works.d1, works.d2);
                answers.push(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = doWhile(works.c00, works.c0, works.c1, works.c2);
        answers.push(event);
        switch (event) {
            case 1: // Второе действие
                event = doWhile(works.d00, works.d0, works.d1, works.d2);
                answers.push(event);
                break;
            case 2: // Второе действие
                event = doWhile(works.d00, works.d0, works.d1, works.d2);
                answers.push(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        answers.push("-1")
        break;
    default:
        alert('Ошибка');
}

if (answers.length == 3){
    alert("На первый вопрос вы дали ответ " + answers[0]);
    alert("На второй вопрос вы дали ответ " + answers[1]);
    alert("На третий вопрос вы дали ответ " + answers[2]);
} else if (answers.length == 2){
    alert("На первый вопрос вы дали ответ " + answers[0]);
    alert("На второй вопрос вы дали ответ " + answers[1]); 
} else {
    alert("На первый вопрос вы дали ответ " + answers[0]);
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

