class Father {
    name: string = "Father";
    talk ():void {
        console.log("I am a father")
    }

}
class Son extends Father {

    static {
        console.log("name", this.name);
        // this.talk();
    }
}

let aSon = new Son();
aSon.talk();
let aFather: Son = new Father();
aFather.talk();