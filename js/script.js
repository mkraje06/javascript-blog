'use strict';


const titleClickHandler = function(event){
    console.log('Link was clicked!');
    event.preventDefault();
    const clickedlink = this;
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

    /* add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
}

  
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article.post');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
    
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    }
    
    /* add class 'active' to the correct article */
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';

  function generateTitleLinks(customSelector = ''){

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

   function generateTitleLinks(){ 

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for (let article of articles){  

  /* get the article id */
  const articleId = article.getAttribute('id');

  /* find the title element */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
  /* get the title from the title element */


  /* create HTML of the link */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

  /* insert link into titleList */
  html = html + linkHTML;
      
}  
  titleList.innerHTML = html;

}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
for(let link of links){
link.addEventListener('click', titleClickHandler);
}
