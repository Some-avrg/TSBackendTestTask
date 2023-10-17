
class Cell{
    constructor(private _content: any){

    }

    public set content(str: any){

    }

    public get content(): string{
        return this._content;
    }
}

class Table {
    private _cells: Array<Cell>[];
    private _columnMaxLength: Array<number>;
    constructor(private _numberOfRows: number, private _numberOfColumns: number) {
        this._cells = Array.from(Array(_numberOfColumns), () => new Array(_numberOfRows));
        for (let i = 0; i < this._numberOfRows; ++i) {
            this._cells[i] = [];
        }
        this._columnMaxLength = [];
    }

    //Заполняем ячейки таблицы
    fillTable(arr: string[]): void {
        //arr[18] = "dsdgdfgd";

        for (let j = 0; j < this._numberOfColumns; ++j) {
            this._columnMaxLength[j] = 0;
            for (let i = 0; i < this._numberOfRows; ++i) {
                const cell = new Cell(arr[j * this._numberOfRows + i]);
                this._cells[i][j] = cell;
                //получаем наибольшую длину строки в столбце
                if (this._cells[i][j].content.length > this._columnMaxLength[j]) this._columnMaxLength[j] = this._cells[i][j].content.length;
            }
        }
    }

    print(): void {

        let str: string;
        let str2: string;

        str = String.fromCharCode(0x250E)                                                                                 //
        for (let j = 0; j < this._numberOfColumns; ++j) {                                                                 //
            str = str + String.fromCharCode(0x2500).repeat(this._columnMaxLength[j]) + String.fromCharCode(0x2530);       //
        }                                                                                                                 //  Header of table
        str = str.slice(0, -1);                                                                                           //
        str += String.fromCharCode(0x2512);                                                                               //
        console.log(str);                                                                                                 //

        for (let i = 0; i < this._numberOfRows; ++i) {
            str = String.fromCharCode(0x2502);
            str2 = String.fromCharCode(0x2520);

            for (let j = 0; j < this._numberOfColumns; ++j) {
                str = str + this._cells[i][j].content.padEnd(this._columnMaxLength[j]) + String.fromCharCode(0x2502);
                str2 = str2 + String.fromCharCode(0x2500).repeat(this._columnMaxLength[j]) + String.fromCharCode(0x2542);
            }
            console.log(str);
            if (i !== this._numberOfRows - 1) {
                str2 = str2.slice(0, -1);
                str2 += String.fromCharCode(0x2528);
                console.log(str2);
            }
        }

        str = String.fromCharCode(0x2516)                                                                               //
        for (let j = 0; j < this._numberOfColumns; ++j) {                                                               //
            str = str + String.fromCharCode(0x2500).repeat(this._columnMaxLength[j]) + String.fromCharCode(0x2538);     //
        }                                                                                                               // Footer of table
        str = str.slice(0, -1);                                                                                         //
        str += String.fromCharCode(0x251A);                                                                             //
        console.log(str);                                                                                               //
    }
}


export default Table;