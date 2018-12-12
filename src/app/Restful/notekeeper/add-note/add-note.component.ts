import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../../notes.service';
import { Note } from '../../Models/note';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
myForm;
myNote: Note;
  constructor(private service: NotesService, private router: Router) { }

  ngOnInit() {
  }

  addNote(form: NgForm) {
    this.myForm = form;
    // console.log(form.value);
    this.myNote = form.value;
    console.log('mynote: ' + this.myNote.note);
    // this.service.addNote(this.myNote.title, this.myNote.note, this.myNote.stickydate, this.myNote.status);
    this.service.addNote(this.myNote).subscribe(
      res => {
        console.log(res);
      }
    );

    this.router.navigateByUrl('/noteKeeperHome');

  }
}


