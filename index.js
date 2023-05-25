import express from 'express';
const app = express();
const students=[

{
  id: 1,
  name: "EMAN",
  city: "CAIRO"

},
{
  id: 2,
  name: "SARA",
  city: "Shebeen"
},
{
id: 3,
name: "ASMAA",
city: "tanta" 

},
{
 id: 4,
 name: "YOUSSEF",
 city: "ALEX"
}

];



 

const studentsFunction = (request , response) =>{
let output = '<ul>'

for(let i=0; i< students.length;i++){
const student =students[i];
output += "<li>" + student.name + "</li>";

}


output += '</ul>';

response.send(output)

};

app .get('/Students', studentsFunction)

 
app.listen(4000, "0.0.0.0");

