import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../Models/note';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-notekeeper',
  templateUrl: './notekeeper.component.html',
  styleUrls: ['./notekeeper.component.css']
})
export class NotekeeperComponent implements OnInit {
  notes: Note[] = [];
  noteToUpdate: Note;

  constructor(private service: NotesService, private router: Router) {
    this.service.getNotes().subscribe(data => { this.notes = data; });
  }

  ngOnInit() {
    // this.service.getNotes().subscribe(data => { this.notes = data; });
  }

  onAdd() {

  }

  onDelete(id: number) {
    this.service.deleteNote(id).subscribe(res => {

    });
    this.service.getNotes().subscribe(data => { this.notes = data; });


  }

  check() {
    for (let index = 0; index < this.notes.length; index++) {
      const element = this.notes[index];
      console.log(element);
    }
  }

  refresh(id: number) {
    console.log(id);
    this.service.updateNotesStatus(id).subscribe(res => {

    });

    this.service.getNotes().subscribe(data => { this.notes = data; });

    this.service.getNotes().subscribe(data => { this.notes = data; });


  }

  onUpdate(id: number, title: string, note: string, stickyDate: string) {
    console.log('ON UPDATE');
    this.noteToUpdate = new Note();
    this.noteToUpdate.noteId = id;
    this.noteToUpdate.title = title;
    this.noteToUpdate.note = note;
    this.noteToUpdate.stickydate = stickyDate;
    this.noteToUpdate.status = 'incomplete';
    console.log(this.noteToUpdate);
    this.service.setUpdateNote(this.noteToUpdate);
    this.router.navigateByUrl('/updateNote');

  }

}
