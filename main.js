let istifadeciler = JSON.parse(localStorage.getItem('istifadeciler')) != null ? JSON.parse(localStorage.getItem('istifadeciler')) : [];
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const userEmail = document.getElementById('email');
const userAge = document.getElementById('age');
const addNewUserBtn = document.getElementById('elaveetBtn');
const tbody = document.querySelector('tbody');
const searchInput = document.getElementById('search');

const istifadecileriGoster = () => {
    tbody.innerHTML = "";
    istifadeciler.forEach((user, index) => tbody.innerHTML += `    
     <tr>
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
     </tr>
    `)
}
istifadecileriGoster();

const addNewUser = () => {
    const newUserObj = {
        name: userName.value,
        surname: userSurname.value,
        email: userEmail.value,
        age: userAge.value
    }

    const istifadeciniYoxla = istifadeciler.find(istifadeci => istifadeci.email == newUserObj.email);
    if (!istifadeciniYoxla) {
        console.log(istifadeciniYoxla);
        istifadeciler.push(newUserObj);
        localStorage.setItem('istifadeciler', JSON.stringify(istifadeciler));
        tbody.innerHTML = '';

        istifadeciler.forEach((user, index) => tbody.innerHTML += `
        
         <tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
         </tr>
        `)
    } else {
        console.log(istifadeciniYoxla);
        alert("Artiq bele emaili olan istifadeci movcuddur")
    }


}

addNewUserBtn.addEventListener('click', addNewUser);

searchInput.addEventListener('input', () => {
    const filterUsers = istifadeciler.filter(istifadeci => {
        if (istifadeci.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            return istifadeci;
        }
    })
    tbody.innerHTML = "";
    filterUsers.forEach((user, index) => tbody.innerHTML += `
        
    <tr>
     <td>${index + 1}</td>
     <td>${user.name}</td>
     <td>${user.surname}</td>
     <td>${user.email}</td>
     <td>${user.age}</td>
    </tr>
   `)
})