(() => {

  const atelierArticles = {
    init() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      this.$atelierSection = document.querySelector(".articles--atelier");
    },
    generateUI() {
      this.$atelierSection.innerHTML = this.generateHTMLForAtelierSection();
    },
    generateHTMLForAtelierSection() {
      return atelier.map((article) => {
        return `
          <article class="article--gridOfThree">
          <img loading="lazy" src="static/img/pictures/${article.cover}">
          <h3>${article.subtitle}</h3>
            <h2>${article.title}</h2>
            <p class="p--large">${article.description}</p>
            <a class="link link--underline" href="${article.link}">Learn more</a> 
          </article>
      `
      }).join("");
    }
  };

  atelierArticles.init();

})();