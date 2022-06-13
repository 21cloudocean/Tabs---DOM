const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //remove a class from other buttons
    btns.forEach(function (btn) {
      //移除所有btn上的active
      btn.classList.remove("active");
    });
    //给点击的target加上active，这个放到forEach里边和外边效果是一样的
    e.target.classList.add("active");
    //hide other articles
    //1 隐藏所有article
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    //2 给id一致的article加active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
