![avatar](https://image.shutterstock.com/image-vector/vector-avatar-icon-260nw-383411185.jpg)

# Maryna Tsybakova
## Front-end developer
### marusia234@gmail.com 
### discord:marsikus93
* __Education__: 
   + MSLU(2015) English,French and Deutch Teaching, Computer Linguist;
   + BSU IBMT(2018) WEB-design
   + It-kamasutra school(at the moment)
   

* __Working skills__:
   + HTML,CSS
   + React
   + JS
   + MSQL
  
* _Working expirience_:
  + Gymnasium English and French teacher;
  + Sale manager assistent in IT company;
  + Computer Linguist(freelance)


* _Languages skills_:
   + Native languages: Russian and Belarussian
   + English(C1)
   + French (B2)
   + German(A1)
* _Links:_ 
 + LinkedIn: https://www.linkedin.com;
 + Codewars: https://www.codewars.com/users/Marsikus93
 
 * _Codewars problems solving example:_
 + __DESCRIPTION:__
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
```
function toCamelCase(str){
  if (str.search ("-")>= 0) {
return str
  .split("-")
  .map(
  (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
  )

  .join ("");
}
  
else {
  return str
    .split("_")
    .map(
    (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
    )
    .join ("");
}
  }
```
