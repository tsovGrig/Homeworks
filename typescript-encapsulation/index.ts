//setter getter new
class BankMember {

    private _savingsBalance: number;

    public get savingsBalance(): number {
        return this._savingsBalance;
    }

    public set savingsBalance(v: number) {
        this._savingsBalance = v;
    }

    constructor(savingsBalance: number) {
        this._savingsBalance = savingsBalance;
    }

    public deposit(amount: number): void {
        this._savingsBalance += amount;
    }

    public withdraw(amount: number): void {

        if (this.savingsBalance < amount) {
            console.log("Insufficient Funds");
            return;
        }

        this._savingsBalance -= amount;

    }

}

class Institute {
    protected _course_id: number;
    protected _course_name: string;

    public set course_id(course:number){
        this._course_id = course;
    }

    public set course_name(courseName:string){
        this._course_name = courseName;
    }
    display(): void {
        console.log("Course ID is : ");
        console.log(this._course_id);
        console.log("Course name is : ");
        console.log(this._course_name);
    }
}


let obj = new Institute();
obj.course_id = 23;
obj.course_name = "Javascript";
obj.display();


//setter, getter old fashioned
class Person {
    private readonly credentials: string = '';
    private name: string = '';

    constructor(value: string){
        this.credentials = value
    }

    public setName(name: string): void {
        if(!this.credentials) return
        this.name = name
    }

    public getName(){
        return `Employee: ${this.name}`
    }
}




