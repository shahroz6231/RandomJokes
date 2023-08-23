const jokes= document.querySelector('#joke');
const jokebtn= document.querySelector('#jokebtn');

const generateJokes= async ()=>{
    try {
        const setHeader={
            headers : {
                Accept : "application/json"
            }
        }

        const res= await fetch('https://icanhazdadjoke.com', setHeader);
        const data= await res.json();
        jokes.innerHTML=data.joke;
    } catch (err) {
        console.log(`The Error is ${err}`);
    }
}
 jokebtn.addEventListener('click', generateJokes);
 generateJokes();