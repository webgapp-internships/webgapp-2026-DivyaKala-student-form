class student
{
    constructor(name,dept)
    {
        this.name = name;
        this.dept = dept;
    }

bark()
{
    return `${this.name}:${this.dept}`;
}

}
const st1 = new student("Gayathri", "B.Sc.IT");
const st2 = new student("Dharshini", "B.Sc.CS");

console.log(st1.bark());
console.log(st2.bark());