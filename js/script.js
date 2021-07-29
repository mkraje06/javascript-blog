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

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
  link.addEventListener('click', titleClickHandler);  
 }
}
generateTitleLinks();

function generateTags(){
  
  /* find all articles */
  const articles = document.querySelectorAll('.post');
  
  /* START LOOP: for every article: */
  for (let article of articles) {
    
    /* find tags wrapper */
  const tagsWrapper = article.querySelector(optArticleTagsSelector);
    
    /* make html variable with empty string */
    let html = '';
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      
    /* generate HTML of the link */
    const linkHTML = '<li><a href="#tag-' + tag +'">' + tag + '</a></li>';
    console.log('link HTML of the Link');
      
    /* add generated code to html variable */
    
    
    /* END LOOP: for each tag */
    }
    
    /* insert HTML of all the links into the tags wrapper */

  
    /* END LOOP: for every article: */
}

generateTags();

function tagClickHandler(event){
console.log(tagClickHandler);


/* prevent default action for this event */
event.preventDefault();

/* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;

/* make a new constant "href" and read the attribute "href" of the clicked element */
const href = clickedElement.getAttribute('href');

/* make a new constant "tag" and extract tag from the "href" constant */
const tag = href.replace('#tag-', '');
  console.log(tag);

/* find all tag links with class active */
const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

/* START LOOP: for each active tag link */
let html = '';
for (let activeTag of activeTags) {


/* remove class active */
activeTag.classList.remove('active');

/* END LOOP: for each active tag link */
}

/* find all tag links with "href" attribute equal to the "href" constant */
const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

/* START LOOP: for each found tag link */
for (let tagLink of tagLinks) {

/* add class active */
tagLink.classList.add('active');


/* END LOOP: for each found tag link */
}

/* execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  
  /* find all links to tags */


  /* START LOOP: for each link */


    /* add tagClickHandler as event listener for that link */


  /* END LOOP: for each link */
}

addClickListenersToTags();