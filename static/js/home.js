(() => {

  const home = {
    init() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      this.$atelierArticles = document.querySelector(".atelier_articles");
      this.$artArticles = document.querySelector(".art_articles");
    },
    generateUI() {
      this.$atelierArticles.innerHTML = this.generateArticles(atelier);
      this.$artArticles.innerHTML = this.generateArticles(art);
    },
    generateArticles(array) {
      let output = "";

      for (article of array) {
        if (article.highlight === true) {
          output += ` 
          <article class="grid__item">
            <img loading="lazy" src="static/img/pictures/${article.cover}"" alt="">
            <h3>${this.generateSubtitle(array)}</h3>
            <h2>${article.title}</h2>
            <p class="p--large">${article.description}</p>
            <a class="link link--underline" href="art-and-exhibitions/detail/index.html">Learn more</a>
          </article>`
        }
      }
      return output;

    },
    generateSubtitle(array) {
      if (array === atelier) {
        return article.subtitle
      } else {
        return `${(article.tags).join(" / ")} - ${article.location}`
      }
    }
  }

  home.init();

})();