let promise = new Promise(function (resolve, reject) {
  const x = "TonyStark";
  const y = "Stark"
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise.
  then(function () {
    console.log('Success, You are a Stark');
  }).
  catch(function () {
    console.log('Some error has occurred');
  }); 
