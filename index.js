document.getElementById("fetchDataButton").addEventListener("click", fetchUserData);

function fetchUserData() {
    document.getElementById("statusMessage").textContent = "Loading...";
    fetch("https://randomuser.me/api/?results=5")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            displayUserData(data.results);
            document.getElementById("statusMessage").textContent = "Success!";
        })
        .catch(error => {
            document.getElementById("statusMessage").textContent = "Error fetching data!";
            console.error("There has been a problem with your fetch operation:", error);
        });
}

function displayUserData(users) {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        // Виведення зображення (picture)
        const userImage = document.createElement("img");
        userImage.src = user.picture.large;
        userCard.appendChild(userImage);

        // Виведення імені (name)
        const userName = document.createElement("p");
        userName.innerHTML = `<strong>Name:</strong> ${user.name.first} ${user.name.last}`;
        userCard.appendChild(userName);

        // Виведення мобільного телефону (cell)
        const userCell = document.createElement("p");
        userCell.innerHTML = `<strong>Cell:</strong> ${user.cell}`;
        userCard.appendChild(userCell);

        // Виведення електронної пошти (email)
        const userEmail = document.createElement("p");
        userEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
        userCard.appendChild(userEmail);

        // Виведення координат (coordinates)
        const userCoordinates = document.createElement("p");
        userCoordinates.innerHTML = `<strong>Coordinates:</strong> Lat: ${user.location.coordinates.latitude}, Lon: ${user.location.coordinates.longitude}`;
        userCard.appendChild(userCoordinates);

        userContainer.appendChild(userCard);
    });
}
