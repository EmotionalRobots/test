import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from '../../Models/note';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  noteToUpdate: Note;
  myNote: Note;
  myForm: NgForm;
  constructor(private service: NotesService, private router: Router) {
    this.noteToUpdate = NotesService.noteToUpdate;
    // console.log('update: ' + this.noteToUpdate);
  }

  ngOnInit() {
    // this.noteToUpdate = NotesService.noteToUpdate;
  }

  updateNote(form: NgForm) {
    this.myForm = form;
    // console.log(form.value);
    this.myNote = form.value;
    // console.log('mynote: ' + this.myNote.note);
    // this.service.addNote(this.myNote.title, this.myNote.note, this.myNote.stickydate, this.myNote.status);
    this.service.updateNote(this.myNote).subscribe(
      res => {
        console.log(res);
      }
    );

    this.router.navigateByUrl('/noteKeeperHome');

  }
}

