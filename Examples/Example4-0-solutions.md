---
layout: lecture
title: Week 4 - Prof Bell's Async Examples with solutions
permalink: /examples/example-4-0-solved
nav_exclude: true

---
## Overview
In this activity, you will experiment with asynchronous programming constructs in TypeScript.
The activity consists of a series of small examples: you can work on them at your own pace. 

Learning Objectives for this activity:
* Practice applying asynchronous programming concepts: promises, async/await
* Experiment with applying different ordering constraints in asynchronous code
* Practice handling errors in asynchronous programming


### Step 0: Getting started
Run `npm install` to download the dependencies for this project, and then open it in your IDE of choice. 
Run `npm run client` to run the client as-is, the output should be:
`Promise failed with (some number)` or `Promise succeeded with (some number)`.

### The land before time: setTimeout
Implement a function called `gradualTimer` which takes a parameter `n`. `gradualTimer` will countdown from `n` to 0, printing an update every 1 second, until it gets to 1 seconds remaining. For the last second, it should print an update every 100 milliseconds.
For example, `gradualTimer(5)` should print out:
```
Time left: 5 seconds
Time left: 4 seconds
Time left: 3 seconds
Time left: 2 seconds
Time left: 1000 milliseconds
Time left: 900 milliseconds
Time left: 800 milliseconds
Time left: 700 milliseconds
Time left: 600 milliseconds
Time left: 500 milliseconds
Time left: 400 milliseconds
Time left: 300 milliseconds
Time left: 200 milliseconds
Time left: 100 milliseconds
Time left: 0 milliseconds
```

Solution:
```ts
function gradualTimer(n) {
  let remainingSeconds = n;
  const secondsTimer = setInterval(()=>{
    console.log(`Time left: ${remainingSeconds} seconds`)
    remainingSeconds--;
    if(remainingSeconds == 1){
      clearInterval(secondsTimer);
      let remainingMillis = 1000;
      const millisTimer = setInterval(()=>{
        console.log(`Time left: ${remainingMillis} milliseconds`);
        if(remainingMillis == 0)
          clearInterval(millisTimer);
        remainingMillis -= 100;
      },  100);
    }
  }, 1000);
}

// gradualTimer(5);
```

### Writing your own time-based promises
Create a function, `piProfiler(count): Promise<number>`, which takes a parameter `count` (number of iterations to pass to `approximatePi`), and returns a promise for the computed value of pi.
Experiment running your promise with a timer printing the string "Tick" every 100 milliseconds, and notice how for very large values of `count`, the timer becomes skewed.
Add multiple `then` handlers for your `piPromise`: does it get recalculated for each invocation of `then`? Consider why or why not, and then we will discuss as a group.

Solution:
```ts
function piProfiler(count: number): Promise<number> {
  return new Promise<number>((resolve) => {
    const pi = approximatePi(count);
    return resolve(pi);
  });
}
setInterval(()=>{
  console.log(`Tick!`);
}, 100);
const promise = piProfiler(10);
promise.then((val) => {
  console.log(`Pi finished as ${val}`);
});
```

### Add an error, and an error handler
Update `piProfiler` so that if the value returned by `approximatePi` is too far off from the actual value (say, if `val <= 3.1 || val >= 3.2`), the Promise should be rejected (call the `reject` method with an error). Notice that if you do not write a `catch` handler for the promise when you call `then`, you'll get an unhandled error. Add a `catch` handler.

Solution: 
```ts
function piProfiler(count: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const pi = approximatePi(count);
    if (pi <= 3.1 || pi >= 3.2) {
      return reject(pi);
    }
    return resolve(pi);
  });
}

setInterval(() => {
  console.log(`Tick!`);
}, 100);
const promise = piProfiler(10);
promise.then((val) => {
  console.log(`Pi finished as ${val}`);
}).catch((err) => {
  console.log(err);
});
```

### Pi to async/await
Create a new, `async` method, `asyncCallPiProfiler`, which uses async/await to call your `piProfiler` promise. Add a try/catch block around the call to handle any errors. Experiment adding multiple `await piProfiler(...);` calls: does Pi get recalculated every time?

