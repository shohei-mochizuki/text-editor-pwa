// Import idb for indexedDB
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id'});
      console.log('jate database created');
    },
  });

// Update content in the database
export const putDb = async (content) => {
  console.log('Post to the database');
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .put() method on the store and pass in the content.
  const request = store.put({content: content, id: 1});
  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}


// Get the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .get() method to get one line of data in the database.
  const request = store.get(1);
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
