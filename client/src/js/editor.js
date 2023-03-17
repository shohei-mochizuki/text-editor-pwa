// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

// Create a class Editor
export default class Editor {
  constructor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Show header when it is the first visit
    this.editor.setValue(header);
    
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      // If indexedDB has data, show it in the editor text area
      if (data.content !== "" || data.content !== null) {
        this.editor.setValue(data.content);
      }
    });

    // When the text in the editor is changed, save it to localStorage temporarily
    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus (when cursor is outside of the editor)
    this.editor.on('blur', () => {
      console.log(`The editor has lost focus`);
      putDb(localStorage.getItem('content'));
    });
  }
}
