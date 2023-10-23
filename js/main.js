(() => {
  console.log("IIFE Fired");

  //Variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //Function
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo(e) {
    //console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    //console.log(selected);
    gsap.to(selected, 1, {autoAlpha:1});
  }

  function hideInfo(e) {
    //console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    //console.log(selected);
    gsap.to(selected, 1, {autoAlpha:0});
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  })

})();
