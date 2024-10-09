const i = document.querySelector("i");

function getUser() {
  i.style.display = "inline";
  fetch("https://randomuser.me/api/?gender=female")
    .then((response) => response.json())
    .then((data) => {
      const { title, first, last } = data.results[0].name;
      const gender = data.results[0].gender;
      const age = data.results[0].dob.age;
      const email = data.results[0].email;
      const phone = data.results[0].phone;
      const { number: streetNumber, name: streetName } =
        data.results[0].location.street;
      const { city, state, country, postcode } = data.results[0].location;

      const address = `${streetNumber} ,${streetName} ${city} ${state},${country} ${postcode}`;
      const imageSRC = data.results[0].picture.medium;
      const ul = document.querySelector("ul");
      ul.querySelector(
        "#name"
      ).innerHTML = `<strong>Name:</strong>${title} ${first} ${last}`;
      ul.querySelector(
        "#gender"
      ).innerHTML = `<strong>Gender:</strong>${gender}`;
      ul.querySelector("#age").innerHTML = `<strong>Age:</strong>${age}`;
      ul.querySelector("#email").innerHTML = `<strong>Email:</strong>${email}`;
      ul.querySelector(
        "#contact"
      ).innerHTML = `<strong>Contact:</strong>${phone}`;
      ul.querySelector(
        "#location"
      ).innerHTML = `<strong>Location:</strong>${address}`;

      document.querySelector("img").src = imageSRC;
      i.style.display = "none";
    });
}

document.querySelector(".btn").addEventListener("click", getUser);
// const name = `${data.results[0].name.title} ${data.results[0]}`;
function createPost(post) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: {
      "Content-Type": "application / json",
      token: "abc123",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

createPost({ title: "MY Post ", body: "Hello World" });
