function repeat(str){
    let result= str.split('*');
    return `<${result[0]}></${result[0]}>`.repeat(result[1]);
    };
console.log(repeat('div*2'));