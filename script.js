const openNav = () => {
  document.getElementById("mySidenav").style.width = "100px";
  document.getElementById("main").style.marginLeft = "100px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

// add card element generator to automatically generarate cards.
/* 
#use:
document.createElement


#sample output:

<div class="card-container">
          <div class="title"><h2>TITLE</h2></div>
          <div class="img-container">
            <img src="assets/burger.png" alt="" />
            <p>
              Description inserted here <br />
              caption
            </p>
          </div>
          <div class="buttons">
            <form action="">
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
              <div class="input">
                <input type="radio" name="choice" value="hi" />hi <br />
              </div>
            </form>
          </div>
        </div>

*/
