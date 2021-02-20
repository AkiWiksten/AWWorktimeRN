import {openDatabase} from 'react-native-sqlite-storage';
import React, {useEffect} from 'react';
var db = openDatabase({name: 'WorkTimeDatabase.db'});

export const InitDatabase = () => {
  db.transaction(function (txn: any) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
      [],
      function (tx: any, res: any) {
        console.log('item:', res.rows.length);
        if (res.rows.length === 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_user', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
            [],
          );
        }
      },
    );
  });
};