Solution:
```ts
async function asyncCallPiProfiler(count: number) {
  try {
    const val = await piProfiler(count);
    //If we await piProfiler again, it will create a new promise
    await piProfiler(count);
    
    const promise = piProfiler(count);
    const res2 = await promise;
    const res3 = await promise; //But if we await on the same promise again, it returns immediately
    return val;
  } catch (err) {
    console.log(err);
  }
}
```
### Stringing together many async calls: bulk importing grades
Example the transcript server client in `client.ts`. Write a new, `async` function, `importGrades`, which takes in input of the format:
```ts
[
    {
        studentName: "Prof Bell",
        grades: [{course: "Software Engineering", grade: 100}, {course: "Chemistry", grade: 70}],
    },
    {
        studentName: "Ripley",
        grades: [{course: "Underwater Basket Weaving", grade: 100}, {course: "Kayaking", grade: 90} ]
    }
]
```
`importGrades` should create a student record for each student passed, and file the grades for each of those students. After posting the grades, it should fetch the transcripts for each student and return an array of transcripts. 

Implement this three ways:
1. Insert a student, insert each of their grades (in order), then insert the next student, then their grades, etc. until all students are inserted, then fetch transcripts
2. Insert a student, then insert each of their grades (in order), then fetch their transcript. Do this set of operations asynchronously (concurrently) for all students
3. Insert a student, then insert each of their grades asynchronously (concurrently). After all students have all of their grades submitted, fetch all of the transcripts asynchronously (concurrently)

**Note: there was a bug in the posted "Exercise 4.3" which the client is based on**: the zip is now corrected, but if you previously downloaded it, you'll need to change `addStudent` in `client.ts` to read:
```ts
export async function addStudent(studentName: string): Promise<{ studentID: number }> {
  return remotePost('/transcripts', { name: studentName });
}
```
And the declaration of the method `remotePost` in `remoteService.ts` needs to be changed to read: `export async function remotePost<T>(path:string, data?:any) : Promise<T> {`

Solution for way 1. This approach will enforce that students and their grades are created in order of appearance in the `grades` array:
```ts
type StudentGrades = {
  studentName: string,
  grades: { course: string, grade: number }[],
}

async function importGrades(grades: StudentGrades[]) {
  const insertedIDs = [];
  for(const student of grades) {
    const newStudent = await client.addStudent(student.studentName);
    insertedIDs.push(newStudent.studentID);
    for (const courseGrade of student.grades) {
      await client.addGrade(newStudent.studentID, courseGrade.course, courseGrade.grade);
    }
  }
  const transcripts = [];
  for(const studentID of insertedIDs){
    transcripts.push(await client.getTranscript(studentID));
  }
  return transcripts;
}

importGrades([
  {
    studentName: "Student 1",
    grades: [{course: "Class 1", grade: 100}, {course: "Class 2", grade: 70},
      {course: "Class 3", grade: 80},
      {course: "Class 4", grade: 90},
      {course: "Class 5", grade: 90},
      {course: "Class 6", grade: 90},
    ],
  },
  {
    studentName: "Student 2",
    grades: [{course: "Class 1", grade: 102}, {course: "Class 2", grade: 72},
      {course: "Class 3", grade: 82},
      {course: "Class 4", grade: 92},
      {course: "Class 5", grade: 92},
      {course: "Class 6", grade: 92},
    ],
  },
  {
    studentName: "Student 3",
    grades: [{course: "Class 1", grade: 103}, {course: "Class 2", grade: 73},
      {course: "Class 3", grade: 83},
      {course: "Class 4", grade: 93},
      {course: "Class 5", grade: 93},
      {course: "Class 6", grade: 93},
    ],
  },
  {
    studentName: "Student 4",
    grades: [{course: "Class 1", grade: 104}, {course: "Class 2", grade: 74},
      {course: "Class 3", grade: 84},
      {course: "Class 4", grade: 94},
      {course: "Class 5", grade: 94},
      {course: "Class 6", grade: 94},
    ],
  },
]).then(transcripts => {
  console.log(JSON.stringify(transcripts, null, 4));
});
```

