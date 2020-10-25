const openNav = () => {
  document.getElementById("mySidenav").style.width = "10%";
  document.getElementById("main").style.marginLeft = "10%";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};
