// Problem 1/ Callbacks
function getUser(id, callback) {
    setTimeout(() => {
        const user = { id: id, name: 'Ram' };
        callback(user);
    }, 2000);
}

// Using the getUser funcition
getUser(1,function(user) {
    console.log("User Name:",user.name);
    console.log("Problem 1 solved");
});

// Problem 2/ Callback Hell
function getUserCB(callback){
    setTimeout(() => {
        console.log ("User fetched...");
        const user = { id: 1, name: 'Ram' };
        callback(user);
    }, 1000);
}
 function getPostsCB(userId, callback){
    setTimeout(() => {
        console.log("Posts fetched...");
        callback(["Post1", "Post2"]);
    }, 1000);
 }
 function getCommentsCB(postId, callback){
    setTimeout(() => {
        console.log("Comments fetched...");
        callback(["nice", "good"]);
    }, 1000);
 }

 // Callback hell
    getUserCB(function(user){
        getPostsCB(user.id, function(posts){
            getCommentsCB(posts[0], function(comments){
                console.log("User:", user);
                console.log("Posts:", posts);
                console.log("Comments:", comments);
                console.log("Problem 2 solved");
            });
        });
    });

// Problem 3/ Promises
function getUserP() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: 'Ram' };
            resolve(user);
        }, 1000);
    });
}
function getPostsP(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Post1", "Post2"]);
        }, 1000);
    }); 
}
function getCommentsP(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["nice", "good"]);
        }, 1000);
    });
}
// Using Promises
getUserP()
    .then(user => {
        console.log("User fetched");
        return getPostsP(user.id).then(posts => ({ user, posts })); // Pass both user and posts to the next then
    })
    .then(data => {
        console.log("Posts fetched");
        return getCommentsP(data.posts[0]).then(comments => ({ 
        user: data.user,
        posts: data.posts,
        comments 
    }));
    })
    .then(data => {
        console.log("Comments fetched");
        console.log("User:", data.user);
        console.log("Posts:", data.posts);
        console.log("Comments:", data.comments);
        console.log("Problem 3 solved");
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Problem 4/ Async-Await
async function showData() {
    try{
        const user = await getUserP();
        console.log("User fetched");

        const posts = await getPostsP(user.id);
        console.log("Posts fetched");

        const comments = await getCommentsP(posts[0]);
        console.log("Comments fetched");

        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.error("Error:", error);
    }
console.log("Problem 4 solved");
}

showData();
