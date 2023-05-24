const add_form = document.querySelector(".add_form");

let users = [];

add_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { firstname, lastname, age } = event.target;
    const user = {
        id: Date.now(),
        firstName: firstname.value,
        lastName: lastname.value,
        age: age.value,
    };

    users.push(user);

    rerender();

    event.target.reset();
});

const rerender = () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    users.forEach((user) => {
        const card = document.createElement("div");
        const text = document.createElement("p");
        card.classList.add("card");
        text.innerText = `${user.firstName} ${user.lastName}, ${user.age} years old`;

        card.append(text);

        card.addEventListener("dblclick", () => deleteUser(user.id));

        container.append(card);
    });
};

const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    rerender();
};