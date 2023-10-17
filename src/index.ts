import getRandomElements from "./getRandomElements";
import Table from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

// Тестирование
const numArray: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const testArray: number[] = [];

for (let i = 0; i < 10; ++i) {
    testArray.push(0);
}

for (let i = 0; i < 10000; ++i) {
    const result = getRandomElements(numArray, 5);

    result.forEach(function (value) {
        testArray[Number(value)] ++;
    });
}
console.log("Тестовый массив:\n" + testArray + "\n\n");


const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(result);


//*********************************************************************

const columns = 10;
const rows = 10;

const table = new Table(rows, columns);

table.fillTable(getArrayOfUniqueValues(columns * rows));

table.print();