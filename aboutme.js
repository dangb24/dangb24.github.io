function openAboutMe() {
    document.getElementById("aboutMe").id = "aboutMe2";
    document.getElementById("logo_area").style.marginRight = "-70vw";
    document.getElementById("hidden_carat").id = "show_carat";
    document.getElementById("hidden_p").id = "show_p";
    document.getElementById("carat").id = "hidden_carat";
    document.getElementById("hidden_head").id = "headshot";
  }
  function closeAboutMe() {
    document.getElementById("aboutMe2").id = "aboutMe";
    document.getElementById("logo_area").style.marginRight = "0";
    document.getElementById("show_carat").id = "hidden_carat";
    document.getElementById("show_p").id = "hidden_p";
    document.getElementById("hidden_carat").id = "carat";
    document.getElementById("headshot").id = "hidden_head";
  }