
// --------- =^.^= --------- Get Users

let usersData = "https://randomuser.me/api/?results=4&nat=BR";

let body = document.querySelector("body");

let h1 = document.querySelector("h1");
h1.style.textAlign = "center";

function creatUserElements(user) {
  // --------- =^.^= ----- Card
  let card = document.createElement("div");
  card.classList.add("card");

  // --------- =^.^= ----- Image
  let figure = document.createElement("img");
  figure.src = user.picture.large;
  figure.classList.add("card-img-top");

  //--------- =^.^= ----- Ul
  let ul = document.createElement("ul");
  ul.classList.add("list-group");
  ul.classList.add("list-group-flush");

  //--------- =^.^= ----- li User name
  let userName = document.createElement("li");
  userName.classList.add("list-group-item");
  userName.classList.add("user-name");
  userName.innerText = ` Name: ${user.name.first}  ${user.name.last} `;

  //--------- =^.^= ----- li User gender
  let userGender = document.createElement("li");
  userGender.classList.add("list-group-item");
  userGender.classList.add("user-gender");
  userGender.innerText = ` Gender: ${user.gender}`;

  //--------- =^.^= ----- li User address
  let userAddress = document.createElement("li");
  userAddress.classList.add("list-group-item");
  userAddress.classList.add("user-address");
  userAddress.innerText = ` Address: ${user.location.street.name} `;

  //--------- =^.^= ----- li User email
  let userEmail = document.createElement("li");
  userEmail.classList.add("list-group-item");
  userEmail.classList.add("user-email");
  userEmail.innerText = `Email: ${user.email} `;

  //--------- =^.^= ----- li User password

  let userPassword = document.createElement("li");
  userPassword.classList.add("list-group-item");
  userPassword.classList.add("user-password");
  userPassword.innerText = `Password: ${user.login.password} `;

  // --------- =^.^= ----- Appending to the body
  card.appendChild(figure);
  card.appendChild(ul);
  ul.appendChild(userName);
  ul.appendChild(userGender);
  ul.appendChild(userAddress);
  ul.appendChild(userEmail);
  ul.appendChild(userPassword);
  body.appendChild(card);
}

// --------- =^.^= --------- Approach with explicit promise

// fetch(usersData)
//   .then((response) => {
//     response.json().then((users) => {
//       users.results.forEach((user) => {
//         creatUserElements(user);
//       });
//     });
//   })
//   .catch((error) => console.log(`Failed: ${error}`));

// --------- =^.^= --------- Async version with implicit promise

async function getUsersData() {
  try {
    let response = await fetch(usersData);
    let jsonResponse = await response.json();

    jsonResponse.results.forEach((user) => {
      creatUserElements(user);
    });
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
}
getUsersData();
