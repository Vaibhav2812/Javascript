
const str = 'afewreociwddwjej';
function findRepeat(string) {
    const arr = string.split('');
    const hash = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (hash.get(arr[i] === undefined)){
            hash.set(arr[i], true);
        } else {
            const value = hash.get(arr[i]);
                hash.set(value, !value)
        }
    }
    hash.forEach((v, k) => {
        if (!v)
            result.push(k);
    });
    return result;
}

console.log(findRepeat(str));
