
// 51 masala
{
    function middleNum(arr){
        let middle = Math.round(arr.length / 2 -1)
        let pastMiddle = Math.round(arr.length / 2)
        let total = (arr[middle] + arr[pastMiddle]) / 2
        if(arr.length % 2 !== 0){
            return arr[middle]
        }else{
            return total
        }
    }
    console.log(middleNum([1,2,3,4,5,6]));
}

// 52 masala
{
    let products = [
        {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
        {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
        {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
        {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
    ];
    let filteredProducts = products.filter(product => product.id !==4)
    console.log(filteredProducts);
}

// 53 masala
{
    function checkIfNum(str){
        let letters = /^[A-Za-z]+$/
        let testing = letters.test(str)
        if(testing == true){
            return `"${str}" stringda faqat hariflar!`
        }else{
            return `"${str}" stringda son bor!`
        }
    }
    console.log(checkIfNum("salom"));
    console.log(checkIfNum("salom1"));
}

// 54 masala
{
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

    function countAnimals(arr){
        let count = {}

        arr.forEach(animal => {
            count[animal] = (count[animal] || 0) + 1
        });
        
        return count
    }

    console.log(countAnimals(animals));
}

// 55 masala
{
    function getLength(str){
        return str.split(' ').map(word => word.length)
    }
    console.log(getLength("Hello World"));
}

// 56 masala
{
    function checkSpace(str){
        return str.split('').some(char => char === ' ')
    }
    console.log(checkSpace("salom dunyo"));
}

// 57 masala
{
    function objectToStringArray(obj) {
        return Object.entries(obj).map(([key, value]) => key + value);
    }
    
    const input = {a: 2, b: 5, c: 7};
    const output = objectToStringArray(input);
    console.log(output);
}

// 58 masala
{
    const pupils = [
        { name: "Elbek", protcent: 95 },
        { name: "Zafar", protcent: 78 },
        { name: "Aziz", protcent: 83 },
        { name: "Jasur", protcent: 88 },
        { name: "Bobur", protcent: 66 },
        { name: "Kamron", protcent: 75 },
    ];
    
    const result = pupils.reduce((acc, pupil) => {
        if (pupil.protcent >= 80) {
            acc.passed++;
        } else {
            acc.failed++;
        }
        return acc;
    }, { passed: 0, failed: 0 });
    
    console.log(`Passed: ${result.passed}, Failed: ${result.failed}`);    
}

// 59 masala
{
    var findMedianSortedArrays = function(nums1, nums2) {
        let merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const length = merged.length;
        const mid = Math.floor(length / 2);
    
        if (length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[mid];
        }
    };
    
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const result = findMedianSortedArrays(nums1, nums2);
    console.log(result); 
}

// 60 masala
{
    var searchMatrix = function(matrix, target) {
        for (let row of matrix) {
            if (row.includes(target)) return true;
        }
        return false;
    };
    
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));   
}
// 61 masala
// {
//     function makeWord(){
//         let random = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest"
//         let convert = random.split('')
//         let result = []
//         for(let i = 0; i < random.length; i++){
//             if(!result.includes("n")){
//                 result.push(convert)
//             }
//         }
//         return result
//     }
//     console.log(makeWord());
// }

// 63 masala
{
    function lastLength(str){
        let convert = str.split(' ').reverse()
        return `oxrigi sozning lengthi: ${convert[0].length}`
    }
    console.log(lastLength("salom bu shunchaki test"));
}
// 65 masala
{
    function objectToStringArray(obj) {
        return Object.entries(obj).map(([key, value]) => key + value);
    }
    
    const input = {a: 2, b: 5, c: 7};
    const output = objectToStringArray(input);
    console.log(output);
}

// 67 masala
{
    function sortArr(arr){
        let newArr = []
        let sortedArr = []

        for(let item of arr){
            if(!newArr.includes(item)){
                newArr.push(item)
            }else{
                sortedArr.push(item)
            }
        }
        return `newArr: ${newArr}, sortedArr: ${sortedArr}`
    }
    console.log(sortArr([1,1,2,2,3,4,5,5,6,7,6]));
}

// 69 masala
{
    Array.prototype.SumArr = function(){
        return this.reduce((sum, value) => sum + value, 0)
    }

    let arr = [1,2,3,4]
    console.log(arr.SumArr());
}

// 70 masala
{
    String.prototype.findVowel = function(){
        let vowels = 'aeiouAEIOU'
        let count = 0
        for(let i = 0; i < this.length; i++){
            if(vowels.includes(this[i])){
                count++
            }
        }
        return `stringda ${count} ta unli harf bor!`
    }

    let str = "hammaga salom"
    console.log(str.findVowel());
}

// 71 masala
{
    String.prototype.checkLength = function(){
        return `stringning lengthi: ${this.length}`
    }

    let str = "Hammaga Salom!!"
    console.log(str.checkLength());
}

// 72 masala
{
    function lele(board){
        let word = "ABCCED"
        let convert = board.flat(1)

        for(let i = 0; i < convert.length; i++){
            if(word.includes(convert[i])){
                return true
            }else{
                return false
            }
        }
    }
    
    console.log(lele([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]));
}
// 73 masala
{
    function lele(head){
        let val = 6
        return head.filter(item => item !== val)
    }
    console.log(lele([1,2,6,3,4,5,6]));
}