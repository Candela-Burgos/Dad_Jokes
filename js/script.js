const getId = (id) => document.getElementById(`${id}`);
const jokeText = getId("joke");
const btnRandomJoke = getId("random");
const getJoke = getId("get-joke");
const containerJokes = getId("container-jokes");

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeText.innerHTML = data.joke;
  console.log(data);
};

btnRandomJoke.addEventListener("click", generateJoke);

getJoke.addEventListener("click", () => {
  containerJokes.style.display = "flex";
  getJoke.style.display = "none";
  generateJoke();
});
