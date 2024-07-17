const ctx = document.getElementById("skiChart");
const ctx1 = document.getElementById("skiChart1");
const ctx2 = document.getElementById("skiChart2");
const ctx3 = document.getElementById("skiChart3");
const ctx4 = document.getElementById("skiChart4");
const ctx5 = document.getElementById("skiChart5");
let email = document.getElementById("email").value;
let Username = document.getElementById("name").value;
let Email = document.getElementById("email");
let emailErr = document.getElementById("emailError");
let addCard = document.getElementById("addCard");
let Rbtn = document.getElementById("blogbtn1");
let Abtn = document.getElementById("blogbtn");
let View = document.getElementById("vewBlog1");
let addProject = document.getElementById("disable");
let PBackbtn = document.getElementById("BP");
let PAbtn = document.getElementById("AP");
let GitHubD = document.getElementById("github1");

let content = ` <p></p>`;

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["completed 60%", "Inprogress 40%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 200],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["completed 70%", "Inprogress 30%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [350, 150],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["completed 80%", "Inprogress 20%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [400, 100],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["completed 75%", "Inprogress 25%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [325, 175],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["completed 90%", "Inprogress 10%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [450, 50],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(ctx5, {
  type: "doughnut",
  data: {
    labels: ["completed 50%", "Inprogress 50%"],
    datasets: [
      {
        label: "My First Dataset",
        data: [250, 250],
        backgroundColor: [
          "rgb(15, 133, 161,89)",
          "rgb(91, 203, 230,89)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

function validate() {
  if (Username == "") {
    document.getElementById("nameError").innerHTML =
      "Pleace Enter User name required..";
  }
  if (email == "") {
    document.getElementById("emailError").innerHTML =
      "Please Enter Email is required..";
    emailErr.style.color = "red";
  }
}

function EmailValidate() {
  if (
    !Email.value.match(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    )
  ) {
    emailErr.innerHTML = "Please enter a valide email";
    emailErr.style.color = "red";
    return false;
  }
  emailErr.innerHTML = "Successful validate email";
  emailErr.style.color = "green";
  return true;
}

function AddCard() {
  addCard.style.display = "block";
  Rbtn.style.display = "block";
  Abtn.style.display = "none";
}

function RemoveCard() {
  addCard.style.display = "none";
  Rbtn.style.display = "none";
  Abtn.style.display = "block";
}

document.getElementById("vewBlog1").onclick = function () {
  location.href = "https://manojcodesjava.blogspot.com/search/label/JAVA";
};

function AddProject() {
  addProject.style.display = "inline-flex";
  PAbtn.style.display = "none";
  PBackbtn.style.display = "block";
}

function RemoveProject() {
  addProject.style.display = "none";
  PAbtn.style.display = "block";
  PBackbtn.style.display = "none";
}

document.getElementById("Vblogbtn1").onclick = function () {
  location.href = "https://github.com/ManojWickramasingha?tab=repositories";
};

document.getElementById("Vblogbtn2").onclick = function () {
  location.href = "https://github.com/ManojWickramasingha?tab=repositories";
};

document.getElementById("Vblogbtn3").onclick = function () {
  location.href = "https://github.com/ManojWickramasingha?tab=repositories";
};
