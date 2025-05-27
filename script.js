const topBtn = document.getElementById("topBtn");

// 스크롤 이벤트 감지하여 버튼 보이기/숨기기
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// 클릭 시 맨 위로 스크롤
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
