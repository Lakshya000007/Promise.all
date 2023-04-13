//Change to async await
async function print() {
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
      setTimeout(() => {
        posts.push(post);
        updateLastUserActivityTime();
        reslove(posts);
      }, 1000);
    });
  }

  createPost("Aman");
  createPost("Twinkle");
  const data = await Promise.all([
    createPost("Lakshya"),
    updateLastUserActivityTime(),
  ]);
  console.log(data);
  createPost("Aanchal");
  const newData = await Promise.all([
    createPost("Lakshya"),
    updateLastUserActivityTime(),
  ]);
  console.log(newData);
}

print();
