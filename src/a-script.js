const subjects = [
    { name: "Combined Maths I", date: "2024-11-25T08:30:00" },
    { name: "second", date: "2024-11-26T08:30:00" },
    { name: "Physics I", date: "2024-11-27T08:30:00" },
    { name: "Physics I", date: "2024-11-28T08:30:00" },
    { name: "Physics I", date: "2024-11-29T08:30:00" },
    { name: "Physics I", date: "2024-11-30T08:30:00" },
    { name: "Physics I", date: "2024-12-02T08:30:00" },
    { name: "Physics I", date: "2024-12-03T08:30:00" },
    { name: "Physics I", date: "2024-12-04T08:30:00" },
    { name: "Physics I", date: "2024-12-05T08:30:00" },
    { name: "Physics I", date: "2024-12-06T08:30:00" },
    { name: "Physics I", date: "2024-12-07T08:30:00" },
    { name: "Physics I", date: "2024-12-08T08:30:00" },
    { name: "Physics I", date: "2024-12-09T08:30:00" },
    { name: "Physics I", date: "2024-12-10T08:30:00" },
    { name: "Physics I", date: "2024-12-11T08:30:00" },
    { name: "Physics I", date: "2024-12-12T08:30:00" },
    { name: "Physics I", date: "2024-12-13T08:30:00" },
    { name: "Physics I", date: "2024-12-16T08:30:00" },
    { name: "Physics I", date: "2024-12-17T08:30:00" },
];

const motivationQuotes = [
    "Believe in yourself and all that you are.",
    "Success is the result of preparation and hard work.",
    "Your only limit is your mind.",
    "Small steps every day lead to big results.",
    "Stay positive, work hard, and make it happen."
];

const today = new Date();
const todaySubjects = subjects.filter(subject => new Date(subject.date).toDateString() === today.toDateString());
const futureSubjects = subjects.filter(subject => new Date(subject.date) > today);

const subjectsContainer = document.getElementById('subjects-container');
const countdownContainer = document.getElementById('countdown-container');
const motivationContainer = document.getElementById('motivation');
const futureExamsList = document.getElementById('future-exams-list');


todaySubjects.forEach(subject => {
    const subjectElement = document.createElement('p');
    subjectElement.textContent = `${subject.name} - ${new Date(subject.date).toLocaleTimeString()}`;
    subjectsContainer.appendChild(subjectElement);
});


function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
    return motivationQuotes[randomIndex];
}
motivationContainer.textContent = getRandomMotivation();


let nextExam = todaySubjects.length > 0 ? todaySubjects[0] : futureSubjects[0];
function updateCountdown() {
    const now = new Date().getTime();
    const examTime = new Date(nextExam.date).getTime();
    const distance = examTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    
    flipElement('days-box', days);
    flipElement('hours-box', hours);
    flipElement('minutes-box', minutes);
    flipElement('seconds-box', seconds);

    
    if (distance < 0) {
        clearInterval(timer);
        countdownContainer.textContent = "Exam in Progress!";
    }
}


function flipElement(elementId, newValue) {
    const element = document.getElementById(elementId);
    const front = element.querySelector('.flip-box-front');
    const back = element.querySelector('.flip-box-back');

    if (front.textContent !== newValue) {
        back.textContent = newValue;
        element.classList.add('flip');
        setTimeout(() => {
            front.textContent = newValue;
            element.classList.remove('flip');
        }, 500);
    }
}

const timer = setInterval(updateCountdown, 1000);


document.getElementById('download-timetable-btn').addEventListener('click', () => {
    window.open('/src/AL-2024.pdf', '_blank'); 
});

