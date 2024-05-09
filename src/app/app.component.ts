import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-w3';
  public index = 0;
  public modelTitle = '';
  public modelContent = '';
  public selectedNote = -1;
  public requiredLenght = true;

  public Notes = [
    {
      Title: 'Put you title here',
      Content: 'Example'
    }
  ];

  /**
   * newNote
   */
  public newNote() {
    if (this.modelTitle.length > 5 && this.modelContent.length > 7) {
        this.Notes.push({
          Title: this.modelTitle,
          Content: this.modelContent
        });
        this.reset;
    }
    else{
      this.requiredLenght = false;
    }
  }

  /**
   * saveNote
   */
  public saveNote() {
    if (this.modelTitle.length > 5 && this.modelContent.length > 7) {
        this.Notes[this.index].Title = this.modelTitle;
        this.Notes[this.index].Content = this.modelContent;
        this.reset;
    }
    else {
      this.requiredLenght = false;
    }
  }

  /**
   * editNote
   */
  public editNote(index) {
    this.index = index;
    this.modelTitle = this.Notes[index].Title;
    this.modelContent = this.Notes[index].Content;
  }

  /**
   * cancelEditNote
   */
  public cancelEdit(): void {
    // Reset form fields or revert changes made during editing
    this.modelTitle = this.Notes[this.index].Title;
    this.modelContent = this.Notes[this.index].Content;
  }

  /**
   * deleteNote
   */
  public deleteNote(index: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this note?');
    if (confirmed) {
      this.Notes.splice(index, 1);
      console.log(`Note at index ${index} deleted successfully.`);
      // Handle any additional logic (e.g., updating the UI)
    } else {
      // User canceled, do nothing
    }
  }

  /**
   * selectNote
   */
  public selectNote(index) {
    this.selectedNote = index;    
  }

  /**
   * reset
   */
  private reset() {
    this.modelTitle = '';
    this.modelContent = '';  
  }
}
