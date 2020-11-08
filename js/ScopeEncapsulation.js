"use strict"
String.prototype.filter=function(...str){
    return this.split(' ').filter((word)=>str.indexOf(word)<0).join(" ");
};

describe("String Filter",()=>{

    it("Filter Test",()=>{
        assert.equal("This house is not nice!".filter("not"),"This house is nice!"); 
    });

});

Array.prototype.bubbleSort= function(){
    let len =this.length;
    for(let i=0;i<len;++i){
        for(let j=0;j<len;++j){
            if(this[j]>this[j+1]){
                let temp = this[j];
                this[j]=this[j+1];
                this[j+1]=temp;
            }
        }
    }
    return this;
};

describe("Bubble Sort Array",()=>{
    it("Buuble sort test",()=>{
        assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),[-2,0,1,3,4,6]);
    });
});

function Person(name,age){
    this.name=name;
    this.age =age;
}
Person.prototype.describe=function(){
    return this.name+", "+this.age+" years old.";
}

function Teacher(name,age){
    this.name=name;
    this.age=age;
}

Teacher.prototype.__proto__=Person.prototype;

Teacher.prototype.teach=function(subject){
    return this.name+" is now teaching "+subject;
}

let teacher1 = new Teacher("Sami Taha",30);
console.log(teacher1.teach("WAP"));

describe("Person Teacher Inheritance",()=>{
    it("Encapsulation test",()=>{
        assert.equal(new Teacher("Sami Taha",30).teach("WAP"),"Sami Taha is now teaching WAP");
    });

});


