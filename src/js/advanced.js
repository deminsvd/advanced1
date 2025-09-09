const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
}

export function orderByProps(obj, sortcondition) {
    const arrfirst = [];
    sortcondition.forEach(function(item) {
         arrfirst.push({
             key: item,
             value: obj[item]
         })
    }); 
    
    const arrsecond =[];
    for (const prop in obj) {
        if (!sortcondition.includes(prop)) {
            arrsecond.push({
                key: prop,
                value: obj[prop]
            })
        }
    }
    
    arrsecond.sort(function (a, b) {
        if (a.key > b.key) {
                return 1;
        }
        else {
            return -1;
        }
    });
    
    const arrfinal = arrfirst.concat(arrsecond);
    return arrfinal;
}

orderByProps(obj, ["name", "level"])