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
import CVProjectPNG from "../images/cv-project.png";
import CVProjectGIF from "../images/cv-project.gif";
import MiniMsgPNG from "../images/mini-messageboard.png";
import MiniMsgGIF from "../images/mini-messageboard.gif";
import WeatherAppPNG from "../images/weather-app.png";
import WeatherAppGIF from "../images/weather-app.gif";
import VueLibraryPNG from "../images/vue-library.png";
import VueLibraryGIF from "../images/vue-library.gif";
import JsTictactoePNG from "../images/js-tictactoe.png";
import JsTictactoeGIF from "../images/js-tictactoe.gif";
import TaskListPNG from "../images/task-list.png";
import TaskListGIF from "../images/task-list.gif";
import PomodoroClockPNG from "../images/pomodoro-clock.png";
import PomodoroClockGIF from "../images/pomodoro-clock.gif";
import RestaurantPagePNG from "../images/restaurant-page.png";
import RestaurantPageGIF from "../images/restaurant-page.gif";

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
  {
    title: "React CV Project",
    desc: `
      <p>
        Simple CV Application which'll render your CV detail as cards.
      </p>`,
    purpose: [
      "Practice maintaining state across components",
      "Form validation and manipulation",
    ],
    repo: "https://github.com/Clumsynite/react-cv-project",
    live: "https://clumsynite.github.io/react-cv-project/",
    png: CVProjectPNG,
    gif: CVProjectGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Mini Message Board",
    desc: `
      <p>
        Simple Express App built to practice routes and sending data across routes.
      </p>`,
    purpose: [
      "Pactice Routes in express",
      "Try to successfully render form data",
    ],
    repo: "https://github.com/Clumsynite/mini-message-board",
    live: "https://mini-msg-board.herokuapp.com/",
    png: MiniMsgPNG,
    gif: MiniMsgGIF,
    languages: {
      js: true,
      bootstrap: true,
      node: true,
      pug: true,
    },
  },
  {
    title: "Weather App",
    desc: `
      <p>
        Weather APp with Gif backgrounds, which change according to the weather.
      </p>`,
    purpose: [
      "Use OpenWeatherMapAPI ro fetch weather details",
      "Use Giphy API to fetch gif according to the weather",
    ],
    repo: "https://github.com/Clumsynite/weather-app",
    live: "https://clumsynite.github.io/weather-app/",
    png: WeatherAppPNG,
    gif: WeatherAppGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      vue: true,
    },
  },
  {
    title: "Vue Library",
    desc: `
      <p>
        Library APP built to keep a record of the user's books
      </p>`,
    purpose: ["Practice Vue Framework", "Use localStorage to store records."],
    repo: "https://github.com/Clumsynite/vue-library",
    live: "https://clumsynite.github.io/vue-library/",
    png: VueLibraryPNG,
    gif: VueLibraryGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      vue: true,
    },
  },
  {
    title: "React Task List",
    desc: `
      <p>
        React app built to practice react basics
      </p>`,
    purpose: [
      "Practice state manipulation",
      "Practice event handling in React",
    ],
    repo: "https://github.com/Clumsynite/react-task-list",
    live: "https://clumsynite.github.io/react-task-list/",
    png: TaskListPNG,
    gif: TaskListGIF,
    languages: { html: true, js: true, bootstrap: true, react: true },
  },
  {
    title: "Pomodoro Clock",
    desc: `
      <p>
        Pomodoro Clock, which works on the concept of <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" class="link">Pomodoro Technique</a>.
      </p>`,
    purpose: ["FreeCodeCamp's Certification Project"],
    repo: "https://github.com/Clumsynite/js-pomodoro",
    live: "https://clumsynite.github.io/js-pomodoro/",
    png: PomodoroClockPNG,
    gif: PomodoroClockGIF,
    languages: { html: true, css: true, js: true, react: true },
  },
  {
    title: "Restaurant Page",
    desc: `
      <p>
        A demo Restaurant page. An SPA which uses modules to manipulate DOM using JS. <br/><code>No Framework used</code>
      </p>`,
    purpose: [
      "Practice Factory functions",
      "Practice building apps using Webpack",
      "Depolying apps which are built using webpack",
    ],
    repo: "https://github.com/Clumsynite/js-restaurant-page",
    live: "https://clumsynite.github.io/js-restaurant-page",
    png: RestaurantPagePNG,
    gif: RestaurantPageGIF,
    languages: {
      html: true,
      css: true,
      js: true,
      webpack: true,
    },
  },
  {
    title: "JS TicTacToe",
    desc: `
      <p>
        <b>Tic-Tac-Toe</b> <span class='badge badge-pill badge-light'>AKA</span> <i>X and O</i>, built using Javascript.
      </p>`,
    purpose: ["Practice Factory functions", "Practice Module Pattern"],
    repo: "https://github.com/Clumsynite/js-tictactoe",
    live: "https://clumsynite.github.io/js-tictactoe",
    png: JsTictactoePNG,
    gif: JsTictactoeGIF,
    languages: {
      html: true,
      css: true,
      js: true,
    },
  },
];

export default projects;
