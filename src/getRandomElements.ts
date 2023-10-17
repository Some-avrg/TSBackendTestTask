/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */

/* Aлгоритм Дурштенфельда */
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function getRandomElements(array: string[], numOfItems: number): string[] {
    const indexArray: number[] = [];
    const outputArray: string[] = [];
    for (let i = 0; i < array.length; ++i) {
        indexArray[i] = i;
    }
    shuffleArray(indexArray);

    if (numOfItems > array.length) numOfItems = array.length;
    for (let i = 0; i < numOfItems; ++i) {
        outputArray[i] = array[indexArray[i]];
    }
    return outputArray;
}

export default getRandomElements;