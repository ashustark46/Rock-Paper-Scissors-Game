function asyncFunction1(callback) {
  setTimeout(() => {
    console.log('Async Function 1 done');
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log('Async Function 2 done');
    callback();
  }, 1000);
}

function asyncFunction3(callback) {
  setTimeout(() => {
    console.log('Async Function 3 done');
    callback();
  }, 1000);
}

//calling the code

asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log('All Async Function completed')
    })
  })
})