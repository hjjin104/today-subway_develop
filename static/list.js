function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn-top10");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//인기순 list 받아오기
$(document).ready(function () {
  showPopular();
});

function showPopular() {
  $.ajax({
    type: "GET",
    url: "/listing/popular",
    data: {},
    success: function (response) {
      let recipes = response["all_popularchoices"];
      for (let i = 0; i < recipes.length; i++) {
        let id = recipes[i]["_id"]["$oid"];
        let sandwich = recipes[i]["sandwich"];
        let bread = recipes[i]["bread"];
        let sauce = recipes[i]["sauce"];
        let cheese = recipes[i]["cheese"];
        let comment = recipes[i]["comment"];
        let img = recipes[i]["img"];
        let like = recipes[i]["like"];
        let temp_html = `<div class="white-cards">
        <div class="result-box" style="position: relative">
          <div style="position: absolute; left: 31vw; top: 5vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="../static/img/resultpage/bar_bread.png"
            />
          </div>
          <div style="position: absolute; left: 32vw; top: 11vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="../static/img/resultpage/bar_sauce.png"
            />
          </div>
          <div style="position: absolute; left: 31.5vw; top: 16vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="../static/img/resultpage/bar_cheese.png"
            />
          </div>

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 4.5vw; top: 3vw"
          >
            <span class="name">${sandwich}</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 43vw;
              top: 4.4vw;
              font-size: 2vw;
              font-weight: 600;
            "
          >
            ${bread}
          </div>
          <div
            id="sauce"
            style="
              position: absolute;
              left: 45vw;
              top: 11vw;
              font-size: 1.8vw;
              font-weight: 600;
            "
          >
            ${sauce}
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 41vw;
              top: 16.5vw;
              font-size: 2vw;
              font-weight: 600;
            "
          >
            ${cheese}
          </div>
          <div style="position: absolute; left: 5vw; top: 2vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="${img}"
            />
          </div>

          


          <div style="position: absolute; left: 6vw; top: 19vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="../static/img/resultpage/팁뱃지.png"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 8vw; top: 22vw">
          </div>

          <div id="input-tip" class="input-tip2" style="position: absolute; font-weight: 500; left: 8vw; top: 22vw">  
            <span>${comment}</span> 
          </div>

          
          <button onclick="likeSandwich('${id}')"
                        style="position: absolute; top: 21.5vw; left: 66vw;"
                        class="btn-like"
                        id="btn-like"
                        type="submit"
                >
                    <img style="position: absolute; bottom: -2vw; left: -0.6vw;"
                            class="img-like"
                            src="../static/img/listpage/좋아요버튼2.png"/>
          </button>

          <div class="nb-like"
                    style="position: absolute; top: 22.1vw; left: 68.5vw; z-index: +1">
                    <span id="nb-like">${like}</span></div>
        </div>
      </div>`;

        $("#popularSandwich").append(temp_html);
      }
    },
  });
}

//인기순 페이지에서 좋아요 받기
function likeSandwich(id) {
  $.ajax({
    type: "POST",
    url: "/listing/like",
    data: { like_give: id },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}

//최신순 list 받아오기
$(document).ready(function () {
  showRecent();
});

function showRecent() {
  $.ajax({
    type: "GET",
    url: "/listing/list",
    data: {},
    success: function (response) {
      let recent = response["all_mychoices"];
      for (let i = 0; i < recent.length; i++) {
        let id = recent[i]["_id"]["$oid"];
        let sandwich = recent[i]["sandwich"];
        let bread = recent[i]["bread"];
        let sauce = recent[i]["sauce"];
        let cheese = recent[i]["cheese"];
        let comment = recent[i]["comment"];
        let img = recent[i]["img"];
        let like = recent[i]["like"];

        // 여기에 최신순 탭 리스트에 들어갈 html뼈대 붙이면 됩니다
        let temp_html = `<div class="white-cards2">
        <div class="result-box" style="position: relative">
          <div style="position: absolute; left: 31vw; top: 5vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="../static/img/resultpage/bar_bread.png"
            />
          </div>
          <div style="position: absolute; left: 32vw; top: 11vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="../static/img/resultpage/bar_sauce.png"
            />
          </div>
          <div style="position: absolute; left: 31.5vw; top: 16vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="../static/img/resultpage/bar_cheese.png"
            />
          </div>

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 4.5vw; top: 3vw"
          >
            <span class="name">${sandwich}</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 43vw;
              top: 4.4vw;
              font-size: 2vw;
              font-weight: 600;
            "
          >
            ${bread}
          </div>
          <div
            id="sauce"
            style="
              position: absolute;
              left: 45vw;
              top: 11vw;
              font-size: 1.8vw;
              font-weight: 600;
            "
          >
            ${sauce}
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 41vw;
              top: 16.5vw;
              font-size: 2vw;
              font-weight: 600;
            "
          >
            ${cheese}
          </div>
          <div style="position: absolute; left: 5vw; top: 2vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="${img}"
            />
          </div>

          <div style="position: absolute; left: 6vw; top: 19vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="../static/img/resultpage/팁뱃지.png"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 8vw; top: 22vw">
          </div>
          <div id="input-tip" class="input-tip2" style="position: absolute; font-weight: 500; left: 8vw; top: 22vw">  
            <span>${comment}</span> 
          </div>

          <button onclick="likeSandwichRecent('${id}')"
                        style="position: absolute; top: 21.5vw; left: 66vw;"
                        class="btn-like"
                        id="btn-like"
                        type="submit"
                >
                    <img style="position: absolute; bottom: -2vw; left: -0.6vw;"
                            class="img-like"
                            src="../static/img/listpage/좋아요버튼2.png"/>
          </button>

          <div class="nb-like"
                    style="position: absolute; top: 22.1vw; left: 68.5vw; z-index: +1">
                    <span id="nb-like">${like}</span></div>
        </div>
      </div>`;

        $("#newSandwich").append(temp_html);
      }
    },
  });
}
//최신순 페이지 좋아요 받기
function likeSandwichRecent(id) {
  $.ajax({
    type: "POST",
    url: "/listing/list/like",
    data: { like_give: id },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}

// 최신순 검색기능
function filter() {
  var value, name, item, i;
  value = document.getElementById("NewSearch").value.toUpperCase();
  item = document.getElementsByClassName("white-cards2");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
  }
}
// 인기순 검색기능
function filter2() {
  var value, name, item, i;
  value = document.getElementById("PopularSearch").value.toUpperCase();
  item = document.getElementsByClassName("white-cards");

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("name");
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
  }
}
