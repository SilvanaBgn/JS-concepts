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

function createPost(post) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        posts.push(post);
      }, 2000); //2s
      resolve();
    } catch (er) {
      reject("Error: something went wrong");
    }
  });
}

/*--------------- .THEN() .CATCH  -------------------*/ console.log("1st WAY: promise with .then().catch()");
createPost(post3, getAndPrintPosts)
  .then(getAndPrintPosts) //3s
  .catch((err) => console.log(err));

/*----------------- PROMISE.ALL() -------------------*/ console.log("2nd WAY: promise with Promise.all()");
const promise1 = Promise.resolve("Hello world, i am first promise"),
  promise2 = 10,
  promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye");
  });

Promise.all([promise1, promise2, promise3]);

//jsonplaceholder.typicode.com //--> fake online REST API for Testing and Prototyping.
