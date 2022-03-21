function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("NavBtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// 샌드위치 선택시 버튼 색 변경
var sandwichLinks = document.querySelectorAll(".select");

function MenuSelect(main) {
  var SandwichMenu = document.querySelector(".sandwich");
  if (SandwichMenu) {
    SandwichMenu.classList.remove("sandwich");
  }
  this.classList.add("sandwich");
}

for (var i = 0; i < sandwichLinks.length; i++) {
  sandwichLinks[i].addEventListener("click", MenuSelect);
}

// 빵 선택시 버튼 변경
var breadLinks = document.querySelectorAll(".select2");

function BreadSelect() {
  var BreadMenu = document.querySelector(".bread");
  if (BreadMenu) {
    BreadMenu.classList.remove("bread");
  }
  this.classList.add("bread");
}

for (var i = 0; i < breadLinks.length; i++) {
  breadLinks[i].addEventListener("click", BreadSelect);
}
//소스 선택시 버튼 변경 (다수 가능)
var sauceLinks = document.querySelectorAll(".select3");

function SauceSelect() {
  var SauceMenu = document.querySelector(".sauce");
  if (SauceMenu) {
    SauceMenu.classList.add("sauce");
  }
  this.classList.add("sauce");
}

for (var i = 0; i < sauceLinks.length; i++) {
  sauceLinks[i].addEventListener("click", SauceSelect);
}

// 치즈 선택시 버튼 변경
var cheeseLinks = document.querySelectorAll(".select4");

function CheeseSelect() {
  var CheeseMenu = document.querySelector(".cheese");
  if (CheeseMenu) {
    CheeseMenu.classList.remove("cheese");
  }
  this.classList.add("cheese");
}

for (var i = 0; i < cheeseLinks.length; i++) {
  cheeseLinks[i].addEventListener("click", CheeseSelect);
}

// 다 더해지는 값



const submitButton = document.querySelector(".total-btn");

function gogo() {
  let sauceArr = [];
  const sandwich = document.querySelector(".sandwich").innerText;
  const bread = document.querySelector(".bread").innerText;
  const cheese = document.querySelector(".cheese").innerText;
  const sauceAll = document.querySelectorAll(".sauce");
  let comment = $('#input-tip').val()


  for (let i = 0; i < sauceAll.length; i++) {
    let sauces = sauceAll[i].innerText;
    sauceArr.push(sauces);
  }

  console.log(sauceArr);

  $.ajax({
    type: "POST",
    url: "/menu",
    traditional: true,
    async: false,
    data: {
      find_give: sandwich,
      sandwich_give: sandwich,
      bread_give: bread,
      sauce_give: sauceArr,
      cheese_give: cheese,
      comment_give: comment
    },
    success: function (response) {
      // 성공하면
      if (response["result"] == "success") {

      }
    }
  });
location.replace('/check');
}

submitButton.addEventListener("click", gogo);

//크롤링한 값
$(document).ready(function () {
  showSandwiches();
  showBreads();
  showSauces();
  showCheese();
});
// 샌드위치 조합 요청
function showSandwiches() {
  $.ajax({
    type: "GET",
    url: "api/list/sandwich",
    data: {},
    success: function (response) {
      let sandwiches = response["all_sandwich"];
      for (let i = 0; i < sandwiches.length; i++) {
        let img = sandwiches[i]["img"];
        let name = sandwiches[i]["name"];
        let calories = sandwiches[i]["calorie"];
        let summary = sandwiches[i]["summary"];

        let temp_html = `<div class="SandwichMenu">
                                  <div class="background">
                                      <div class="firstimg">
                                          <div class="top">
                                              <span class="topName">${summary}</span>
                                              <span>${calories}</span>
                                          </div>
                                          <img class="sandwichimg" src="${img}"/>
                                      </div>
                                  </div>
                                  <div>
                                      <button class="select" value="menu01">${name}</button>
                                  </div>
                              </div>
                              <script>
                              var sandwichLinks = document.querySelectorAll(".select");

                              function MenuSelect(main) {
                                var SandwichMenu = document.querySelector(".sandwich");
                                if (SandwichMenu) {
                                  SandwichMenu.classList.remove("sandwich");
                                }
                                this.classList.add("sandwich");
                                
                              }
                              
                              for (var i = 0; i < sandwichLinks.length; i++) {
                                sandwichLinks[i].addEventListener("click", MenuSelect);
                              }
                              </script>`;
        $("#tab1").append(temp_html);
      }
    },
  });
}
function showBreads() {
  $.ajax({
    type: "GET",
    url: "api/list/bread",
    data: {},
    success: function (response) {
      let breads = response["all_bread"];
      for (let i = 0; i < breads.length; i++) {
        let img = breads[i]["img"];
        let name = breads[i]["name"];
        let calories = breads[i]["cal"];
        let summary = breads[i]["sum"];

        let temp_html = `<div class="SandwichMenu">
                                  <div class="background">
                                      <div class="firstimg">
                                          <div class="top">
                                              <span class="topName">${summary}</span>
                                              <span>${calories}</span>
                                          </div>
                                          <img class="sandwichimg" src="${img}"/>
                                      </div>
                                  </div>
                                  <div>
                                      <button class="select2" value="menu01">${name}</button>
                                  </div>
                              </div>
                              <script>
                              var breadLinks = document.querySelectorAll(".select2");

                              function BreadSelect() {
                                var BreadMenu = document.querySelector(".bread");
                                if (BreadMenu) {
                                  BreadMenu.classList.remove("bread");
                                }
                                this.classList.add("bread");
                              }
                              
                              for (var i = 0; i < breadLinks.length; i++) {
                                breadLinks[i].addEventListener("click", BreadSelect);
                              }
                              </script>`;
        $("#tab2").append(temp_html);
      }
    },
  });
}
function showSauces() {
  $.ajax({
    type: "GET",
    url: "api/list/sauce",
    data: {},
    success: function (response) {
      let sauce = response["all_sauce"];
      for (let i = 0; i < sauce.length; i++) {
        let img = sauce[i]["img"];
        let name = sauce[i]["name"];
        let calories = sauce[i]["cal"];
        let summary = sauce[i]["sum"];

        let temp_html = `
                              <div class="SandwichMenu">
                                  <div class="background">
                                      <div class="firstimg">
                                          <div class="top">
                                              <span class="topName">${summary}</span>
                                              <span>${calories}</span>
                                          </div>
                                          <img class="sandwichimg" src="${img}"/>
                                      </div>
                                  </div>
                                  <div>
                                    
                                    <button class="select3" value="menu01">${name}</button>
                                  </div>
                              </div>
                              <script>
                              var sauceLinks = document.querySelectorAll(".select3");

                              function SauceSelect() {
                                var SauceMenu = document.querySelector(".sauce");
                                if (SauceMenu) {
                                  SauceMenu.classList.add("sauce");
                                }
                                this.classList.add("sauce");
                              }

                              for (var i = 0; i < sauceLinks.length; i++) {
                                sauceLinks[i].addEventListener("click", SauceSelect);                  
                              }
                              
                              
                              </script>`;
        $("#tab3").append(temp_html);
      }
    },
  });
}
function showCheese() {
  $.ajax({
    type: "GET",
    url: "/api/list/cheese",
    data: {},
    success: function (response) {
      let cheese = response["all_cheese"];
      for (let i = 0; i < cheese.length; i++) {
        let img = cheese[i]["img"];
        let name = cheese[i]["name"];
        let calories = cheese[i]["cal"];
        let summary = cheese[i]["sum"];

        let temp_html = `
                              <div class="SandwichMenu">
                                  <div class="background">
                                      <div class="firstimg">
                                          <div class="top">
                                              <span class="topName">${name}</span>
                                              <span>${calories}</span>
                                          </div>
                                          <img class="sandwichimg" src="${img}"/>
                                      </div>
                                  </div>
                                  <div>
                                      <button class="select4" value="menu01">${name}</button>
                                  </div>
                              </div>
                              <script>
                                var cheeseLinks = document.querySelectorAll(".select4");

                              function CheeseSelect() {
                                var CheeseMenu = document.querySelector(".cheese");
                                if (CheeseMenu) {
                                  CheeseMenu.classList.remove("cheese");
                                }
                                this.classList.add("cheese");
                              }

                              for (var i = 0; i < cheeseLinks.length; i++) {
                                cheeseLinks[i].addEventListener("click", CheeseSelect);
                              }

                              </script>`;
        $("#tab4").append(temp_html);
      }
    },
  });
}
