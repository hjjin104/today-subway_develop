$(document).ready(function () {
  showResult();
});

function showResult() {
  $.ajax({
    type: "GET",
    url: "/check/check",
    data: {},
    success: function (response) {
      let recipes = response["all_mychoices"];
      for (let i = 0; i < recipes.length; i++) {
        // let userid = recipes[i]['userid']
        let sandwich = recipes[i]["sandwich"];
        let bread = recipes[i]["bread"];
        let sauce = recipes[i]["sauce"];
        let cheese = recipes[i]["cheese"];
        let comment = recipes[i]["comment"];
        let img = recipes[i]["img"];

        let temp_html = ` <div style="position: absolute; left: 23vw; top: 3vw">
            <img
              class="img-title"
              id="img-title"
              src="../static/img/resultpage/제목.png"
            />
          </div>
          <div style="position: absolute; left: 25vw; top: 7vw">
            <img
              class="bar-title"
              id="bar-title"
              src="../static/img/resultpage/bar_title.png"
            />
          </div>

          <!--   바 -->
          <div style="position: absolute; left: 33vw; top: 15vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="../static/img/resultpage/bar_bread.png"
            />
          </div>
          <div style="position: absolute; left: 34.5vw; top: 20.5vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="../static/img/resultpage/bar_sauce.png"
            />
          </div>
          <div style="position: absolute; left: 34vw; top: 25vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="../static/img/resultpage/bar_cheese.png"
            />
          </div>

          <!--   샌드위치 -->

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 6.9vw; top: 13vw; font-size: 1.8vw; font-weight: 600;"
          >
            <span class="name">[${sandwich}]</span>
          </div>
          
          <div
            id="bread"
            style="
              position: absolute;
              left: 45vw;
              top: 14.4vw;
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
              left: 47vw;
              top: 20vw;
              font-size: 2vw;
              font-weight: 600;
              width: 26vw;
            "
          >
            ${sauce}
          </div>
          
          <div
            id="cheese"
            style="
              position: absolute;
              left: 43.8vw;
              top: 25.5vw;
              font-size: 2vw;
              font-weight: 600;
            "
          >
            ${cheese}
          </div>
          <div style="position: absolute; left: 8vw; top: 12vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="${img}"
            />
          </div>


          <!--   팁박스 -->

          <div style="position: absolute; left: 6.8vw; top: 30vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="../static/img/resultpage/팁뱃지.png"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 12vw; top: 32vw">
          </div>

          <div id="input-tip" class="input-tip2" style="font-weight: 500; position: absolute; left: 12vw; top: 32.2vw; z-index: +1">
            <span>${comment}</span> </div>

          <!--   데코 오브젝트 -->


          <div style="position: absolute; left: 2vw; top: 6.5vw; z-index: +1;">
            <img
                    class="img-tape"
                    src="../static/img/resultpage/tape.png"
            />
          </div>

          <div style="position: absolute; left: 65vw; top: 27vw; z-index: +1;">
            <img
                    class="img-tape"
                    src="../static/img/resultpage/tape.png"
            />
          </div>

          

`;

        $(".result-box").append(temp_html);
      }

    },
  });
}

function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}