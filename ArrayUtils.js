class ArrayUtils{

    isEmpty(array){
        if(array[0]) {
            return false;
        } else {
        return true;
        }
    }

    append(original, value){
        original.push(value);
        return original;
    }

    clone(original){
        let copy = original;
        return copy;
    }

    subArray(original, from, to){
        let newArray = [];
        for(let i = from; i <= to; i++) {
            newArray.push(original[i]);
        }
        return newArray;
    }

    equals(arr1, arr2){
        let mismatch = 0;
        if(arr1.length > arr2.length) {
            for(let i = 0; i < arr1.length; i++) {
                if(arr1[i] !== arr2[i]) {
                    mismatch ++;
                    break;
                }
            }
        } else {
            for(let i = 0; i < arr2.length; i++) {
                if(arr1[i] !== arr2[i]) {
                    mismatch ++;
                    break;
                }
            }
        }
        if(mismatch === 0){
            return true;
        } else {
            return false;
        }
    }

    fill(original, value){
        for(let i = 0; i < original.length; i++) {
            original[i] = value;
        }
        return original;
    }

    indexOf(original, value){
        let match;
        for(let i = 0; i < original.length; i++) {
            if(original[i] === value) {
                match = i;
                break;
            }
        }
        if(match != null) {
            return match;
        } else {
        return -1;
        }
    }

    remove(original, value){
        let copy = original;
        for(let i = 0; i < copy.length; i++) {
            if(copy[i] === value) {
                copy.splice(i, 1);
                break;
            }
        }
        return copy;
    }

    reverse(original){
        let opposite = [];
        for(let i = 0; i < original.length; i++) {
            opposite.unshift(original[i]);
        }
        return opposite;
    }
    
}