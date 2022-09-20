(() => {

  const app = {
    init() {
      this.cacheElements();
      this.scrollRatio();
      this.scrollToTop();
      this.generateCurrentTime();
    },
    cacheElements() {
      this.$scrollToTopBtn = document.querySelector(".scroll-btn");
      this.$currentTime = document.querySelectorAll(".time");
    },
    scrollRatio() {
      document.addEventListener("scroll", () => {
        const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const GOLDEN_RATIO = 0.1;

        if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
          this.$scrollToTopBtn.style.display = "block";
        } else {
          this.$scrollToTopBtn.style.display = "none";
        }
      }), false;
    },
    scrollToTop() {
      this.$scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }), false;
    },
    generateCurrentTime() {
      const today = new Date();
      let minutes = today.getMinutes()
      minutes = minutes > 9 ? minutes : '0' + minutes;
      const time = `${today.getHours()}:${minutes}`

      for (element of this.$currentTime) {
        element.innerHTML = time;
      }
    }
  }

  app.init();

})();