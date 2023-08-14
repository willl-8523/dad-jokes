const jokeEl = document.getElementById('joke');
const btn = document.querySelector('.btn');

const URL = 'https://icanhazdadjoke.com';

btn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch(URL, config)
  
  const data = await res.json()
  
  jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
//     const config = {
//         headers : {
//             Accept: 'application/json',
//         }
//     }

//     fetch(URL, config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }
