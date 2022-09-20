(() => {

  const artArticles = {
    init() {
      this.cacheElements();
      this.generateCategoryFilter();
      this.generateYearFilter();
      this.addEventListeners();
      this.generateArtArticles();
    },
    cacheElements() {
      this.$filterCategory = document.querySelector(".filter__category");
      this.$filterYear = document.querySelector(".filter__year");
      this.$artArticles = document.querySelector(".art_articles");
    },
    generateCategoryFilter() {
      const output = [];
      art.forEach(item => item.tags.forEach(tag => output.push(tag)));
      this.categoryTags = [...new Set(output)];

      this.$filterCategory.innerHTML = `
      <ul class="filter-menu ul_none">
      <li><a class="show_all link link--underline link--underline_none_hover">Show all</a></li>
      ${this.generateCategoryTag(this.categoryTags)}
      </ul>`
    },
    generateCategoryTag(arr) {
      return arr.map(tag => `<li><a data-target="${tag}" class="category_tag link">${tag}</a></li>`).join("");
    },
    generateYearFilter() {
      const output = [];
      for (i = 0; i < art.length; i++) {
        output.push(art[i].year);
      }
      this.yearTags = [...new Set(output)];

      this.$filterYear.innerHTML = `
      <ul class="year-menu ul_none">
      <li><a class="show_all link link--underline link--underline_none_hover">Show all</a></li>
      ${this.generateYearTag(this.yearTags)}
      </ul>
      <a class="link link--underline link--small link--blue_hover link--underline_hover">List view</a><a class="link link--small link--blue_hover">Map view</a>`
    },
    generateYearTag(arr) {
      return arr.map(tag => `<li class="tag"><a class="link--blue_hover underline_none" href="art-and-exhibitions/index.html#${tag}" class="link">${tag}</a></li>`).join("");
    },
    generateArtArticles() {
      this.$artArticles.innerHTML = this.generateOverview();
    },
    generateOverview() {
      return this.yearTags.map(year => `${this.filterArticles(year)}`).join("");
    },
    filterArticles(year) {
      let items = this.categoryFilter === null ? art : art.filter(item => item.tags.includes(this.categoryFilter));
      items = items.filter(article => article.year === year);

      if (items.length > 0) {

        let output = `
        <div class="year_title">
        <h2 id="${year}">${year}</h2>
        <div class="item"></div> 
        </div>`

        items.map((article) => {
          if (article.year === year) {
            output += `
            <article class="art_article margin--medium">
                <div class="art_article__title">
                    <a href="art-and-exhibitions/detail/index.html" class="h2--link link--blue_hover link--underline_hover">${article.title}</a>
                    <h3 class="h3--black">${article.subtitle}</h3>
                    <h3>${(article.tags).join(" / ")} ${this.generateArticleLocation(article.location)}</h3>
                    </div>
                <div class="art_article__img-container">
                ${this.generateImageContainer(article.images)}
                </div>
            </article>`
          }
        })
        return output;
      } else {
        return "";
      }
    },
    generateArticleLocation(item) {
      if (item === null) {
        return "" 
      } else {
        return `- ${item}`
      }
    },
    generateImageContainer(items) {
      return items.map((img) => {
        return `<img src="art-and-exhibitions/images/${img}" loading="lazy">`
      }).join("");
    },
    addEventListeners() {
      this.$categoryTagElements = document.querySelectorAll(".category_tag");
      this.$showAllElements = document.querySelectorAll(".show_all");
      this.categoryFilter = null;

      for (const tag of this.$categoryTagElements) {
        tag.addEventListener("click", () => {
          const category = tag.dataset.target;
          this.categoryFilter = category;
          this.generateArtArticles();
        }), false;
      }

      for (const showAllBtn of this.$showAllElements) {
        showAllBtn.addEventListener("click", () => {
          this.categoryFilter = null;
          this.generateArtArticles();
        }), false;
      }
    },
  };

  artArticles.init();

})();