describe("Sum",()=>{

    it("Sum of 2 and 3 is 5",()=>{
        assert.equal(sum(2,3),5);
    });
    it("Sum of 1 and 1 is 2",()=>{
        assert.equal(sum(1,1),2);
    });
    it("Sum of 70 + 3 is 73",()=>{
        assert.equal(sum(70,3),73);
    });
});

describe("Multiply",()=>{
    it("Multiplying 10 by 9 is 90",()=>{
        assert.equal(multiply(10,9),90);
    });
    it("Multiplying 7 by 9 is 63",()=>{
        assert.equal(multiply(7,9),63);
    });
});

describe("Reverse",()=>{
    it("Reversing \'happy\' is \'yppah\'",()=>{
        assert.equal(reverse("happy"),"yppah");
    });
    it("Reversing \'apple\' is \'elppa\'",()=>{
        assert.equal(reverse("apple"),"elppa");
    });
    it("Reversing empty string \' \' is \' \'",()=>{
        assert.equal(reverse(" ")," ");
    });
});

describe("filterLongWords",()=>{
    it("Filtering Long words of size 5",()=>{
        assert.deepEqual(filterLongWords(5,"aaa","aaaaaa","a","bbbbbbb"),["aaaaaa","bbbbbbb"]);
    });
    it("Filtering Long words of size 6",()=>{
        assert.deepEqual(filterLongWords(6,"ccc","aaaaaa","x","bbbbbbb"),["bbbbbbb"]);
    });
});