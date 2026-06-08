const name=["Dharshini","Divya","Gayathri"];
const dept=["IT","CS","English"];
const mark=["37","20","23"];
function result(mark)
{
    if(mark>=35)
    {
        return "pass"
    }
    else
    {
        return "Fail"
    }
}
for(let i=0;i<name.length;i++)
{
    console.log("Name:",name[i]);
    console.log("Department:",dept[i]);
    console.log("Mark:",mark[i]);
    console.log("Grade:",result(mark[i]));
}
let passCount = 0;
let failCount = 0;

for (let i = 0; i < mark.length; i++) {
    if (result(mark[i]) === "pass") {
        passCount++;
    } else {
        failCount++;
    }
}

console.log("Total Passed Students:", passCount);
console.log("Total Failed Students:", failCount);