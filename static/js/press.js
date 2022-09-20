(() => {

  const pressArticles = {
    init() {
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      this.$pressReleases = document.querySelector(".press_releases");
      this.$inThePress = document.querySelector(".in_the_press");
    },
    generateUI() {
      this.$pressReleases.innerHTML = this.generateArticles(pressReleases);
      this.$inThePress.innerHTML = this.generateArticles(inThePress);
    },
    generateArticles(items) {
      return items.map((article) => {
        return `
          <article class="grid__item">
          <img loading="lazy" src="static/img/pictures/${article.cover}">
            <h3>${article.subtitle}</h3>
            <h2>${article.title}</h2>
            <p class="p--large">${article.description}</p>
            <a class="link link--underline" href="${article.link}">${article.type}</a> 
          </article>`
      }).join("");
    }
  }

  pressArticles.init();

})();