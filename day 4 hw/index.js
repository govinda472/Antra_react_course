const Name = document.getElementById("name");
const Age = document.getElementById("age");

let people = JSON.parse(localStorage.getItem("people"));
if (!people){
    people = [];
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const  newP ={
        name: Name.value,
        age: Age.value,
    };
    people.push(newP);
    console.log(people);
    localStorage.setItem("person",JSON.stringify(newP))
});