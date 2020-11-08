import BlogReadPNG from "../images/blog-read.png";
import BlogReadGIF from "../images/blog-read.gif";
import BlogWritePNG from "../images/blog-write.png";
import BlogWriteGIF from "../images/blog-write.gif";
import BlogAPIPNG from "../images/blog-api.png";
import BlogAPIGIF from "../images/blog-api.gif";
import InventoryAppPNG from "../images/inventory-app.png";
import InventoryAppGIF from "../images/inventory-app.gif";
import ShoppingCartPNG from "../images/shopping-cart.png";
import ShoppingCartGIF from "../images/shopping-cart.gif";
import AnonDiscussionsPNG from "../images/anon-discussions.png";
import AnonDiscussionsGIF from "../images/anon-discussions.gif";
import MemoryCardPNG from "../images/memory-card.png";
import MemoryCardGIF from "../images/memory-card.gif";

const projects = [
  {
    title: "Blog-Read",
    desc: `
    <p>
      Frontend built to <i>read blog posts</i>.
      <br/>
      Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.
    </p>`,
    purpose: [
      "User can Read Blog posts by other people",
      "User can comment on Blog Posts",
      "User can view Post Author's Profile",
    ],
    repo: "https://github.com/Clumsynite/blog-read",
    live: "https://clumsynite.github.io/blog-read/",
    png: BlogReadPNG,
    gif: BlogReadGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-Write",
    desc: `<p>
        Frontend built to <i>make new posts</i>.<br/>Uses <a class='link' href='https://github.com/Clumsynite/blog-api' target='_blank'>Blog API</a> for authentication and database management.
      </p>`,
    purpose: [
      "User can create new blog posts",
      "User can manage their posts and comments",
    ],
    repo: "https://github.com/Clumsynite/blog-write",
    live: "https://clumsynite.github.io/blog-write/",
    png: BlogWritePNG,
    gif: BlogWriteGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-API",
    desc: `<p>RESTful API built with endpoints for authentication and database management.<br/><a class='link' target='_blank' href='https://github.com/Clumsynite/blog-read'>Blog-Read</a> and <a class='link' target='_blank' href='https://github.com/Clumsynite/blog-write'>Blog-Write</a> work as Frontend for this API.</p>`,
    purpose: ["CRUD Operations on Blog", "Authentication and Session handling"],
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
    desc: `<p>
        Crud App for inventory Management.<br/>Built in order to practice databse management by trying out basic CRUD operations on MongoDB.
      </p>`,
    purpose: [
      "Trying out CRUD operations using MongoDB",
      "Practe routing using Node & Express",
    ],
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
  {
    title: "React Shopping Cart",
    desc: `
      <p>
        A dummy store built to practice routing in react.
      </p>`,
    purpose: ["Practice using react-router-dom library"],
    repo: "https://github.com/Clumsynite/react-shopping-cart",
    live: "https://clumsynite.github.io/react-shopping-cart/",
    png: ShoppingCartPNG,
    gif: ShoppingCartGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Anon Discussion",
    desc: `
      <p>
        Anon Discussions is an anonymous message board, where messages can be viewed by anyone who visits the site but, they'll not be able to see who posted the message.
      </p>`,
    purpose: [
      "Building an anonymous (member-only) forum",
      "Practicing authentication using PassportJS",
      "Trying out MongoDB to store messages and other CRUD operations",
    ],
    repo: "https://github.com/Clumsynite/member-only",
    live: "https://anon-discussions.herokuapp.com/",
    png: AnonDiscussionsPNG,
    gif: AnonDiscussionsGIF,
    languages: {
      html: true,
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
      mongo: true,
    },
  },
  {
    title: "React Memory Card",
    desc: `
      <p>
        This is an avengers themed mini game, where the user will have to click a card from the provided card list. When clicked, your score will increase by one and the cards will be shuffled.
      </p>`,
    purpose: [
      "Practice React hooks for the first time",
      "Practice maintaining state across components",
    ],
    repo: "https://github.com/Clumsynite/react-memory-card",
    live: "https://clumsynite.github.io/react-memory-card",
    png: MemoryCardPNG,
    gif: MemoryCardGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
];

export default projects;
