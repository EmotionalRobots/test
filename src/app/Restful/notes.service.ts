import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './Models/note';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})


export class NotesService {
  static noteToUpdate: Note;

  private getNoteUrl = 'http://localhost:8080/NoteKeeper/rest/notes/view/';
  private getNotesUrl = 'http://localhost:8080/NoteKeeper/rest/notes/viewAll/';
  private updateNoteUrl = 'http://localhost:8080/NoteKeeper/rest/notes/update/';
  private deleteNoteUrl = 'http://localhost:8080/NoteKeeper/rest/notes/delete/';
  private addNoteUrl = 'http://localhost:8080/NoteKeeper/rest/notes/add/';

  notes: Note[];

  constructor(private http: HttpClient) {
    this.getNotes().subscribe(data => { this.notes = data; });
  }

  public getNotes() {
    return this.http.get<Note[]>(this.getNotesUrl);
  }
  public getNote(x: number) {
    return this.http.get<Note>(this.getNoteUrl + x);
  }
  // TODO
  public updateNote(note: Note) {
    return this.http.get(this.updateNoteUrl + NotesService.noteToUpdate.noteId + '/' + note.title + '/' + note.note + '/' +
      note.stickydate);
  }
  public updateNotesStatus(id) {
    return this.http.get(this.updateNoteUrl + id + '/statusUpdate/completed');
  }

  public deleteNote(x: number) {
    return this.http.get(this.deleteNoteUrl + x);
  }
  // {title}/{note}/{stickyDate}/{status}'
  public addNote2(title: string, note: string, stickyDate: string, status: string) {
    this.http.get(this.addNoteUrl + title + '/' + note + '/' + stickyDate + '/' + status);
    console.log('note added');
  }

  addNote(note: Note) {
    const url = this.addNoteUrl + note.title + '/' + note.note + '/' + note.stickydate;
    console.log('note added + ' + url);
    return this.http.get(url);

  }

  setUpdateNote(note: Note) {
    NotesService.noteToUpdate = note;
  }
}
