const MathFrameWork = {
    Result: null,
    property1: null,
    property2: null,
    
    calculate: function() {
      if (Array.isArray(this.property1) && Array.isArray(this.property2)) {
        this.Result = [];
        for (let i = 0; i < this.property1.length; i++) {
          this.Result.push(this.property1[i] + this.property2[i]);
        }
      } else if (typeof this.property1 === 'object' && typeof this.property2 === 'object') {
        this.Result = {};
        for (let key in this.property1) {
          this.Result[key] = this.property1[key] + this.property2[key];
        }
      } else {
        const num1 = Number(this.property1);
        const num2 = Number(this.property2);
        this.Result = num1 + num2;
      }
    },
  
    setProperty1: function(data) {
      if (Array.isArray(data)) {
        this.property1 = data;
      } else {
        const num = Number(data);
        if (!isNaN(num)) {
          this.property1 = num;
        } else {
          this.property1 = data;
        }
      }
    },
  
    setProperty2: function(data) {
      if (Array.isArray(data)) {
        this.property2 = data;
      } else {
        const num = Number(data);
        if (!isNaN(num)) {
          this.property2 = num;
        } else {
          this.property2 = data;
        }
      }
    }
  };
  
  MathFrameWork.setProperty1([1, 2, 3]);
  MathFrameWork.setProperty2([4, 5, 6]);
  MathFrameWork.calculate();
  console.log(MathFrameWork.Result); // выводит [5, 7, 9]
  
  MathFrameWork.setProperty1({a: 1, b: 2});
  MathFrameWork.setProperty2({a: 3, b: 4});
  MathFrameWork.calculate();
  console.log(MathFrameWork.Result); // выводит {a: 4, b: 6}
  
  MathFrameWork.setProperty1(2);
  MathFrameWork.setProperty2(3);
  MathFrameWork.calculate();
  console.log(MathFrameWork.Result); // выводит 5