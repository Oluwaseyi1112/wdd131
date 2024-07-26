function greetUser() {
    const message = 'Welcome to my portfolio!';
    alert(message);
}

// Adding event listener to greet user on page load
document.addEventListener('DOMContentLoaded', () => {
    greetUser();
});

// Example of using an array and its method
const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' }
];

projects.forEach(project => {
    console.log(project.title);
});

// Example of object usage
const userProfile = {
    name: 'John Doe',
    age: 30,
    getDetails() {
        return `${this.name}, ${this.age} years old`;
    }
};

console.log(userProfile.getDetails());
