dop.util.get = function(object, path) {
    if (path.length === 0) return object

    for (
        var index = 0, total = path.length, tmpobject;
        index < total;
        index++
    ) {
        tmpobject = object[path[index]]

        if (index + 1 < total && isObject(tmpobject)) object = tmpobject
        else if (object.hasOwnProperty(path[index])) return tmpobject
        else return undefined
    }

    return object[path[index]]
}

// dop.util.set = function(object, path, value) {

//     if (path.length == 0)
//         return object;

//     path = path.slice(0);
//     var obj = object, objdeep, index=0, total=path.length-1;

//     for (;index<total; ++index) {
//         objdeep = obj[path[index]];
//         obj = (objdeep && typeof objdeep == 'object') ?
//             objdeep
//         :
//             obj[path[index]] = {};
//     }

//     obj[path[index]] = value;

//     return object;
// };

// /*
// ori = {test:{hs:124}}
// console.log( dop.util.set(ori, ['test','more'], undefined))
// */
