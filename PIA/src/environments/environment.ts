// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: "AIzaSyA9M8LpVMuz-V2wA95XLOBrsFTl6i0MpWQ",
  authDomain: "pia-am033.firebaseapp.com",
  projectId: "pia-am033",
  storageBucket: "pia-am033.appspot.com",
  messagingSenderId: "1091677607112",
  appId: "1:1091677607112:web:bc707309c514424d54c1fd"
};

const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
