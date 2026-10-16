const backCard=document.querySelector(".back-card");
const paper=document.querySelector(".paper");
function restartAnimation(){
  backCard.style.animation="none";
  paper.style.animation="none";
  void backCard.offsetWidth;
  backCard.style.animation="";
  paper.style.animation="";
}
setInterval(restartAnimation,2800);