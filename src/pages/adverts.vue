<template lang="pug">
div 
    //- include ./use-svg.pug
    
    div(class="header") 
        div(class="wrapper")
          div(class="header__row")
            svg(class="hamburger-svg")
              use(xlink:href="#icon-hamburger")
            a(class="logo" href="/")
                img(class="logo__img" src="img/main-logo.png", alt="logo")
            a(class="header__button--user")
              svg(class="user-svg")
                use(xlink:href="#icon-user")
              svg(class="down-svg")
                use(xlink:href="#icon-down")
          div(class="header__row-button")
              a(class="header__button" href="#") Добавить объявление
              



    div(class="page-overlay__nav hidden")  
      nav(class="nav")
        ul(class="list nav__list")
          li(class="nav__item nav__item--top"): a(class="nav__item-link" href="") X
          li(class="nav__item"): a(class="nav__item-link nav__item-link--active" href="") Объявления
          li(class="nav__item"): a(class="nav__item-link" href="") Магазины
          li(class="nav__item"): a(class="nav__item-link" href="") Услуги
          li(class="nav__item"): a(class="nav__item-link" href="") Блог
          li(class="nav__item"): a(class="nav__item-link" href="") Услуги


    div(class="page")
        div(class="wrapper")

            section(class="breadcrumbs")
                svg(class="back--svg")
                    use(xlink:href="#icon-left")
                a(class="link__back--text" href="/") Главная

            section(class="content")
              div(class="title") Объявления

              div(class="search")
                svg(class="location--svg")
                  use(xlink:href="#icon-location")
                form(class="search-form")
                  input(class="search-form__input" type="text" placeholder="Найти" name="search")

              div(class="catalog")
                a(class="prev-item" href="#")
                  svg(class="prev-item__svg")
                    use(xlink:href="#icon-left")
                
                ul(class="list catalog__list")
                  include ./category-icon.pug
                  +category-icon

                a(class="next-item" href="#")
                  svg(class="next-item__svg" href="#")
                    use(xlink:href="#icon-right")

            section(class="content")
                a(class="button button--filters" href="#") Настроить фильтры

                div(class="adverts-m")
                  ul(class="adverts-m__list")

                    //- include ./advert-one_mobile.pug
                    //- +advert-one_mobile
                    //- +advert-one_mobile
                    //- +advert-one_mobile
                    //- +advert-one_mobile
                    //- +advert-one_mobile


    div(class="footer")
      div(class="wrapper")
        div(class="footer__lang") Язык:
           a(class="footer__lang-link" href="#") Русский
        nav(class="footer__nav")

          ul(class="list footer__list")
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Ads
                li(class="list__item footer__item"): a(class="footer__item-link" href="./services") Shops
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Project blog
          
          ul(class="list footer__list")
                
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Services
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Agreement
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Contact us

          ul(class="list footer__list")
                
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Advertising
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Sitemap
                li(class="list__item footer__item"): a(class="footer__item-link" href="#") Help    

</template>


<script>
export default {
  "name": "Adverts",
};
</script>