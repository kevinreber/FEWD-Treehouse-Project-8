// controls # of api results
const apiResults = '?results=12';
const url = 'https://randomuser.me/api/' + apiResults;
const employeeList = document.getElementById('employee-list');
const overlay = document.getElementById('overlay');
// const cardsHTML = document.querySelectorAll('.employee-card');
// let cards = Array.from(cardsHTML);
const cards = employeeList.children;
let employeeData = {};

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .then(storeData)
        .then(displayData)
        //.then(res => console.log(res))
        .catch(error => console.log('Looks like there was a problem', error))
}

fetchData(url);

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function storeData(data) {
    employeeData = data.results;
    return employeeData;
}

function displayData(data) {
    let html = '';
    data.forEach(employee => {
        const picture = employee.picture.large;
        const firstName = employee.name.first;
        const lastName = employee.name.last;
        const email = employee.email;
        const city = employee.location.city;

        html += `
        <div class="employee-card">
            <img src="${picture}"></img>
            <div class="card-text">
                <h3 class="card-name">${firstName} ${lastName}</h3>
                <p class="card-email">${email}</p>
                <p class="card-city">${city}</p>
            </div>
        </div>
        `;
    });
    employeeList.innerHTML = html;

    Array.from(cards).forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log(index)
            modalDisplay(employeeData[index])
        });
    });
}

function modalDisplay(employee) {
    const picture = employee.picture.large;
    const firstName = employee.name.first;
    const lastName = employee.name.last;
    const email = employee.email;
    const street = `${employee.location.street.number} ${employee.location.street.name}`;
    const city = employee.location.city;
    const state = employee.location.state;
    const postcode = employee.location.postcode;
    const phone = employee.phone;
    const address = `${street} ${city}, ${state} ${postcode}`;
    const dob = new Date(employee.dob.date);
    const birthday = formatDate(dob);
    let html = `
        <div class="modal-overlay">
            <div class="modal-card">
                <svg class="modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/> 
                </svg>
                <img class="modal-img" src="${picture}"></img>
                <div class="modal-contact">
                    <h3 class="modal-name">${firstName} ${lastName}</h3>
                    <p class="modal-email">${email}</p>
                    <p class="modal-city">${city}</p>
                </div>
                <hr>
                <div class="modal-info">
                    <p>${phone}</p>
                    <p>${address}</p>
                    <p>Birthday: ${birthday}</p>
                </div>
            </div>
        </div>
        `;
    overlay.innerHTML = html;
    overlay.style.display = 'block';
};

function formatDate(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear().toString().substr(-2);

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return date = `${dd}/${mm}/${yy}`;
}

//Close modal by clicking outside modal card or close button
overlay.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    if (e.target.classList.contains('modal-close') || e.target.parentElement.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
        overlay.style.display = 'none';
    }
});