
/**
 * This class creates programmers's profiles
 * @example 
 * var programmerOne = new Programmer (name: "alberto", programmingLang: "go", proficiency: 4);
 * programmerOne.printInfo;
 */
class Programmer {
    /**
     * Create programmer profile
     * @param {{name: string, programmingLang: string, proficiency: number}} programmer programmer information
     */
    constructor (programmer){
        this.programmer = programmer.name;
        this.proficiency = programmer.proficiency;
        this.programmingLanguage = programmer.programmingLang;
    }
    /**
     * THIS PRINTS THE PROGRAMMER INFORMATION
     * @returns {void}
     */
    printInfo (){
        console.log(`I'm a programmer, my name is ${this.programmer} and my level of proficiency on ${this.programmingLanguage} is ${this.proficiency} of 5`)
    }
}
var pro1 = new Programmer ({name : "alberto", programmingLang: "javascript", proficiency:3})

pro1.printInfo();