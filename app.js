if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(() => {
        console.log("Status: Offline content ready");
      })
      .catch((e) => {
        console.log("Status: Offline content failed to load", e);
      });
}
const handleRoutes = () => {
  const routeOne = document.getElementById("load-starters")
  const routeTwo = document.getElementById("load-deserts")
  const routeThree = document.getElementById("load-non-veg")
  const routeFour = document.getElementById("load-veg")
  routeOne.addEventListener("click", () => {window.location.href="index.html"})
  routeTwo.addEventListener("click", () => {window.location.href= "deserts.html"})
  routeThree.addEventListener("click", () => {window.location.href= "non-veg.html"})
  routeFour.addEventListener("click", () => {window.location.href= "veg.html"})
}
handleRoutes()