import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'note-app/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

// function createDb() {
//   // let localDb = 'test';
//   // config.emberPouch.localDb;

//   assert('emberPouch.localDb must be set', !isEmpty(localDb));

//   let localDb = new PouchDB('test');
//   let remoteDb = new PouchDB('http://localhost:5984/offline');

//   if (config.emberPouch.remoteDb) {
//     let remoteDb = new PouchDB(config.emberPouch.remoteDb);

//     db.sync(remoteDb, {
//       live: true,
//       retry: true
//     });
//   }

//   return db;
// }

// export default Adapter.extend({
//   init() {
//     this._super(...arguments);
//     this.set('db', createDb());
//   }
// });


// PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/offline');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the conection is lost
});

export default Adapter.extend({
  db: db
});