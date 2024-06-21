
const totalCreditsElem = document.getElementById('total_credits');
const availableCourses = document.getElementById('available_courses');
const selectedCourses = document.getElementById('selected_courses');
const selectButton = document.getElementById('button');

const totalCreditsManager = (() => {
    let totalCredits = 0;

    const updateTotalCredits = (credits, add) => {
        if (add) {
            totalCredits += credits;
        } else {
            totalCredits -= credits;
        }
        totalCreditsElem.textContent = totalCredits;
    };

    const getTotalCredits = () => totalCredits;

    return {
        updateTotalCredits,
        getTotalCredits
    };
})();

const selectioncourses = (() => {
    const courses = [];
    const addCourse = (course) => {
        courses.push(course);
    };
    removeCourse = (course) => {
        const index = courses.indexOf(course);
        if (index !== -1) {
            courses.splice(index, 1);
        }
    }
    const getCourses = () => courses;
    return {
        removeCourse,
        addCourse,
        getCourses
    };
})();


class Course {
    constructor(id, name, type, credit) {
        this.id = id;
        this.name = name;
        if (type === true) {
            this.type = 'Compulsory';
        }
        else if (type === false) {
            this.type = 'Elective';
        }
        this.credit = credit;
        this.selected = false;

        this.element = document.createElement('div');
        this.element.className = 'course';
        this.element.id = `${this.id}`;
        this.element.innerHTML = `
            ${this.name}<br>
            Course Type: ${this.type}<br>
            Course Credit: ${this.credit}
        `;
        this.element.addEventListener('click', () => {
          if (selectButton.disabled === false){
            this.toggleSelection();
          }  
    });
    }

    toggleSelection() {
        if (!this.selected) {
            if (totalCreditsManager.getTotalCredits() + this.credit > 18) {
                alert('You can only choose up to 18 credits in one semester');
                return;
            }
            this.element.classList.add('selected');
            this.selected = true;
            totalCreditsManager.updateTotalCredits(this.credit, true);
            selectioncourses.addCourse(this);
        } else {
            this.element.classList.remove('selected');
            this.selected = false;
            totalCreditsManager.updateTotalCredits(this.credit, false);
            selectioncourses.removeCourse(this);
        }
    }


    addTo(box) {
        box.appendChild(this.element);
    }

    moveTo(box) {
        this.element.classList.remove('selected');
        this.selected = false;
        box.appendChild(this.element);
    }
}





selectButton.addEventListener("click", () => { 
    const total=totalCreditsManager.getTotalCredits();
    
    if (confirm('You have chosen' + total + ' credits for this semester. You cannot change once you submit. Do you want to confirm?')) {
        const transfer= selectioncourses.getCourses();
        transfer.forEach(course => {
            course.moveTo(selectedCourses);
        });
        selectButton.disabled = true;
    }

});

const api_main= 'http://localhost:4232/courseList';


const courseslist = async () => {
    const response = await fetch(api_main);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch posts");
    }
    return data;
};

const initializeCourses = async () => {
    try {
        let data = await courseslist();
        console.log(data); // Log the data to see its structure
        if (!Array.isArray(data)) {
            data = data.courses; // Adjust this line according to the actual structure
        }
        data.forEach(course => {
            const newCourse = new Course(course.courseId, course.courseName, course.required, course.credit);
            newCourse.addTo(availableCourses);
        });
    } catch (error) {
        console.error("Error initializing courses:", error);
    }
};

initializeCourses();