Solution for way 2: This enforces that each students' grades appear in order of appearance in their `grades` array, but students might be created out of order:
```ts
type StudentGrades = {
  studentName: string,
  grades: { course: string, grade: number }[],
}

async function importGrades(grades: StudentGrades[]) {
  const insertedIDs = [];
  const promises = grades.map(async (student) => {
    const newStudent = await client.addStudent(student.studentName);
    insertedIDs.push(newStudent.studentID);
    for (const courseGrade of student.grades) {
      await client.addGrade(newStudent.studentID, courseGrade.course, courseGrade.grade);
    }
  });

  await Promise.all(promises);
  const transcripts = [];
  for(const studentID of insertedIDs){
    transcripts.push(await client.getTranscript(studentID));
  }
  return transcripts;
}

importGrades([
  {
    studentName: "Student 1",
    grades: [{course: "Class 1", grade: 100}, {course: "Class 2", grade: 70},
      {course: "Class 3", grade: 80},
      {course: "Class 4", grade: 90},
      {course: "Class 5", grade: 90},
      {course: "Class 6", grade: 90},
    ],
  },
  {
    studentName: "Student 2",
    grades: [{course: "Class 1", grade: 102}, {course: "Class 2", grade: 72},
      {course: "Class 3", grade: 82},
      {course: "Class 4", grade: 92},
      {course: "Class 5", grade: 92},
      {course: "Class 6", grade: 92},
    ],
  },
  {
    studentName: "Student 3",
    grades: [{course: "Class 1", grade: 103}, {course: "Class 2", grade: 73},
      {course: "Class 3", grade: 83},
      {course: "Class 4", grade: 93},
      {course: "Class 5", grade: 93},
      {course: "Class 6", grade: 93},
    ],
  },
  {
    studentName: "Student 4",
    grades: [{course: "Class 1", grade: 104}, {course: "Class 2", grade: 74},
      {course: "Class 3", grade: 84},
      {course: "Class 4", grade: 94},
      {course: "Class 5", grade: 94},
      {course: "Class 6", grade: 94},
    ],
  },
]).then(transcripts => {
  console.log(JSON.stringify(transcripts, null, 4));
});
```

Solution for way 3: Does not enforce ordering of classes or grades. However, it's the fastest.
```ts
type StudentGrades = {
  studentName: string,
  grades: { course: string, grade: number }[],
}

async function importGrades(grades: StudentGrades[]) {
  const insertedIDs = [];
  const promises = grades.map(async (student) => {
    const newStudent = await client.addStudent(student.studentName);
    insertedIDs.push(newStudent.studentID);
    await Promise.all(student.grades.map(courseGrade => client.addGrade(newStudent.studentID, courseGrade.course, courseGrade.grade)));
  });

  await Promise.all(promises);
  const transcripts = [];
  for(const studentID of insertedIDs){
    transcripts.push(await client.getTranscript(studentID));
  }
  return transcripts;
}

importGrades([
  {
    studentName: "Student 1",
    grades: [{course: "Class 1", grade: 100}, {course: "Class 2", grade: 70},
      {course: "Class 3", grade: 80},
      {course: "Class 4", grade: 90},
      {course: "Class 5", grade: 90},
      {course: "Class 6", grade: 90},
    ],
  },
  {
    studentName: "Student 2",
    grades: [{course: "Class 1", grade: 102}, {course: "Class 2", grade: 72},
      {course: "Class 3", grade: 82},
      {course: "Class 4", grade: 92},
      {course: "Class 5", grade: 92},
      {course: "Class 6", grade: 92},
    ],
  },
  {
    studentName: "Student 3",
    grades: [{course: "Class 1", grade: 103}, {course: "Class 2", grade: 73},
      {course: "Class 3", grade: 83},
      {course: "Class 4", grade: 93},
      {course: "Class 5", grade: 93},
      {course: "Class 6", grade: 93},
    ],
  },
  {
    studentName: "Student 4",
    grades: [{course: "Class 1", grade: 104}, {course: "Class 2", grade: 74},
      {course: "Class 3", grade: 84},
      {course: "Class 4", grade: 94},
      {course: "Class 5", grade: 94},
      {course: "Class 6", grade: 94},
    ],
  },
]).then(transcripts => {
  console.log(JSON.stringify(transcripts, null, 4));
});
```
