/**
 * this is the variables module
 * @module variables
 */
/**This is the first variable I write. 
 * @type {(array|string)}
*/
const fullName = [];

/**
 * un arreglo de los empleados con sus caracteristicas
 * @type{Array<object>}
 */
var employees= [
    {
        "name": "robert",
        "age": 25,
        "sex": "male",
        "athlete": true
    }
]
/**
 * this variable declares the family of spiders
 * @type {{name: string, veneno, type: string, familia: string}}
 */
var aracnidos= {
    "name": "viuda negra",
    "veneno": "mortal",
    "type": "terrestre",
    "familia":"aracnidas"
};
/**
 * This is the set of personal and professional profiles of every employee
 * @param {Object} p1 Personal profile  
 * @param {Object} p2 Professional profile
 */
const addingProfiles = (p1, p2)=> { {p1 + p2}};