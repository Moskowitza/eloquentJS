//let's implement an iterable data structure
class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    //retrieve elements in the matrix
    get(x, y) {
        return this.content[y * this.width + x];
    }
    //set elements in the matrix
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
    [Symbol.iterator]() {
        return new MatrixIterator(this)
    }
}
/*When looping over a matrix, 
you are usually interested in the position 
of the elements as well as the elements themselves, 
so we’ll have our iterator produce objects with x, y, and value properties.*/
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y == this.matrix.height) return { done: true }
        //the value object
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }
        this.x++; //iterate x
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}
// placed BACK into the original Class declaratoin 
// Matrix.prototype[Symbol.iterator]=function(){
//     return new MatrixIterator(this)
// }
//our attributes (width, height, element = (x, y) => undefined)
// let matrix = new Matrix(3, 2, (x, y) => `:value ${x},${y}`);
// for (let { x, y, value } of matrix) {
//     console.log(x, y, value)
// }
//INERITANCE
//let's create a new object from the existing Matrix class
//we extended classes when using REACT
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x); //if X is less than Y flip positions
            else return element(x, y) //other wise, we're still on one side of the mirror and we can leave as is
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value); //if x and y are not equal apply super check
        }
    }

}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`)
console.log(matrix.get(1, 4))

//The instanceOf operator
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);