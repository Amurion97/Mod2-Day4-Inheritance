class A
{
    public foo(s: string): number;
    public foo(n: number): string;
    public foo(arg: any): any
    {
        if (typeof(arg) === 'number')
            return arg.toString();
        if (typeof(arg) === 'string')
            return arg.length;
    }
}
let obj = new A();
console.log("Result: " +obj.foo(101));
console.log("Length of String: " +obj.foo("Typescript"));
//Function with string type parameter
function add(a:string, b:string): string;
//Function with number type parameter
function add(a:number, b:number): number;
//Function Definition
function add(a: any, b:any): any {
    return a + b;
}
//Result
console.log("Addition: " +add("Hello ", "JavaTpoint"));
console.log("Addition: "+add(30, 20));
// console.log("Addition: "+add(30, "20"));
function hello() {
    console.log(1)
}
let arr: number[] = [];
console.log(arr.sort.toString());