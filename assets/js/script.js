//task 1


class CustomMach {
    constructor(value) {
        this.value = value;
    }

    plus(number) {
        this.value += number;
        return this;
    }

    minus(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        this.value /= number;
        return this;
    }


}

const result = new CustomMach(50)
    .plus(6)
    .minus(30)
    .multiply(3)
    .divide(2);


console.log(result.value);


//task 2


const numbers = [5, 20, 3, 15, 8];


numbers.sort((a, b) => b - a);


console.log(numbers);


//task 3

function wordSum(text) {

    const words = text.split(" ");


    return words.map(word => {

        let sum = 0;


        for (let char of word) {

            sum += char.charCodeAt(0);

        }


        return sum;

    });

}

console.log(wordSum("abc de"));



//task 4

const universityGroup = {

    groupName: "CS-101",

    students: [],


    addStudent(student) {

        this.students.push(student);

    },


    removeStudent(id) {

        this.students = this.students.filter(
            student => student.id !== id
        );

    },


    getStudent(id) {

        return this.students.find(
            student => student.id === id
        );

    },


    getAverageGrade(id) {

        const student = this.getStudent(id);


        if (!student) {
            return "Student not found";
        }


        const sum = student.grade.reduce(
            (acc, curr) => acc + curr,
            0
        );


        return sum / student.grade.length;

    },


    addGrade(id, grade) {

        const student = this.getStudent(id);


        if (student) {

            student.grade.push(grade);

        }

    },


    getTopStudent() {


        if (this.students.length === 0) {
            return null;
        }


        return this.students.sort(
            (a, b) =>
                this.getAverageGrade(b.id) -
                this.getAverageGrade(a.id)
        )[0];


    },

    getAllStudents() {

        return this.students;

    },


    getBestStudentName() {

        const student = this.getTopStudent();


        return student ? student.name : null;

    }

};



universityGroup.addStudent({

    id: 1,

    name: "Ali",

    age: 20,

    grade: [80, 90, 70]

});


universityGroup.addStudent({

    id: 2,

    name: "Leyla",

    age: 21,

    grade: [100, 95, 90]

});


universityGroup.addStudent({

    id: 3,

    name: "Murad",

    age: 22,

    grade: [70, 75, 80]

});





console.log(
    universityGroup.getAllStudents()
);


console.log(
    universityGroup.getStudent(2)
);


console.log(
    universityGroup.getAverageGrade(1)
);


universityGroup.addGrade(1, 100);


console.log(
    universityGroup.getAverageGrade(1)
);


console.log(
    universityGroup.getTopStudent()
);


console.log(
    universityGroup.getBestStudentName()
);


universityGroup.removeStudent(3);


console.log(
    universityGroup.getAllStudents()
);