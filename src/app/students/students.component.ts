import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    studentId = '9958';
    studentName = 'bamossza';

    allowNewStudent = false;

    studentCreationStatus = 'No student created!';

    studentNewName = '';

    constructor() {

        setTimeout(() => {
            this.allowNewStudent = true;
        }, 3000);

    }

    ngOnInit() {

    }

    onUpdateStudentName(event: Event) {
        this.studentNewName = (<HTMLInputElement>event.target).value;
    }

    onCreateStudent() {
        this.studentCreationStatus = 'Student created';
    }

    onGetId() {
        return this.studentId;
    }

    onGetName() {
        return this.studentName;
    }
}
