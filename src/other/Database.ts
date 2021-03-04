import SQLite from 'react-native-sqlite-storage';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Dispatch} from 'react';
import {SetStateAction} from 'react';
import AppStateCheck from './AppStateCheck';

const dbName = 'workTime.db';
const errorCB = (err: any) => {
  console.log('SQL Error: ' + err);
};

const successCB = (message) => {
  console.log('SQL executed fine: ' + message);
};

const openCB = () => {
  console.log('Database OPENED');
};

const openMyDatabase = () => {
  return SQLite.openDatabase(
    {
      name: dbName,
      createFromLocation: 2,
      location: 'Library',
    },
    openCB,
    errorCB,
  );
};

const executeMySql = (txn: any, sql: string) => {
  txn.executeSql(
    sql,
    [],
    function (tx, res) {
      successCB(res.rows.length + ' 0');
    },
    (tx, err) => errorCB(err),
  );
};

export const DeleteDatabase = () => {
  return SQLite.deleteDatabase(
    {
      name: dbName,
      createFromLocation: 1,
      location: 'Library',
    },
    openCB,
    errorCB,
  );
};

export const InitDatabase = () => {
  console.log('InitDatabase');
  useEffect(() => {
    openMyDatabase().transaction(function (txn) {
      executeMySql(
        txn,
        'CREATE TABLE IF NOT EXISTS WorkTime(Date VARCHAR PRIMARY KEY, ' +
          'BeginTime VARCHAR, EndTime VARCHAR, DailyWorkEstimate VARCHAR, LunchBreakBegin VARCHAR, ' +
          'LunchBreakEnd VARCHAR, LunchBreakEstimate VARCHAR, BreakBegin VARCHAR, BreakEnd VARCHAR, ' +
          'WorkTimeToday VARCHAR, FlextimeToday VARCHAR)',
      );
      executeMySql(
        txn,
        'CREATE TABLE IF NOT EXISTS WorkTimeOnce(' +
          'DailyWorkEstimate VARCHAR, LunchBreakEstimate VARCHAR, ' +
          'WorkTimeTotal VARCHAR, FlextimeTotal VARCHAR)',
      );
      executeMySql(
        txn,
        'CREATE TABLE IF NOT EXISTS WorkTimeProject(' +
          'ProjectName VARCHAR, TimeToday VARCHAR, Date VARCHAR, ' +
          'FOREIGN KEY(Date) REFERENCES WorkHour(Date))',
      );
    });
  }, []);
};

export const UpdateCurrentWorkDay = (
  selectedDate: string,
  beginTime: string,
  endTime: string,
  dailyWorkEstimate: string,
  workTimeTotal: string,
) => {
  console.log('UpdateCurrentWorkDay: ', workTimeTotal);
  let databaseOpened = openMyDatabase();
  databaseOpened.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO WorkTime (Date, BeginTime, EndTime, DailyWorkEstimate) VALUES (?,?,?,?)',
      [selectedDate, beginTime, endTime, dailyWorkEstimate],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log('WorkTime successful.');
        } else {
          Alert.alert('Registration Failed: WorkTime');
        }
      },
    );
  });
  databaseOpened.transaction(function (tx) {
    tx.executeSql(
      'DELETE FROM WorkTimeOnce',
      [],
      (tx, results) => {
        console.log('Results delete', results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log('Delete successful.');
        } else {
          Alert.alert('Delete Failed.');
        }
      },
      (tx, results) => {
        console.log('error: ' + results);
      },
    );
  });
  console.log('UpdateCurrentWorkDay0: ');
  databaseOpened.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO WorkTimeOnce (WorkTimeTotal) VALUES (?)',
      [workTimeTotal],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log('WorkTimeOnce successful.');
        } else {
          Alert.alert('Registration Failed: WorkTimeOnce');
        }
      },
    );
  });
};

export const ReadCurrentWorkDay = (
  selectedDate: string,
  setSelectedDate: Dispatch<SetStateAction<string>>,
  beginTime: string,
  setBeginTime: Dispatch<SetStateAction<string>>,
  endTime: string,
  setEndTime: Dispatch<SetStateAction<string>>,
  dailyWorkEstimate: string,
  setDailyWorkEstimate: Dispatch<SetStateAction<string>>,
  workTimeTotal: string,
  setWorkTimeTotal: Dispatch<SetStateAction<string>>,
) => {
  console.log('ReadCurrentWorkDay-1: ', selectedDate);
  let databaseOpened = openMyDatabase();
  databaseOpened.transaction((tx) => {
    tx.executeSql('SELECT * FROM WorkTimeOnce', [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      console.log('ReadCurrentWorkDay0: ', temp);
      setWorkTimeTotal(temp[0].WorkTimeTotal);
    });
  });
  //console.log('ReadCurrentWorkDay0.6: ', selectedDate);
  databaseOpened.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM WorkHour WHERE Date = (?)',
      [selectedDate],
      (tx, results) => {
        var temp = [];
        //console.log('ReadCurrentWorkDay0.7: ', results);
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        console.log('ReadCurrentWorkDay1: ', temp);
        setBeginTime(temp[0].BeginTime);
        setEndTime(temp[0].EndTime);
        setDailyWorkEstimate(temp[0].DailyWorkEstimate);
      },
      (tx, err) => {
        console.log('ReadCurrentWorkDay1.1:', err);
      },
    );
  });
};
