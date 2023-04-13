let posts = [];
let updateTime;

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      updateTime = Date.now();
      resolve(updateTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((reslove, reject) => {
    posts.push(post);
    updateLastUserActivityTime();
    reslove(posts);
  });
}

function getDetails() {
  Promise.all([createPost("Lakshya"), updateLastUserActivityTime()]).then(
    (data) => {
      console.log(data);
    }
  );
}

createPost("Aman");

getDetails();

createPost("Twinkle");
