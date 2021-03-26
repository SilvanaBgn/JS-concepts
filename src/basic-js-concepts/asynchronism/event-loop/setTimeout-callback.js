//setTimeout(function, time, function_params)
//does function after time milliseconds

setTimeout(
  function (param) {
    alert(param);
  },
  3000,
  "Hellooo"
);
// This will make an alert window with "Hellooo"

/*--------------------EXAMPLE---------------------*/
const posts = [
    { title: "Post 1", body: "This is post one" },
    { title: "Post 2", body: "This is post two" },
  ],
  post3 = { title: "Post 3", body: "This is post three" };

function getAndPrintPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); //1s
}

/*-------------------1st WAY---------------------*/ console.log("1st WAY: getAndPrintPosts(), createPost(post3)");
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000); // 2s
}
getAndPrintPosts(); //1s
createPost(post3); //2s
// PROBLEM: to the moment posts has been printed (1 sec), Post3 hasn't been created yet.
//

/*-------------------2nd WAY---------------------*/ console.log("2nd WAY: createPost(post3, getAndPrintPosts)");
// SOLUTION: we must invoke getAndPrintPosts() after Post3 is created

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); //1s
  }, 2000); //2s
}
createPost(post3, getAndPrintPosts); //3s
