import BlogReadPNG from "../images/blog-read.png";
import BlogReadGIF from "../images/blog-read.gif";
import BlogWritePNG from "../images/blog-write.png";
import BlogWriteGIF from "../images/blog-write.gif";
import InventoryAppPNG from "../images/inventory-app.png";
import InventoryAppGIF from "../images/inventory-app.gif";

const projects = [
  {
    title: "Blog-Read",
    desc:
      "Frontend built to read blog posts.\n Uses Blog API for authentication and database management.",
    repo: "https://github.com/Clumsynite/blog-read",
    live: "https://clumsynite.github.io/blog-read/",
    png: BlogReadPNG,
    gif: BlogReadGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Blog-Write",
    desc:
      "Frontend built to make new blog posts.\n Uses Blog API for authentication and database management.",
    repo: "https://github.com/Clumsynite/blog-write",
    live: "https://clumsynite.github.io/blog-write/",
    png: BlogWritePNG,
    gif: BlogWriteGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Inventory App",
    desc: "Crud App for inventory Management",
    repo: "https://github.com/Clumsynite/inventory-app",
    live: "https://clumsy-inventory.herokuapp.com/item",
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
