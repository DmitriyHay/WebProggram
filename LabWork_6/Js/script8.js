let Manager={
    first_name:undefined,
    second_name:undefined,
    age:undefined,
    fillobject: function(first_name,second_name,age)
    {
        this.first_name=first_name;
        this.second_name=second_name;
        this.age=age;
    },
    output: function(){
        console.log(this.first_name);
        console.log(this.second_name);
        console.log(this.age);
    }
}
Manager.fillobject("Dmitro","Kurinniy","19");
Manager.output();