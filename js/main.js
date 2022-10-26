const elList = document.querySelector('.js-list')
const localTocen = localStorage.getItem('token');
if(!localTocen){
   window.location.replace('login.html');
}


let renderUse = (array,node) => {
   array.forEach(el => {
      node.innerHTML += `
      <li>
         <img src="${el.avatar}" alt="${el.first_name}">
         <h3>${el.first_name} ${el.last_name}</h3>
         <a href="mailto:${el.email}">${el.email}</a>
      </li>
      `;
   });
};


async function getUsers() {
   try {
      const response = await fetch('https://reqres.in/api/users?page=1')
      const data = await response.json()
      renderUse(data.data, elList)
   } catch (error) {
      console.log(error);
   }
}
getUsers()