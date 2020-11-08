import BlogReadPNG from "../images/blog-read.png";
import BlogReadGIF from "../images/blog-read.gif";
import BlogWritePNG from "../images/blog-write.png";
import BlogWriteGIF from "../images/blog-write.gif";
import BlogAPIPNG from "../images/blog-api.png";
import BlogAPIGIF from "../images/blog-api.gif";
import InventoryAppPNG from "../images/inventory-app.png";
import InventoryAppGIF from "../images/inventory-app.gif";

const projects = [
  {
    title: "Blog-Read",
    desc: `<p>Frontend built to <i>read blog posts</i>.<br/>Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.</p>`,
    repo: "https://github.com/Clumsynite/blog-read",
    live: "https://clumsynite.github.io/blog-read/",
    png: BlogReadPNG,
    gif: BlogReadGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-Write",
    desc:
      "<p>Frontend built to <i>make new posts</i>.<br/>Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.</p> ",
    repo: "https://github.com/Clumsynite/blog-write",
    live: "https://clumsynite.github.io/blog-write/",
    png: BlogWritePNG,
    gif: BlogWriteGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-API",
    desc: `<p>RESTful API built with endpoints for authentication and database management.<br/><a class='link' target='_blank' href='https://github.com/Clumsynite/blog-read'>Blog-Read</a> and <a class='link' target='_blank' href='https://github.com/Clumsynite/blog-write'>Blog-Write</a> work as Frontend for this API.</p>
      <p><strong>Purpose</strong>: 
        <ul>
          <li><i>CRUD Operations on Blog</i></li>
          <li><i>Authentication and Session handling</i></li>
        </ul>
      </p>`,
    repo: "https://github.com/Clumsynite/blog-api",
    live: "https://clumsy-blog.herokuapp.com/",
    png: BlogAPIPNG,
    gif: BlogAPIGIF,
    languages: {
      html: true,
      js: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
  {
    title: "Inventory App",
    desc:
      "<p>Crud App for inventory Management.<br/>Built in order to practice databse management by trying out basic CRUD operations on MongoDB.</p>",
    repo: "https://github.com/Clumsynite/inventory-app",
    live: "https://clumsy-inventory.herokuapp.com/",
    png: InventoryAppPNG,
    gif: InventoryAppGIF,
    languages: {
      html: true,
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
];

export default projects;
