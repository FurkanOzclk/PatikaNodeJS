const blogs = [
    {id: "1", name: "Blog 1", author: "Author1"},
    {id: "2", name: "Blog 2", author: "Author2"},
    {id: "3", name: "Blog 3", author: "Author3"}
];

const listBlogs = () => {
    blogs.map((blog) => {
        console.log(blog.name);
    });
};


const postBlog = (newBlog) => {
    return promiseBlog = new Promise((resolve, reject) => {
        blogs.push(newBlog);
        resolve("Blog added.");
        reject("An error detected.");
    });

};

async function allBlogs () {
    try {
        await postBlog({id: "5", name: "Blog 5", author: "Author5"});
        listBlogs();
    } catch (error) {
        console.log(error);
    }
}

allBlogs()