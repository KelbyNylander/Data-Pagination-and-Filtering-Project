/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list, page) {
   //estabish the size of pages and the first and last student on an individual page
   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9) - 1;
   //selected Ul to insert our text into
   const studentList = document.querySelector('ul');
   studentList.innerHTML = '';
   //loops though the data array between the established indexes and displays page on the screen
  for (i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) { 
      let studentItem = ` <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">${list[i].registered.date}</span>
      </div>
    </li>`;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
}
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numOfPages = Math.ceil ( data.length / 9 );
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';
    for ( i = 1; i <= numOfPages; i++ ) {
      let button = `<li>
      <button type="button">${[i]}</button>
   </li>`
   linkList.insertAdjacentHTML('beforeend', button);
   }
   document.querySelector('button').className = 'active';
   console.log(linkList);
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active'
         showPage(data, [e.target.textContent])
      }
    });
}
showPage(data, 1);
addPagination(data);
