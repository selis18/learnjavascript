//Сделать первый символ заглавным
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1,str.length);
}

alert (ucFirst('вася'));

//Проверка на спам
function checkSpam(str){
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}
alert(checkSpam("innocent rabbit"));

//Усечение строки
function truncate(str, maxlength){
    if(maxlength < str.length){
        return str.slice(0, maxlength-1) + "...";
    }
    return str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет", 20));

function extractCurrencyValue(str){
    return parseInt(str.slice(1));
}

alert( extractCurrencyValue('$120'));