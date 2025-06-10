import img2 from "../assets/image2.jpg"
import img3 from "../assets/image3.png"
import img1 from "../assets/image1.png"

export const topics = [
  {
    "id": 1,
    "title": "HTML – The Structure of the Web",
    "description": "It defines the structure and layout of your web pages using simple tags like headings, paragraphs, images, and links. Learning HTML is the first step to creating web pages from scratch.",
    x: 3

  },
  {
    "id": 2,
    "title": "CSS – Styling the Web",
    "description": "CSS (Cascading Style Sheets) brings your website to life with design. It controls colors, fonts, spacing, layout, and responsiveness. With CSS, you can transform plain HTML into beautiful, user-friendly web pages.",
    x: 8
  },
  {
    "id": 3,
    "title": "JavaScript – Making the Web Interactive",
    "description": "JavaScript adds interactivity and logic to your website. It allows you to handle user actions, create dynamic content, validate forms, and build real-time features like sliders, modals, and to-do lists.",
    x: 3
  },
  {
    "id": 4,
    "title": "Git & GitHub – Version Control and Collaboration",
    "description": "Git helps you keep track of your code changes, and GitHub lets you store and share your code online. These tools are essential for working on real-world projects and collaborating with other developers.",
    x: 8
  }

]

export const coursescard = [
  {
    "id": 0,
    "active": false,
    "completed":false,
    "coursename": "HTML – The Structure of the Web",
    "slug": "html-for-beginners",
    "img": img1,
    "smalldes": "HTML (HyperText Markup Language) is the foundational language used to structure content on the web. It helps define elements like headings, paragraphs, links, images, and tables, making it essential for every aspiring web developer.",
    "about": {
      "description": "This course begins with a solid introduction to the core concepts of HTML, laying the groundwork for building dynamic and interactive websites. Whether you are a beginner just starting your web development journey or someone looking to strengthen your understanding of web design, this course will equip you with the necessary tools and techniques to succeed in the field of frontend development.From structuring webpages using semantic HTML tags to embedding images and links, you will gain hands-on experience with the fundamental building blocks of the web. As you progress, you’ll learn to create visually appealing and functional web pages, with a strong focus on best practices, accessibility, and proper HTML structure.Whether you are aiming to build your first personal website, work as a frontend developer, or enhance your web development skills, this course will give you the knowledge and confidence to tackle any HTML project with ease.",
      "learning_outcomes": [
        "Start with a clear understanding of HTML and the Browser environment, and how webpages are structured.",
        "Master essential HTML tags such as <h1> to <h6>, <p>, and others to create meaningful and structured content.",
        "Learn to work with links and images, understanding the importance of file paths, which are essential for linking and embedding content.",
        "Gain a deeper insight into semantic HTML5 tags like <header>, <nav>, <section>, and <footer>, which help in improving the accessibility and SEO of web pages.",
        "Create forms and understand the significance of inputs and labels in making webpages interactive.",
        "Build your skills through a mini-project where you will design and assemble your personal bio page."
      ],
      "key_benefits": [
        "Strong foundational knowledge of HTML, empowering you to create clean, organized, and well-structured webpages.",
        "Learn best practices in HTML and its core concepts for building effective websites.",
        "Suitable for anyone interested in starting a career in web development, enhancing their skills, or building personal projects.",
        "Hands-on learning approach with practical examples and a mini-project to showcase your skills."
      ],
      "course_outcome": "By the end of this course, you’ll be equipped to create your own web pages with the right structure, layout, and content. This course is perfect for beginners as well as those who need a refresher on HTML basics, offering practical, real-world experience to kickstart your web development journey."

    },
    "hero": {
      "title": "HTML for Beginners – Build Your First Web Page",
      "subtitle": "Master the building‑blocks of the web in just a few hours.",
      "level": "Beginner",
      "duration": "2 h 30 m",
      "lessons": 7,
      "badges": ["Project‑Based", "Self‑Paced"],
      "primaryCTA": "Start Learning Now",
      "secondaryCTA": "Preview Lessons"
    },
    "overview": [
      "The core HTML tags that structure every modern website",
      "How to embed images, links, lists, audio & video",
      "Form creation and basic accessibility best practices",
      "Using semantic HTML5 for cleaner, SEO‑friendly pages",
      "Tips to organise code so future CSS styling is effortless"
    ],
    "why": [
      { "pain": "I don’t know where to start.", "solution": "A zero‑assumption curriculum—no experience required." },
      { "pain": "Tutorials feel abstract.", "solution": "Hands‑on mini‑tasks after every concept." },
      { "pain": "I’m afraid I’ll forget.", "solution": "Downloadable cheat‑sheets + lifetime lesson access." }
    ],
    "syllabus": [
      { "lesson": 1, "topic": "HTML & the Browser", "skills": "Document structure, <!DOCTYPE>", "active": true, "completed": false  },
      { "lesson": 2, "topic": "Text & Headings", "skills": "<h1‑h6>, <p>, <br>", "active": false, "completed": false },
      { "lesson": 3, "topic": "Images & Links", "skills": "<img>, <a>, file paths", "active": false, "completed": false },
      { "lesson": 4, "topic": "Lists & Tables", "skills": "<ul>, <ol>, <table>", "active": false, "completed": false },
      { "lesson": 5, "topic": "Semantic HTML5", "skills": "<header>, <nav>, <section>, <footer>", "active": false, "completed": false },
      { "lesson": 6, "topic": "Forms & Inputs", "skills": "<form>, <input>, labels", "active": false, "completed": false },
      { "lesson": 7, "topic": "Mini‑Project Build", "skills": "Assemble your Bio Page", "active": false, "completed": false }
    ],
    "project": {
      "title": "Personal Bio Page",
      "description": "Create a single‑page site with your photo, about section, hobbies list and a contact form — practicing layout, media embeds and forms purely in HTML."
    },
    "prerequisites": ["Any modern browser", "VS Code or another editor", "No prior coding experience"],
    "includes": ["HD video lessons", "Challenge files & solutions", "Printable HTML tag cheat‑sheet", "PDF certificate"],
    "instructor": {
      "name": "Vanshika",
      "bio": "Front‑End Engineer • Taught 10,000+ beginners.",
      "links": { "linkedin": "#", "twitter": "#", "portfolio": "#" }
    },
    "reviews": [
      { "stars": 5, "quote": "Exactly what I needed!", "student": "Rohit K." },
      { "stars": 5, "quote": "Project‑first approach kept me motivated.", "student": "Meera P." }
    ],
    "faq": [
      { "q": "Do I need CSS or JS first?", "a": "No, this is the perfect starting point." },
      { "q": "Is there a deadline?", "a": "Learn on your schedule—lifetime access." },
      { "q": "Will I get help if I’m stuck?", "a": "Post in the discussion board; replies within 24 h." }
    ],
    "footerCTA": "Ready to build your first web page? Click Start Learning Now and turn curiosity into skill.",
    "whatYouWillLearn": [
      "Structure any web page with semantic HTML5",
      "Embed media (images, audio, video) the accessible way",
      "Create interactive forms that capture user input",
      "Organise large documents for easier styling later"
    ],
    "skillsYouWillGain": [
      "Semantic markup",
      "Accessibility basics (ARIA labels, alt text)",
      "Form design & validation fundamentals",
      "Portfolio‑ready personal bio page"
    ],

    "lessons": [
      {
        "lesson": 1,
        "topic": "HTML & the Browser",
        "skills": ["Document structure", "<!DOCTYPE>"],
        "description": "HTML (HyperText Markup Language) is the foundational language of the web. It is used to structure and display content on webpages, whether it's text, images, or multimedia. In this lesson, you will learn how browsers render HTML content. Understanding the relationship between HTML and the browser will help you understand why it’s important to write clean and error-free HTML code. Every webpage begins with a standard document structure, and it’s crucial to know how each part of this structure functions. We will explore the importance of the `<!DOCTYPE>` declaration, which tells the browser which version of HTML to expect, ensuring compatibility and correct rendering of the page. Additionally, we will cover the main building blocks of an HTML document: the `<html>`, `<head>`, and `<body>` tags. These tags serve as the basic skeleton of every webpage. The `<html>` tag is the root element that wraps the entire page, the `<head>` tag contains metadata like the page title and links to CSS files, while the `<body>` tag holds the visible content like text and images that users interact with. By the end of this lesson, you’ll be able to create a simple, well-structured HTML page that can be viewed in any web browser.",
        "elements": [
          {
            "name": "<!DOCTYPE html>",
            "description": "The `<!DOCTYPE>` declaration tells the web browser what type of HTML document it is going to parse. It helps the browser understand the version of HTML you're using, which is important for ensuring compatibility. The `<!DOCTYPE html>` declaration specifically tells the browser that the document is using HTML5, the latest version of HTML.",
            "example": "<!DOCTYPE html>",
            "usage": "This tag should be placed at the very beginning of your HTML document, before the `<html>` tag."
          },
          {
            "name": "<html>",
            "description": "The `<html>` element is the root element that wraps all of the content in the document. Every HTML page begins with this tag. It contains two main sections: `<head>` and `<body>`.",
            "example": "<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    Hello, world!\n  </body>\n</html>",
            "usage": "The `<html>` tag is used to wrap all content on the page, except for the `<!DOCTYPE>` declaration. It is the container for the entire HTML document."
          },
          {
            "name": "<head>",
            "description": "The `<head>` tag contains meta-information about the document, such as the title of the page, links to CSS files, and other metadata like author or description. This section of the document is not directly visible on the webpage, but it provides essential information to browsers and search engines.",
            "example": "<head>\n  <title>My First Page</title>\n</head>",
            "usage": "You place metadata inside the `<head>` tag, which typically includes `<title>`, `<meta>`, and links to external files like CSS or JavaScript files."
          },
          {
            "name": "<title>",
            "description": "The `<title>` tag defines the title of the HTML document. This title appears in the browser's title bar or tab, helping users understand what the page is about.",
            "example": "<title>My First Page</title>",
            "usage": "You should always include a `<title>` tag within the `<head>` section of your page. This tag is essential for SEO (Search Engine Optimization)."
          },
          {
            "name": "<body>",
            "description": "The `<body>` element contains all the visible content of the HTML document. This is the section that users interact with and see in their browsers. It includes text, images, videos, forms, and more.",
            "example": "<body>\n  <h1>Welcome to My First Webpage!</h1>\n  <p>This is my first webpage using HTML!</p>\n</body>",
            "usage": "The `<body>` tag wraps all visible content on the page. Everything that you want users to see and interact with should go inside the `<body>` tag."
          }
        ],
        "example": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Welcome to My First Webpage!</h1>\n    <p>This is my first webpage using HTML!</p>\n  </body>\n</html>",
        "practice": "Create a basic HTML document structure. Include the `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags. Inside the `<head>`, set a title for your page, and in the `<body>`, add a heading and a paragraph introducing yourself."
      },
      {
        "lesson": 2,
        "topic": "Text & Headings",
        "skills": ["<h1> to <h6>", "<p>", "<br>"],
        "description": "In this lesson, we will learn about how text is structured in HTML using heading and paragraph tags. The `<h1>` to `<h6>` tags are used to define headings of different levels, where `<h1>` is the most important and `<h6>` is the least important. The `<p>` tag is used to define paragraphs of text, and the `<br>` tag is used to insert line breaks. Proper use of headings and paragraphs is essential for organizing content and making it accessible for readers and search engines.",
        "elements": [
          {
            "name": "<h1> to <h6>",
            "description": "Headings define the importance of a section of content. `<h1>` is the highest level heading and represents the most important title, while `<h6>` is the lowest level heading and is used for smaller or less important titles.",
            "example": "<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Sub Sub Heading</h3>",
            "usage": "Use headings to structure the content of your page. Start with `<h1>` for the main title, and use `<h2>`, `<h3>`, etc., for subheadings as needed."
          },
          {
            "name": "<p>",
            "description": "The `<p>` tag is used to define paragraphs. This is the basic unit for displaying blocks of text on your page.",
            "example": "<p>This is a paragraph of text that explains something on the webpage. Paragraphs make content easier to read and understand.</p>",
            "usage": "Whenever you want to create a new paragraph, wrap the content inside a `<p>` tag."
          },
          {
            "name": "<br>",
            "description": "The `<br>` tag inserts a line break, allowing you to break up content without starting a new paragraph. It is a self-closing tag.",
            "example": "<p>This is a paragraph.<br>This is the second line of the paragraph.</p>",
            "usage": "Use the `<br>` tag when you want to break the text into different lines without starting a new paragraph."
          }
        ],
        "example": "<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<p>This is a paragraph of text that explains the topic.</p>\n<p>Another paragraph goes here.</p>\n<br>\n<p>This is another line after a break.</p>",
        "practice": "Create a small webpage with different levels of headings (`<h1> to <h6>`), some paragraphs of text, and use the `<br>` tag to break lines within a paragraph."
      },
      {
        "lesson": 3,
        "topic": "Images & Links",
        "skills": ["<img>", "<a>", "File paths"],
        "description": "This lesson covers how to display images on webpages and how to create links to other pages. The `<img>` tag is used to embed images, while the `<a>` tag is used to create hyperlinks. You will also learn about file paths, which determine the location of resources (like images) relative to the HTML document.",
        "elements": [
          {
            "name": "<img>",
            "description": "The `<img>` tag is used to insert images into your webpage. It requires the `src` (source) attribute, which specifies the image location, and the `alt` attribute, which provides alternative text if the image cannot be displayed.",
            "example": "<img src='image.jpg' alt='Description of image'>",
            "usage": "Place the `<img>` tag where you want the image to appear on your page. Always include an `alt` attribute for accessibility and SEO purposes."
          },
          {
            "name": "<a>",
            "description": "The `<a>` tag is used to create links to other pages or resources. The `href` attribute defines the destination URL of the link. Links can point to external websites, other pages on the same site, or even specific sections of a page.",
            "example": "<a href='https://www.example.com'>Visit Example Website</a>",
            "usage": "Use the `<a>` tag to link to other pages or resources. Ensure that every link has a meaningful `href` to direct users where they need to go."
          },
          {
            "name": "File Paths",
            "description": "A file path defines the location of a file relative to your HTML document. There are two types of file paths: absolute and relative. An absolute path points to the exact location of the file, while a relative path points to a location in relation to the current document.",
            "example": "<img src='images/photo.jpg' alt='Photo'>",
            "usage": "Use relative paths to link resources that are within the same project folder. For external resources, use absolute paths."
          }
        ],
        "example": "<img src='image.jpg' alt='Beautiful Landscape'>\n<a href='https://www.example.com'>Visit Example Website</a>",
        "practice": "Add an image to your page using the `<img>` tag and create a hyperlink using the `<a>` tag. Try using both relative and absolute file paths for the image and link."
      }, {
        "lesson": 4,
        "topic": "Lists & Tables",
        "skills": ["<ul>", "<ol>", "<table>"],
        "description": "In this lesson, we will learn how to organize content into lists and tables. Lists are used to display a series of items, and tables are used to display data in rows and columns. You will learn the difference between unordered and ordered lists and how to create tables to present tabular data.",
        "elements": [
          {
            "name": "<ul>",
            "description": "The `<ul>` tag defines an unordered list, which is used to display a collection of items without any particular order. Each item in the list is defined using the `<li>` (list item) tag.",
            "example": "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>",
            "usage": "Use the `<ul>` tag when the order of list items doesn’t matter, such as in a list of features or a group of items."
          },
          {
            "name": "<ol>",
            "description": "The `<ol>` tag defines an ordered list, where the list items are numbered or lettered. Each item is defined using the `<li>` tag, and the items are automatically numbered.",
            "example": "<ol>\n  <li>First Item</li>\n  <li>Second Item</li>\n  <li>Third Item</li>\n</ol>",
            "usage": "Use the `<ol>` tag when the order of list items is important, such as in a list of instructions or steps."
          },
          {
            "name": "<table>",
            "description": "The `<table>` tag is used to create tables in HTML. Tables are useful for displaying data in rows and columns. A table consists of rows (`<tr>`), table headers (`<th>`), and table data (`<td>`).",
            "example": "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>25</td>\n  </tr>\n</table>",
            "usage": "Use the `<table>` tag when you need to present data that can be organized into rows and columns. Always use `<th>` for headings and `<td>` for data cells."
          }
        ],
        "example": "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Orange</li>\n</ul>\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>\n<table>\n  <tr>\n    <th>Item</th>\n    <th>Price</th>\n  </tr>\n  <tr>\n    <td>Apple</td>\n    <td>$1</td>\n  </tr>\n</table>",
        "practice": "Create an unordered list, an ordered list, and a table displaying some data, such as a list of fruits with their prices."
      },
      {
        "lesson": 5,
        "topic": "Semantic HTML5",
        "skills": ["<header>", "<nav>", "<section>", "<footer>"],
        "description": "Semantic HTML5 tags are used to give meaning to the content they contain. These tags help search engines and other user agents better understand the structure and content of a webpage. This lesson will cover key semantic elements like `<header>`, `<nav>`, `<section>`, and `<footer>`, which are used to structure the layout of a page.",
        "elements": [
          {
            "name": "<header>",
            "description": "The `<header>` element represents the introductory content or navigational links of a webpage or section. It is typically used to contain logos, navigation menus, or introductory text.",
            "example": "<header>\n  <h1>Welcome to My Website</h1>\n  <nav>\n    <a href='#home'>Home</a>\n    <a href='#about'>About</a>\n  </nav>\n</header>",
            "usage": "Use the `<header>` tag for the top part of your webpage, including branding and navigation."
          },
          {
            "name": "<nav>",
            "description": "The `<nav>` tag defines a navigation section for links. It is used to group navigation links, making them easier to identify for both users and search engines.",
            "example": "<nav>\n  <a href='#home'>Home</a>\n  <a href='#about'>About</a>\n</nav>",
            "usage": "Use the `<nav>` tag specifically for navigation links, such as a menu or a set of links that lead to other pages on your site."
          },
          {
            "name": "<section>",
            "description": "The `<section>` element represents a section of content in a webpage. Each section can have its own heading and content, and it is used to break down content into logical parts.",
            "example": "<section>\n  <h2>About Us</h2>\n  <p>Information about our company.</p>\n</section>",
            "usage": "Use `<section>` to organize content into logical parts, like different sections of a webpage."
          },
          {
            "name": "<footer>",
            "description": "The `<footer>` element defines the footer of a webpage or section, often containing contact information, copyright notice, or links to other pages or social media.",
            "example": "<footer>\n  <p>&copy; 2025 My Website</p>\n  <a href='#contact'>Contact</a>\n</footer>",
            "usage": "Use the `<footer>` tag for content at the bottom of your page, such as legal notices or contact information."
          }
        ],
        "example": "<header>\n  <h1>Welcome to My Website</h1>\n  <nav>\n    <a href='#home'>Home</a>\n    <a href='#about'>About</a>\n  </nav>\n</header>\n<section>\n  <h2>About Us</h2>\n  <p>Information about our company.</p>\n</section>\n<footer>\n  <p>&copy; 2025 My Website</p>\n</footer>",
        "practice": "Structure a simple webpage using `<header>`, `<nav>`, `<section>`, and `<footer>` elements. Add some content to each section to demonstrate how these tags organize the page."
      },
      {
        "lesson": 6,
        "topic": "Forms & Inputs",
        "skills": ["<form>", "<input>", "Labels"],
        "description": "Forms are essential for gathering input from users on websites. In this lesson, you will learn how to create forms with various input elements such as text fields, radio buttons, checkboxes, and buttons. We'll also cover the importance of labels for accessibility and clarity.",
        "elements": [
          {
            "name": "<form>",
            "description": "The `<form>` element is used to define an HTML form. It wraps all form elements and contains the `action` and `method` attributes. The `action` attribute specifies where the form data is sent when submitted, while the `method` attribute defines how the form data is sent (GET or POST).",
            "example": "<form action='/submit' method='POST'>\n  <!-- Form elements go here -->\n</form>",
            "usage": "Wrap your form elements inside a `<form>` tag. Use the `action` attribute to define where the data should be sent, and the `method` attribute to define how the data will be sent."
          },
          {
            "name": "<input>",
            "description": "The `<input>` tag is used to create various types of form controls, such as text fields, checkboxes, radio buttons, and more. The `type` attribute defines the type of input.",
            "example": "<input type='text' placeholder='Enter your name'>",
            "usage": "Use the `<input>` tag to create user input fields. The `type` attribute will define whether it's a text field, checkbox, radio button, etc."
          },
          {
            "name": "Labels",
            "description": "The `<label>` tag is used to define a label for an input element. Labels are crucial for accessibility because they allow screen readers to associate text with form controls, making forms easier to use for people with disabilities.",
            "example": "<label for='name'>Name:</label>\n<input type='text' id='name' placeholder='Enter your name'>",
            "usage": "Always use a `<label>` tag with the `for` attribute pointing to the `id` of the input element. This improves accessibility and usability."
          }
        ],
        "example": "<form action='/submit' method='POST'>\n  <label for='name'>Name:</label>\n  <input type='text' id='name' placeholder='Enter your name'>\n  <label for='email'>Email:</label>\n  <input type='email' id='email' placeholder='Enter your email'>\n  <input type='submit' value='Submit'>\n</form>",
        "practice": "Create a form with at least three fields: name, email, and password. Add labels to each field and include a submit button to submit the form."
      },
      {
        "lesson": 7,
        "topic": "Mini-Project Build",
        "skills": ["Build a Bio Page"],
        "description": "In this lesson, you will apply what you've learned so far by building a simple bio page. This project will help reinforce your understanding of HTML elements, and it's a great way to practice using the tags and concepts from previous lessons. You'll include text, headings, images, links, and other basic HTML elements.",
        "elements": [
          {
            "name": "Page Structure",
            "description": "Create the overall structure of the page, which includes a header with your name, a navigation menu for quick links, a section for your biography, and a footer with contact details or social media links.",
            "example": "<header><h1>Your Name</h1></header>\n<nav><a href='#bio'>Bio</a><a href='#contact'>Contact</a></nav>",
            "usage": "Make sure to structure the page using `<header>`, `<nav>`, `<section>`, and `<footer>` tags. The navigation menu will allow users to jump to different sections of your bio page."
          },
          {
            "name": "Images & Links",
            "description": "Add images of yourself, links to your social media profiles or portfolio, and other resources. Use `<img>` for the images and `<a>` for links.",
            "example": "<img src='profile.jpg' alt='Your photo'>\n<a href='https://www.linkedin.com/in/yourprofile'>LinkedIn</a>",
            "usage": "Ensure your images are properly sized and provide meaningful alt text. Links should open in a new tab (use the `target='_blank'` attribute) for external sites."
          },
          {
            "name": "Content Sections",
            "description": "Divide your bio page into sections such as 'About Me', 'Skills', 'Experience', and 'Contact'. Use `<section>` for each section to give your page a clean, organized structure.",
            "example": "<section id='bio'><h2>About Me</h2><p>Write about your background and interests here.</p></section>",
            "usage": "Each section should be self-contained, making it easy for users to read and navigate through your information."
          }
        ],
        "example": "<header><h1>Your Name</h1></header>\n<nav><a href='#bio'>Bio</a><a href='#contact'>Contact</a></nav>\n<section id='bio'><h2>About Me</h2><p>Write about yourself here.</p></section>\n<section id='contact'><h2>Contact</h2><p>Contact information goes here.</p></section>\n<footer>&copy; 2025 Your Name</footer>",
        "practice": "Build a simple bio page using the skills you've learned. Include sections for 'About Me', 'Skills', 'Experience', and 'Contact'."
      }
    ],
    "questions": [
      {
        "question": "What is the purpose of the `<!DOCTYPE>` declaration?",
        "options": [
          "To define the structure of the document",
          "To specify the version of HTML being used",
          "To add metadata to the document",
          "To style the webpage"
        ],
        "answer": "To specify the version of HTML being used"
      },
      {
        "question": "Which tag is the root element of an HTML document?",
        "options": ["<html>", "<head>", "<body>", "<title>"],
        "answer": "<html>"
      },
      {
        "question": "Where should the `<!DOCTYPE>` declaration be placed in an HTML document?",
        "options": [
          "Inside the `<head>` tag",
          "At the very beginning of the document",
          "Inside the `<body>` tag",
          "At the end of the document"
        ],
        "answer": "At the very beginning of the document"
      },
      {
        "question": "What does the `<title>` tag define?",
        "options": [
          "The main heading of the page",
          "The title of the HTML document",
          "The metadata of the page",
          "The visible content of the page"
        ],
        "answer": "The title of the HTML document"
      },
      {
        "question": "Which tag contains all the visible content of an HTML document?",
        "options": ["<html>", "<head>", "<body>", "<title>"],
        "answer": "<body>"
      },
      {
        "question": "What is the purpose of the `<head>` tag?",
        "options": [
          "To display visible content",
          "To contain metadata and links to resources",
          "To define the main heading",
          "To wrap the entire document"
        ],
        "answer": "To contain metadata and links to resources"
      },
      {
        "question": "Which tag is used to define a paragraph in HTML?",
        "options": ["<p>", "<div>", "<span>", "<h1>"],
        "answer": "<p>"
      },
      {
        "question": "What does the `<html>` tag wrap?",
        "options": [
          "Only the `<head>` tag",
          "Only the `<body>` tag",
          "The entire HTML document",
          "Only the visible content"
        ],
        "answer": "The entire HTML document"
      },
      {
        "question": "What is the correct syntax for the `<!DOCTYPE>` declaration in HTML5?",
        "options": [
          "<!DOCTYPE html5>",
          "<!DOCTYPE HTML>",
          "<!DOCTYPE html>",
          "<!DOCTYPE>"
        ],
        "answer": "<!DOCTYPE html>"
      },
      {
        "question": "Which tag is used to define the title of a webpage?",
        "options": ["<title>", "<meta>", "<head>", "<h1>"],
        "answer": "<title>"
      },
      {
        "question": "What is the purpose of the `<meta>` tag?",
        "options": [
          "To define the title of the document",
          "To provide metadata about the HTML document",
          "To display visible content",
          "To create a link to an external file"
        ],
        "answer": "To provide metadata about the HTML document"
      },
      {
        "question": "Which tag is used to create a hyperlink?",
        "options": ["<a>", "<link>", "<href>", "<nav>"],
        "answer": "<a>"
      },
      {
        "question": "What attribute is used to specify the URL of a hyperlink?",
        "options": ["src", "href", "link", "url"],
        "answer": "href"
      },
      {
        "question": "Which tag is used to insert an image in HTML?",
        "options": ["<img>", "<image>", "<src>", "<picture>"],
        "answer": "<img>"
      },
      {
        "question": "What attribute is required in the `<img>` tag to specify the image source?",
        "options": ["src", "href", "alt", "path"],
        "answer": "src"
      },
      {
        "question": "What does the `alt` attribute in the `<img>` tag define?",
        "options": [
          "The size of the image",
          "The alternative text for the image",
          "The source of the image",
          "The title of the image"
        ],
        "answer": "The alternative text for the image"
      },
      {
        "question": "Which tag is used to create a list item in HTML?",
        "options": ["<li>", "<ul>", "<ol>", "<item>"],
        "answer": "<li>"
      },
      {
        "question": "What is the difference between `<ul>` and `<ol>` tags?",
        "options": [
          "There is no difference",
          "<ul> creates an unordered list, <ol> creates an ordered list",
          "<ul> creates an ordered list, <ol> creates an unordered list",
          "<ul> is used for links, <ol> is used for images"
        ],
        "answer": "<ul> creates an unordered list, <ol> creates an ordered list"
      },
      {
        "question": "Which tag is used to define a table in HTML?",
        "options": ["<table>", "<tr>", "<td>", "<th>"],
        "answer": "<table>"
      },
      {
        "question": "What does the `<th>` tag define in a table?",
        "options": [
          "A table row",
          "A table header cell",
          "A table data cell",
          "A table footer"
        ],
        "answer": "A table header cell"
      }
    ]
  },

  {
    "id": 1,
    active: false,
    "completed":false,
    "coursename": "CSS – Styling the Web",
    "subtitle": "Add the styling touch to your website by using CSS (Cascading Style Sheets).",
    "slug": "css-essentials",
    "img": img2,
    "smalldes": "CSS (Cascading Style Sheets) is the language used to style and design HTML elements on a webpage. It controls colors, fonts, spacing, layout, and responsiveness, allowing websites to look clean, modern, and user-friendly.",
    "about": {
      "description": "This course starts with a deep dive into the essentials of CSS, equipping you with the skills needed to style beautiful and responsive web pages. Whether you're just starting or looking to refine your CSS skills, this course offers a comprehensive approach to mastering layout design, typography, colors, and more. You'll learn how to transform simple HTML structures into visually engaging websites with real-world examples.",
      "learning_outcomes": [
        "Understand the fundamentals of CSS syntax, selectors, and units, and apply them to style web pages.",
        "Master the art of controlling colors, typography, and fonts using CSS variables, Google Fonts, and custom properties.",
        "Gain a strong command of the Box Model and learn how to manage spacing, padding, margin, and borders for better control over layouts.",
        "Dive into Flexbox, a powerful layout system, to manage alignment and spacing within your designs effectively.",
        "Learn how to create responsive 2D layouts using CSS Grid and understand the benefits of template areas for complex layouts.",
        "Understand how to implement responsive design with media queries and ensure that your designs adapt to different screen sizes.",
        "Master the techniques of positioning with relative, absolute, and sticky positioning, along with controlling the stacking order using Z-index.",
        "Learn to create smooth transitions and animations to enhance user interactions with CSS keyframes and easing functions.",
        "Understand CSS architecture best practices such as BEM methodology and modular CSS for clean and maintainable code.",
        "Refine your skills by styling a real-world project, polishing your portfolio website with the techniques you've learned."
      ],
      "key_benefits": [
        "Strong foundation in CSS, enabling you to design beautiful and responsive web pages.",
        "Master key concepts like Flexbox, Grid, and positioning that are essential for modern web development.",
        "Learn how to make your websites responsive across all devices using media queries and fluid layouts.",
        "Build real-world projects and refine your portfolio with polished, professional styles.",
        "Perfect for beginners as well as those looking to level up their web design skills and become proficient in modern CSS practices."
      ],
      "course_outcome": "By the end of this course, you will have a solid understanding of CSS and the ability to create visually stunning, responsive web pages. You will be equipped with the skills to tackle real-world projects and enhance your portfolio with modern design techniques."
    },
    "hero": {
      "title": "CSS Essentials – Design for Every Device",
      "subtitle": "Transform plain HTML into beautiful, responsive layouts.",
      "level": "Beginner → Intermediate",
      "duration": "3 h 30 m",
      "lessons": 10,
      "badges": ["Project‑Based", "Responsive Design"],
      "primaryCTA": "Start Styling Now",
      "secondaryCTA": "Preview Lessons"
    },
    "overview": [
      "Master selectors, colors, typography and spacing",
      "Build responsive grids and flexbox layouts",
      "Use media queries to adapt designs to any screen",
      "Create animations and transitions for micro‑interactions",
      "Best practices for scalable, maintainable style sheets"
    ],
    "why": [
      { "pain": "Sites look messy on mobile.", "solution": "Learn mobile‑first, responsive techniques." },
      { "pain": "CSS feels overwhelming.", "solution": "Step‑by‑step, visual examples after each concept." },
      { "pain": "I can’t match Dribbble shots.", "solution": "Color theory and typography mini‑guides included." }
    ],
    "syllabus": [
      { "lesson": 1, "topic": "CSS Basics", "skills": "Syntax, selectors, units" },
      { "lesson": 2, "topic": "Colors & Typography", "skills": "Variables, Google Fonts" },
      { "lesson": 3, "topic": "Box Model & Spacing", "skills": "Margin, padding, border" },
      { "lesson": 4, "topic": "Flexbox Deep Dive", "skills": "Axis, alignment, spacing tricks" },
      { "lesson": 5, "topic": "CSS Grid", "skills": "2‑D layouts, template areas" },
      { "lesson": 6, "topic": "Responsive Design", "skills": "Media queries, fluid images" },
      { "lesson": 7, "topic": "Positioning & Z‑Index", "skills": "Relative, absolute, sticky" },
      { "lesson": 8, "topic": "Transitions & Animations", "skills": "Keyframes, easing" },
      { "lesson": 9, "topic": "CSS Architecture", "skills": "BEM, modular files" },
      { "lesson": 10, "topic": "Capstone Styling", "skills": "Polish your portfolio site" }
    ],
    "project": {
      "title": "Responsive Portfolio Site",
      "description": "Style the HTML bio page into a modern, mobile‑friendly portfolio with custom fonts, color palette, flexbox sections, and grid‑based project gallery."
    },
    "prerequisites": ["Basic HTML knowledge", "Any modern browser", "VS Code"],
    "includes": ["HD video lessons", "Starter & solution CSS files", "Flexbox/Grid cheat‑sheet", "PDF certificate"],
    "instructor": {
      "name": "Rahul Verma",
      "bio": "UI Designer turned Front‑End Developer • Loves clean, accessible design.",
      "links": { "linkedin": "#", "twitter": "#", "portfolio": "#" }
    },
    "reviews": [
      { "stars": 5, "quote": "Finally understand flexbox!", "student": "Alisha T." },
      { "stars": 4.5, "quote": "Projects look great on my phone.", "student": "Samir G." }
    ],
    "faq": [
      { "q": "Do I need JavaScript for this course?", "a": "No, pure HTML knowledge is enough." },
      { "q": "Will I learn CSS frameworks?", "a": "We focus on vanilla CSS to build strong fundamentals." }
    ],
    "footerCTA": "Transform your web pages into stunning experiences—start styling today!",
    "whatYouWillLearn": [
      "Turn plain HTML into polished, on‑brand layouts",
      "Master Flexbox & Grid for modern responsive design",
      "Add subtle animations and transitions",
      "Architect scalable style sheets with BEM"
    ],
    "skillsYouWillGain": [
      "Responsive web design",
      "Flexbox & CSS Grid fluency",
      "CSS animations & micro‑interactions",
      "Design system thinking"
    ],
    "lessons": [
      {
        "lesson": 1,
        "topic": "CSS Basics",
        "skills": ["Syntax", "Selectors", "Units"],
        "description": "This lesson will introduce the basics of CSS. You will learn the structure of a CSS rule, how to select elements on a webpage, and the different units used in CSS for defining sizes, lengths, and other properties.",
        "elements": [
          {
            "name": "CSS Syntax",
            "description": "CSS syntax consists of a selector, which defines the HTML element to be styled, followed by a declaration block containing properties and values. The general structure is: `selector { property: value; }`.",
            "example": "h1 { color: blue; font-size: 20px; }",
            "usage": "Use CSS selectors to target elements like tags (`h1`), classes (`.class`), and IDs (`#id`). The properties inside the curly braces define how these elements should be styled."
          },
          {
            "name": "Selectors",
            "description": "Selectors allow you to target specific elements in your HTML to apply styles. The most common types of selectors are element selectors, class selectors, and ID selectors.",
            "example": "p { color: red; }\n.classname { background-color: yellow; }\n#idname { font-size: 18px; }",
            "usage": "Use element selectors for specific HTML tags, class selectors for groups of elements, and ID selectors for unique elements."
          },
          {
            "name": "Units",
            "description": "CSS uses various units to define sizes. Common units include pixels (px), percentages (%), em, rem, viewport units (vw, vh), and more.",
            "example": "h1 { font-size: 2em; margin: 10px; width: 50%; }",
            "usage": "Pixels are used for fixed sizes, percentages for relative sizing, and em/rem for scalable, relative units based on the font size."
          }
        ],
        "example": "h1 { color: blue; font-size: 2em; }\np { margin: 20px; padding: 10px; }",
        "practice": "Create a basic CSS file with styles for headings, paragraphs, and images. Experiment with different selectors and units."
      },
      {
        "lesson": 2,
        "topic": "Colors & Typography",
        "skills": ["Variables", "Google Fonts"],
        "description": "This lesson focuses on how to add colors to your design and control typography with CSS. You'll also learn about CSS variables and how to use external fonts like Google Fonts.",
        "elements": [
          {
            "name": "CSS Variables",
            "description": "CSS variables allow you to store values and reuse them throughout your stylesheet. They help maintain consistency and make it easier to manage changes to your design.",
            "example": ":root { --primary-color: #3498db; }\nbody { background-color: var(--primary-color); }",
            "usage": "Define your variables in the `:root` selector for global access, and use the `var(--variable-name)` syntax to apply them."
          },
          {
            "name": "Google Fonts",
            "description": "Google Fonts provides free access to thousands of fonts. To use them in your project, you need to link to the Google Fonts stylesheet and apply the font-family in your CSS.",
            "example": "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\nbody { font-family: 'Roboto', sans-serif; }",
            "usage": "Choose a font from Google Fonts, import it, and use it in your project by applying the font-family property."
          },
          {
            "name": "Color Properties",
            "description": "CSS allows you to define colors in several ways, including named colors, hexadecimal values, RGB, and HSL. Understanding how to apply colors for background, text, borders, and more is crucial for web design.",
            "example": "body { background-color: #f0f0f0; color: rgb(0, 0, 0); }\nbutton { background-color: hsl(120, 100%, 50%); }",
            "usage": "Use hex, RGB, and HSL color formats to apply colors to text, backgrounds, and other elements."
          }
        ],
        "example": "body { font-family: 'Roboto', sans-serif; color: #333; }\np { font-size: 16px; color: #666; }",
        "practice": "Apply Google Fonts to your page and experiment with CSS variables for color schemes. Style the typography and text colors on a webpage."
      },
      {
        "lesson": 3,
        "topic": "Box Model & Spacing",
        "skills": ["Margin", "Padding", "Border"],
        "description": "In this lesson, you'll understand how the box model works in CSS and how margin, padding, and borders affect element spacing and layout.",
        "elements": [
          {
            "name": "Box Model",
            "description": "The CSS box model represents the structure of HTML elements as rectangular boxes. Each element has content, padding, border, and margin, which can be styled individually.",
            "example": "div { width: 300px; height: 200px; padding: 10px; border: 2px solid black; margin: 20px; }",
            "usage": "Use padding to add space inside an element, border to define the element's edges, and margin to create space outside the element."
          },
          {
            "name": "Padding",
            "description": "Padding is the space between the content of an element and its border. It adds space inside the element, but does not affect the outer layout of the page.",
            "example": "div { padding: 15px; }",
            "usage": "Increase the padding to add space between the content and the element's border. This is useful for preventing content from touching the edges."
          },
          {
            "name": "Margin",
            "description": "Margin is the space outside an element, which separates it from other elements. It is useful for creating distance between elements.",
            "example": "div { margin: 20px; }",
            "usage": "Increase the margin to create space between an element and other elements around it."
          }
        ],
        "example": "div { width: 300px; height: 200px; padding: 20px; border: 3px solid black; margin: 30px; }",
        "practice": "Create a layout where multiple elements are spaced out using padding and margin. Try experimenting with different values to understand how they affect the page layout."
      },
      {
        "lesson": 4,
        "topic": "Flexbox Deep Dive",
        "skills": ["Axis", "Alignment", "Spacing Tricks"],
        "description": "Flexbox is a powerful layout tool in CSS. In this lesson, you will learn how to control layout along both the main and cross axes and how to align and distribute space within a container.",
        "elements": [
          {
            "name": "Flexbox Container",
            "description": "To enable Flexbox, set the container's display property to `flex`. This will make all child elements flex items that follow the flexbox model.",
            "example": "div { display: flex; }\n.item { margin: 10px; }",
            "usage": "Use `display: flex;` on the parent container, which will allow you to position the child elements using flex properties."
          },
          {
            "name": "Align Items",
            "description": "The `align-items` property is used to align flex items along the cross axis (perpendicular to the main axis). It can be set to values like `flex-start`, `flex-end`, `center`, `baseline`, or `stretch`.",
            "example": "div { display: flex; align-items: center; }",
            "usage": "Align the flex items within the container by setting the `align-items` property."
          },
          {
            "name": "Justify Content",
            "description": "The `justify-content` property controls the alignment of flex items along the main axis (horizontal by default). It can be set to values like `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.",
            "example": "div { display: flex; justify-content: space-between; }",
            "usage": "Use `justify-content` to distribute space between flex items along the main axis, adjusting their positioning based on available space."
          }
        ],
        "example": "div { display: flex; justify-content: space-between; align-items: center; }\n.item { margin: 5px; }",
        "practice": "Create a flexbox layout with items aligned both horizontally and vertically using `justify-content` and `align-items` properties."
      },
      {
        "lesson": 5,
        "topic": "CSS Grid",
        "skills": ["2-D Layouts", "Template Areas"],
        "description": "CSS Grid is a powerful layout system for creating 2-dimensional layouts. This lesson teaches you how to create complex grid-based designs and manage columns and rows efficiently.",
        "elements": [
          {
            "name": "Grid Container",
            "description": "To use CSS Grid, set the container's display property to `grid`. This enables the use of grid properties to define the layout.",
            "example": "div { display: grid; grid-template-columns: 1fr 1fr 1fr; }",
            "usage": "Use `display: grid;` on the container element to turn it into a grid layout, and then define the columns using `grid-template-columns`."
          },
          {
            "name": "Template Areas",
            "description": "Grid template areas are used to assign names to sections of the grid, making it easier to place grid items in specific areas.",
            "example": "div { display: grid; grid-template-areas: 'header header header' 'main main sidebar' 'footer footer footer'; }",
            "usage": "Use `grid-template-areas` to define named areas within the grid, which you can reference in individual grid items."
          }
        ],
        "example": "div { display: grid; grid-template-columns: 1fr 2fr; grid-template-areas: 'header header' 'main sidebar' 'footer footer'; }\nheader { grid-area: header; }\nmain { grid-area: main; }",
        "practice": "Create a simple grid layout with a header, sidebar, main content, and footer. Use grid template areas to define the layout."
      },
      {
        "lesson": 6,
        "topic": "Responsive Design",
        "skills": ["Media Queries", "Fluid Images"],
        "description": "Responsive design ensures that your website works well on all devices, from desktops to smartphones. In this lesson, you will learn about media queries to change styles based on device characteristics and fluid images that adjust to different screen sizes.",
        "elements": [
          {
            "name": "Media Queries",
            "description": "Media queries allow you to apply different styles depending on the conditions of the device, such as screen size, resolution, or orientation.",
            "example": "@media (max-width: 600px) { body { font-size: 14px; } }",
            "usage": "Use media queries to target specific screen sizes and apply different styles to ensure a good user experience on various devices."
          },
          {
            "name": "Fluid Images",
            "description": "Fluid images automatically adjust their size to fit their container. This is particularly useful for making sure images look good on various screen sizes.",
            "example": "img { max-width: 100%; height: auto; }",
            "usage": "Set the `max-width` property to 100% and the `height` to auto to make the images responsive and scale properly with the container."
          }
        ],
        "example": "@media (max-width: 600px) { body { font-size: 14px; } } \nimg { max-width: 100%; height: auto; }",
        "practice": "Create a responsive webpage with different layouts for small, medium, and large screens. Use media queries to change the layout of the page based on screen size."
      },
      {
        "lesson": 7,
        "topic": "Positioning & Z-Index",
        "skills": ["Relative", "Absolute", "Sticky"],
        "description": "This lesson explores positioning in CSS, including relative, absolute, and sticky positioning. You will also learn about the z-index property to control stacking order of elements.",
        "elements": [
          {
            "name": "Relative Positioning",
            "description": "Relative positioning moves an element relative to its normal position. It doesn’t remove the element from the document flow.",
            "example": "div { position: relative; top: 10px; left: 20px; }",
            "usage": "Use `position: relative;` to position an element relative to where it would normally be located."
          },
          {
            "name": "Absolute Positioning",
            "description": "Absolute positioning removes an element from the document flow and positions it relative to the nearest positioned ancestor.",
            "example": "div { position: absolute; top: 50px; right: 10px; }",
            "usage": "Use `position: absolute;` when you want to position an element absolutely within a container, not affecting the layout of surrounding elements."
          },
          {
            "name": "Z-Index",
            "description": "The z-index property controls the stacking order of positioned elements. Higher values appear in front of lower values.",
            "example": "div { position: absolute; z-index: 10; }",
            "usage": "Use `z-index` to control the stacking order of overlapping elements. An element with a higher z-index will appear in front of elements with lower z-index values."
          }
        ],
        "example": "div { position: relative; top: 10px; left: 20px; z-index: 5; }\nheader { position: absolute; z-index: 10; }",
        "practice": "Experiment with absolute and relative positioning in a layout with overlapping elements. Use z-index to control which element appears on top."
      },
      {
        "lesson": 8,
        "topic": "Transitions & Animations",
        "skills": ["Keyframes", "Easing"],
        "description": "This lesson teaches how to use CSS transitions and animations to make elements move and change properties over time. You'll also learn about keyframes and easing functions for smoother animations.",
        "elements": [
          {
            "name": "Transitions",
            "description": "CSS transitions allow you to change property values smoothly over a specified duration. They can be used to animate hover effects, background changes, and other state changes.",
            "example": "button { transition: background-color 0.3s ease; }\nbutton:hover { background-color: blue; }",
            "usage": "Use the `transition` property to specify which property to animate and the duration for the transition. Use the `:hover` pseudo-class to trigger the transition."
          },
          {
            "name": "Keyframes",
            "description": "Keyframes allow you to define intermediate steps in an animation. You can specify what the element should look like at different stages of the animation.",
            "example": "@keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(100px); } }",
            "usage": "Use keyframes to define the animation stages and apply them using the `animation` property."
          },
          {
            "name": "Easing",
            "description": "Easing functions control the pace of an animation, making it look more natural. Common easing functions include `ease`, `ease-in`, `ease-out`, and `linear`.",
            "example": "div { transition: transform 1s ease-in-out; }",
            "usage": "Use easing functions to control the timing of your transitions and animations. `ease-in-out` makes the animation start and end slowly."
          }
        ],
        "example": "@keyframes move { 0% { left: 0; } 100% { left: 100px; } }\ndiv { animation: move 2s ease-in-out infinite; }",
        "practice": "Create a smooth transition effect for hover on a button. Try an animation that moves an element from one place to another using keyframes."
      },
      {
        "lesson": 9,
        "topic": "CSS Architecture",
        "skills": ["BEM", "Modular Files"],
        "description": "This lesson focuses on organizing your CSS for larger projects. You will learn about BEM (Block, Element, Modifier) methodology for naming conventions and how to structure CSS into modular files.",
        "elements": [
          {
            "name": "BEM (Block, Element, Modifier)",
            "description": "BEM is a naming convention for classes that helps create reusable, maintainable code. A block is a standalone entity, an element is a part of a block, and a modifier is a variant of a block or element.",
            "example": ".button { background-color: blue; }\n.button__icon { width: 20px; }\n.button--large { font-size: 20px; }",
            "usage": "Use BEM to create clear, modular class names that represent the component's structure and variation."
          },
          {
            "name": "Modular CSS Files",
            "description": "As projects grow, it's important to break up your CSS into smaller, more manageable files. This makes your code easier to maintain and scale.",
            "example": "/* header.css */\n.header { background: #333; }\n/* footer.css */\n.footer { background: #111; }",
            "usage": "Break your CSS into separate files by component or layout sections (e.g., header, footer, navigation)."
          }
        ],
        "example": ".card { padding: 20px; }\n.card__title { font-size: 16px; }\n.card--highlighted { background-color: yellow; }",
        "practice": "Refactor your CSS into modular files and apply the BEM methodology to organize the classes. Try creating a simple webpage with these practices."
      },
      {
        "lesson": 10,
        "topic": "Capstone Styling",
        "skills": ["Polish your portfolio site"],
        "description": "In this final lesson, you will apply all the styling techniques you've learned to polish your portfolio site. This includes using Flexbox, Grid, animations, and ensuring that the design is responsive.",
        "elements": [
          {
            "name": "Final Touches",
            "description": "It's time to refine your design. Focus on the small details such as typography, spacing, and animations to ensure a smooth and professional look for your portfolio site.",
            "example": "body { font-family: 'Arial', sans-serif; }\nsection { margin: 20px 0; }",
            "usage": "Apply consistent design principles across your site: alignment, typography, spacing, and color schemes."
          },
          {
            "name": "Responsive Enhancements",
            "description": "Make sure your portfolio looks good on all devices by using media queries. Test how your layout adjusts to different screen sizes and fix any issues.",
            "example": "@media (max-width: 768px) { .portfolio-item { flex-direction: column; } }",
            "usage": "Use media queries to adjust the layout of your portfolio items and other sections on smaller screens."
          }
        ],
        "example": "/* Final Design */\nbody { font-family: 'Roboto', sans-serif; }\nsection { padding: 20px; }\n@media (max-width: 768px) { .section { display: block; } }",
        "practice": "Apply all the concepts you've learned to your portfolio site. Use Flexbox or Grid to create layouts, ensure responsiveness, and add animations or transitions for polish."
      }
    ],
    "questions": [
      {
        "question": "What is the purpose of the CSS box model?",
        "options": [
          "To define the structure of HTML elements",
          "To style text and fonts",
          "To represent the structure of elements as rectangular boxes",
          "To create animations"
        ],
        "answer": "To represent the structure of elements as rectangular boxes"
      },
      {
        "question": "Which CSS property is used to control the space inside an element's border?",
        "options": ["Margin", "Padding", "Border", "Width"],
        "answer": "Padding"
      },
      {
        "question": "What does the `display: flex;` property do?",
        "options": [
          "Creates a grid layout",
          "Enables Flexbox for the container",
          "Applies a background color",
          "Centers text within an element"
        ],
        "answer": "Enables Flexbox for the container"
      },
      {
        "question": "Which CSS unit is relative to the font size of the root element?",
        "options": ["px", "em", "rem", "%"],
        "answer": "rem"
      },
      {
        "question": "What is the purpose of media queries in CSS?",
        "options": [
          "To apply styles based on device characteristics",
          "To create animations",
          "To define grid layouts",
          "To add colors to text"
        ],
        "answer": "To apply styles based on device characteristics"
      },
      {
        "question": "Which CSS property is used to control the stacking order of elements?",
        "options": ["position", "z-index", "display", "overflow"],
        "answer": "z-index"
      },
      {
        "question": "What is the purpose of the `@keyframes` rule in CSS?",
        "options": [
          "To define responsive layouts",
          "To create animations",
          "To apply styles to specific elements",
          "To define grid areas"
        ],
        "answer": "To create animations"
      },
      {
        "question": "Which of the following is a valid BEM class name?",
        "options": [
          ".button__icon",
          ".button-icon",
          ".buttonIcon",
          ".button.icon"
        ],
        "answer": ".button__icon"
      },
      {
        "question": "What does the `justify-content: space-between;` property do in Flexbox?",
        "options": [
          "Aligns items along the cross axis",
          "Distributes space between items along the main axis",
          "Centers items within the container",
          "Wraps items to the next line"
        ],
        "answer": "Distributes space between items along the main axis"
      },
      {
        "question": "Which CSS property is used to make images responsive?",
        "options": ["max-width", "height", "width", "overflow"],
        "answer": "max-width"
      },
      {
        "question": "What is the purpose of the `grid-template-areas` property in CSS Grid?",
        "options": [
          "To define the size of grid items",
          "To assign names to sections of the grid",
          "To control the alignment of grid items",
          "To create animations"
        ],
        "answer": "To assign names to sections of the grid"
      },
      {
        "question": "Which CSS property is used to create smooth transitions?",
        "options": ["animation", "transition", "transform", "opacity"],
        "answer": "transition"
      },
      {
        "question": "What does the `align-items: center;` property do in Flexbox?",
        "options": [
          "Aligns items along the main axis",
          "Aligns items along the cross axis",
          "Distributes space between items",
          "Wraps items to the next line"
        ],
        "answer": "Aligns items along the cross axis"
      },
      {
        "question": "Which CSS property is used to define the space outside an element?",
        "options": ["Padding", "Margin", "Border", "Width"],
        "answer": "Margin"
      },
      {
        "question": "What is the purpose of the `:root` selector in CSS?",
        "options": [
          "To define global variables",
          "To apply styles to the body",
          "To create animations",
          "To define grid layouts"
        ],
        "answer": "To define global variables"
      },
      {
        "question": "Which CSS property is used to control the alignment of grid items?",
        "options": ["align-items", "justify-content", "grid-template-areas", "display"],
        "answer": "align-items"
      },
      {
        "question": "What is the purpose of the `position: sticky;` property?",
        "options": [
          "To position an element relative to its normal position",
          "To make an element stick to a specific position while scrolling",
          "To remove an element from the document flow",
          "To control the stacking order of elements"
        ],
        "answer": "To make an element stick to a specific position while scrolling"
      },
      {
        "question": "Which CSS property is used to apply external fonts like Google Fonts?",
        "options": ["font-family", "font-style", "@import", "font-weight"],
        "answer": "@import"
      },
      {
        "question": "What does the `flex-wrap: wrap;` property do in Flexbox?",
        "options": [
          "Aligns items along the cross axis",
          "Allows items to wrap onto multiple lines",
          "Centers items within the container",
          "Distributes space between items"
        ],
        "answer": "Allows items to wrap onto multiple lines"
      },
      {
        "question": "Which CSS property is used to control the pace of an animation?",
        "options": ["animation", "transition", "easing", "keyframes"],
        "answer": "easing"
      },
      {
        "question": "What is the purpose of the `overflow: hidden;` property in CSS?",
        "options": [
          "To hide content that overflows the container",
          "To create a scrollable container",
          "To align items within a container",
          "To apply animations to elements"
        ],
        "answer": "To hide content that overflows the container"
      }
    ]

  },

  {
    "id": 2,
    active: false,
    "completed":false,
    "coursename": "JavaScript – Making the Web Interactive",
    "subtitle": "Add life to your pages with the most popular language on the web.",
    "slug": "javascript-basics",
    "img": img3,
    "smalldes": "JavaScript is a powerful scripting language that brings interactivity and logic to websites. It allows you to control webpage behavior — like handling button clicks, validating forms, and updating content without reloading the page.",
    "about": {
      "description": "This course takes you through the fundamentals and advanced concepts of JavaScript, the programming language that powers interactive and dynamic websites. Whether you're a complete beginner or looking to sharpen your coding skills, this course provides a comprehensive path to mastering JavaScript and using it to create real-world applications. You’ll learn how to manipulate the DOM, handle user input, work with arrays and objects, and much more.",
      "learning_outcomes": [
        "Start with an understanding of JavaScript syntax, script tags, and how to log information to the console for debugging.",
        "Master variable declarations with `let`, `const`, and `var` and understand their differences in scope and use cases.",
        "Learn how to work with various data types such as strings, numbers, and booleans, and how to perform operations on them.",
        "Understand operators and expressions, including mathematical, comparison, and logical operators, to handle complex logic.",
        "Get comfortable with conditionals such as `if/else` and `switch` statements for making decisions in your code.",
        "Dive deep into loops like `for`, `while`, and iterating over arrays, gaining efficiency in handling repetitive tasks.",
      ],
      "key_benefits": [
        "Solid foundation in JavaScript programming, from basic syntax to advanced features.",
        "Master the skills to manipulate the DOM, handle events, and interact with user input.",
        "Learn how to structure and organize your code using functions, arrays, and objects.",
        "Work with modern JavaScript features like ES6, making your code more concise and efficient.",
        "Hands-on approach with a real-world capstone project that demonstrates your ability to create interactive web applications.",
        "Perfect for beginners looking to start a career in web development or those wanting to improve their JavaScript skills."
      ],
      "course_outcome": "By the end of this course, you will have a strong understanding of JavaScript and the ability to create interactive web applications. You will be equipped with the skills to tackle real-world projects and enhance your portfolio with modern JavaScript techniques."
    },
    "hero": {
      "title": "JavaScript Basics – Make the Web Interactive",
      "subtitle": "Add life to your pages with the most popular language on the web.",
      "level": "Beginner → Intermediate",
      "duration": "5 h",
      "lessons": 12,
      "badges": ["Hands‑On Coding", "Project‑Based"],
      "primaryCTA": "Start Coding Now",
      "secondaryCTA": "Preview Lessons"
    },
    "overview": [
      "Understand variables, data types and operators",
      "Write functions, loops and conditional logic",
      "Manipulate the DOM to change page content in real‑time",
      "Respond to user events (clicks, keys, forms)",
      "Best practices for clean, readable JS code"
    ],
    "why": [
      { "pain": "Sites feel static.", "solution": "Learn how to create dynamic, interactive experiences." },
      { "pain": "Syntax looks scary.", "solution": "Visual explanations and live coding demos in every lesson." },
      { "pain": "I forget what I learned.", "solution": "Mini‑quizzes + downloadable cheat‑sheets." }
    ],
    "syllabus": [
      { "lesson": 1, "topic": "Intro to JS", "skills": "Script tags, console" },
      { "lesson": 2, "topic": "Variables & Data Types", "skills": "let, const, strings, numbers" },
      { "lesson": 3, "topic": "Operators & Expressions", "skills": "Math, comparison, logical" },
      { "lesson": 4, "topic": "Conditionals", "skills": "if/else, switch" },
      { "lesson": 5, "topic": "Loops", "skills": "for, while, iterating arrays" },
      { "lesson": 6, "topic": "Functions", "skills": "Parameters, return, arrow functions" },
      { "lesson": 7, "topic": "Arrays & Objects", "skills": "CRUD operations, methods" },
      { "lesson": 8, "topic": "The DOM", "skills": "querySelector, createElement" },
      { "lesson": 9, "topic": "Events", "skills": "click, keyup, submit listeners" },
      { "lesson": 10, "topic": "ES6 Essentials", "skills": "template literals, destructuring" },
      { "lesson": 11, "topic": "Error Handling & Debugging", "skills": "try/catch, dev tools" },
      { "lesson": 12, "topic": "Capstone Build", "skills": "Assemble the To‑Do List App" }
    ],
    "project": {
      "title": "Interactive To‑Do List App",
      "description": "Build a complete to‑do list where users can add, delete, and mark tasks complete. You’ll apply DOM manipulation, event handling and local storage to save tasks between sessions."
    },
    "prerequisites": ["Solid HTML & CSS foundation", "Modern browser", "VS Code"],
    "includes": ["HD video lessons", "Source code & challenges", "JS cheat‑sheet", "PDF certificate"],
    "instructor": {
      "name": "Neha Gupta",
      "bio": "Full‑Stack Developer • Passionate about teaching JS clearly.",
      "links": { "linkedin": "#", "twitter": "#", "portfolio": "#" }
    },
    "reviews": [
      { "stars": 5, "quote": "Now I can finally add interactivity!", "student": "Karan M." },
      { "stars": 4.5, "quote": "The to‑do project was super useful.", "student": "Priya S." }
    ],
    "faq": [
      { "q": "Will we cover frameworks?", "a": "No, this course focuses on core JavaScript fundamentals." },
      { "q": "Do I need prior JS knowledge?", "a": "None at all — we start from scratch." }
    ],
    "footerCTA": "Bring your pages to life—start coding with JavaScript today!",
    "whatYouWillLearn": [
      "Read & write modern JavaScript (ES6+)",
      "Manipulate the DOM to update pages in real‑time",
      "Handle user events and build interactive features",
      "Store data locally with browser APIs"
    ],
    "skillsYouWillGain": [
      "Core JavaScript syntax & logic",
      "DOM traversal & manipulation",
      "Event‑driven programming",
      "LocalStorage persistence"
    ],
    "lessons": [
      {
        "lesson": 1,
        "topic": "Intro to Java-Sript",
        "skills": ["Script tags", "Console"],
        "description": "This lesson introduces you to JavaScript. You'll learn how to embed JavaScript into your HTML file using script tags and how to output to the console for debugging and testing.",
        "elements": [
          {
            "name": "Script Tags",
            "description": "The script tag is used to embed JavaScript into your HTML documents. It can be placed either in the head or body of the HTML.",
            "example": "<script src='script.js'></script>",
            "usage": "Place the <script> tag in the <head> or at the end of the <body> section to link external JavaScript files. If writing inline JS, include the script directly inside the tag."
          },
          {
            "name": "Console",
            "description": "The console object provides access to the browser's debugging console, allowing you to log messages for testing and debugging.",
            "example": "console.log('Hello, World!');",
            "usage": "Use console.log() to output data to the console, helping you track the values of variables and check if code is running correctly."
          }
        ],
        "example": "<script>\nconsole.log('Welcome to JavaScript!');\n</script>",
        "practice": "Create a simple HTML page with an embedded script tag that logs a 'Hello World' message to the console."
      },
      {
        "lesson": 2,
        "topic": "Variables & Data Types",
        "skills": ["let", "const", "strings", "numbers"],
        "description": "In this lesson, you will learn how to declare variables in JavaScript using `let`, `const`, and `var`, and understand the basic data types like strings, numbers, booleans, and more.",
        "elements": [
          {
            "name": "let and const",
            "description": "Both `let` and `const` are used for variable declaration, but `let` allows reassignment, while `const` creates a constant whose value cannot be changed.",
            "example": "let name = 'Alice';\nconst age = 25;",
            "usage": "Use `let` when the value needs to be reassigned, and `const` when the value should remain constant."
          },
          {
            "name": "Data Types",
            "description": "JavaScript has several data types including numbers, strings, booleans, arrays, objects, and more.",
            "example": "let score = 100;\nlet name = 'John';\nlet isActive = true;",
            "usage": "Understand the basic types of data in JavaScript to store and manipulate information correctly."
          }
        ],
        "example": "let name = 'John';\nlet score = 100;\nconsole.log(name + ' has ' + score + ' points.');",
        "practice": "Declare variables of different types: a string, number, and boolean. Use them in a simple message in the console."
      },
      {
        "lesson": 3,
        "topic": "Operators & Expressions",
        "skills": ["Math", "Comparison", "Logical"],
        "description": "This lesson covers various operators used in JavaScript, including arithmetic, comparison, and logical operators. You will also learn how expressions are evaluated in JavaScript.",
        "elements": [
          {
            "name": "Arithmetic Operators",
            "description": "Arithmetic operators are used to perform mathematical operations on numbers.",
            "example": "let sum = 10 + 5;\nlet difference = 10 - 5;\nlet product = 10 * 5;",
            "usage": "Use arithmetic operators to perform calculations like addition, subtraction, multiplication, and division."
          },
          {
            "name": "Comparison Operators",
            "description": "Comparison operators are used to compare two values. They return a boolean value indicating whether the comparison is true or false.",
            "example": "let isEqual = 10 == 10;  // true\nlet isGreater = 10 > 5;  // true",
            "usage": "Use comparison operators like `==`, `===`, `>`, `<`, `>=`, `<=` to compare values and control the flow of logic."
          },
          {
            "name": "Logical Operators",
            "description": "Logical operators are used to combine multiple conditions in an expression. They include `&&` (AND), `||` (OR), and `!` (NOT).",
            "example": "let result = true && false;  // false\nlet isEitherTrue = true || false;  // true",
            "usage": "Use logical operators to test multiple conditions at once, combining boolean values to form more complex expressions."
          }
        ],
        "example": "let a = 10;\nlet b = 5;\nlet sum = a + b;\nconsole.log(sum);",
        "practice": "Create a simple calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division)."
      },
      {
        "lesson": 4,
        "topic": "Conditionals",
        "skills": ["if/else", "switch"],
        "description": "Learn how to control the flow of your program based on conditions. This lesson covers `if/else` statements and `switch` statements to execute code only when certain conditions are met.",
        "elements": [
          {
            "name": "if/else",
            "description": "The `if/else` statement is used to execute code based on whether a condition evaluates to true or false.",
            "example": "if (score >= 50) {\n  console.log('You passed!');\n} else {\n  console.log('You failed!');\n}",
            "usage": "Use `if/else` to check conditions and execute different blocks of code based on the result."
          },
          {
            "name": "Switch",
            "description": "The `switch` statement is used to compare a variable to a series of values, executing the code block for the matching case.",
            "example": "switch (day) {\n  case 'Monday':\n    console.log('Start of the week');\n    break;\n  case 'Friday':\n    console.log('End of the week');\n    break;\n  default:\n    console.log('Another day');\n}",
            "usage": "Use `switch` when you have multiple potential values for a single variable and want to compare it against multiple cases."
          }
        ],
        "example": "let score = 70;\nif (score >= 50) {\n  console.log('Pass');\n} else {\n  console.log('Fail');\n}",
        "practice": "Write a program that checks the current day and outputs a message based on whether it's a weekday or weekend."
      },
      {
        "lesson": 5,
        "topic": "Loops",
        "skills": ["for", "while", "iterating arrays"],
        "description": "This lesson covers how to repeat code using loops. You'll learn how to use `for` and `while` loops, and iterate over arrays to process data.",
        "elements": [
          {
            "name": "For Loop",
            "description": "A `for` loop is used to repeat a block of code a certain number of times. It is commonly used when you know how many iterations are needed.",
            "example": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
            "usage": "Use `for` loops to iterate over a known number of items or to repeat a block of code a set number of times."
          },
          {
            "name": "While Loop",
            "description": "A `while` loop repeats a block of code as long as a specified condition is true.",
            "example": "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}",
            "usage": "Use `while` loops when you don't know beforehand how many iterations are required but you have a condition to check each time."
          }
        ],
        "example": "for (let i = 0; i < 5; i++) {\n  console.log('Iteration number: ' + i);\n}",
        "practice": "Create a program that loops through an array of numbers and prints out each one in the console."
      },
      {
        "lesson": 6,
        "topic": "Functions",
        "skills": ["Parameters", "Return", "Arrow Functions"],
        "description": "Functions allow you to group code into reusable blocks. You'll learn how to create functions, pass parameters, return values, and use arrow functions for concise syntax.",
        "elements": [
          {
            "name": "Function Declaration",
            "description": "A function is defined using the `function` keyword, followed by the function name and parameters in parentheses.",
            "example": "function add(a, b) {\n  return a + b;\n}",
            "usage": "Use functions to group related code and make it reusable by passing parameters and returning values."
          },
          {
            "name": "Arrow Functions",
            "description": "Arrow functions are a more concise way to write functions, especially for small, one-line functions.",
            "example": "const add = (a, b) => a + b;",
            "usage": "Use arrow functions for simpler syntax, especially when you don't need to bind `this` or use multiple lines."
          }
        ],
        "example": "function greet(name) {\n  return 'Hello, ' + name;\n}\nconsole.log(greet('Alice'));",
        "practice": "Write a function that takes two numbers as arguments and returns their sum."
      },
      {
        "lesson": 7,
        "topic": "Arrays & Objects",
        "skills": ["CRUD operations", "Methods"],
        "description": "In this lesson, you'll learn how to work with arrays and objects in JavaScript. Arrays are used to store multiple values in a single variable, while objects store key-value pairs. You'll also learn how to perform CRUD operations (Create, Read, Update, Delete) and use built-in methods for manipulation.",
        "elements": [
          {
            "name": "Arrays",
            "description": "Arrays are ordered collections of values, and they can store any type of data. You can access the elements of an array using their index position (starting from 0).",
            "example": "let colors = ['red', 'green', 'blue'];\nconsole.log(colors[0]);  // Outputs 'red'",
            "usage": "Use arrays when you need to store multiple related values. Arrays can be manipulated using methods like `push()`, `pop()`, `shift()`, and `unshift()`."
          },
          {
            "name": "Objects",
            "description": "Objects are collections of key-value pairs, where the keys are strings and the values can be any data type (numbers, strings, arrays, etc.).",
            "example": "let person = { name: 'John', age: 30, occupation: 'Engineer' };\nconsole.log(person.name);  // Outputs 'John'",
            "usage": "Use objects when you need to store data with labeled keys. You can access the values using dot notation (`object.key`) or bracket notation (`object['key']`)."
          },
          {
            "name": "CRUD Operations",
            "description": "CRUD operations allow you to create, read, update, and delete elements in arrays and objects.",
            "example": {
              "create": "let arr = [];\narr.push(1);  // Adds 1 to the array",
              "read": "let person = { name: 'John' };\nconsole.log(person.name);  // Outputs 'John'",
              "update": "person.name = 'Jane';  // Updates the name",
              "delete": "delete person.name;  // Deletes the name property"
            },
            "usage": "Perform CRUD operations on arrays and objects to add, retrieve, modify, or remove data."
          }
        ],
        "example": "let arr = [1, 2, 3];\narr.push(4);  // Adds 4 to the array\nconsole.log(arr);  // Outputs [1, 2, 3, 4]",
        "practice": "Create an array and an object, then perform CRUD operations on them. For the array, add elements, remove one, and retrieve the first element. For the object, modify and delete a property."
      },
      {
        "lesson": 8,
        "topic": "The DOM",
        "skills": ["querySelector", "createElement"],
        "description": "The DOM is a programming interface for web documents. It represents the page so that programs can manipulate the structure, style, and content of web pages. You'll learn how to use JavaScript to interact with the DOM, select elements, and modify the content of the page dynamically.",
        "elements": [
          {
            "name": "querySelector",
            "description": "The `querySelector` method allows you to select an element from the DOM using CSS selectors. It returns the first matching element.",
            "example": "let element = document.querySelector('.button');\nconsole.log(element);",
            "usage": "Use `querySelector` when you need to target a single element using its class, id, or any other CSS selector."
          },
          {
            "name": "createElement",
            "description": "The `createElement` method is used to create a new HTML element dynamically in JavaScript.",
            "example": "let newDiv = document.createElement('div');\nnewDiv.textContent = 'This is a new div';",
            "usage": "Use `createElement` when you want to add a new HTML element dynamically to the DOM, such as creating new content based on user interaction."
          }
        ],
        "example": "let newButton = document.createElement('button');\nnewButton.textContent = 'Click Me';\ndocument.body.appendChild(newButton);",
        "practice": "Create a simple HTML page with a button. Use JavaScript to dynamically add another button when the first one is clicked."
      },
      {
        "lesson": 9,
        "topic": "Events",
        "skills": ["click", "keyup", "submit listeners"],
        "description": "Events allow JavaScript to respond to user actions like clicks, keystrokes, and form submissions. In this lesson, you'll learn how to handle events like clicks and key presses, as well as how to use event listeners to trigger actions in your app.",
        "elements": [
          {
            "name": "click Event",
            "description": "The `click` event is triggered when an element is clicked. You can use it to perform an action when the user clicks on a button, link, or any other clickable element.",
            "example": "let button = document.querySelector('button');\nbutton.addEventListener('click', () => {\n  alert('Button clicked!');\n});",
            "usage": "Use `click` events for interactive elements that need to respond to user input, such as buttons or images."
          },
          {
            "name": "keyup Event",
            "description": "The `keyup` event is triggered when the user releases a key on the keyboard. This event can be used for form validation or other actions based on input.",
            "example": "let input = document.querySelector('input');\ninput.addEventListener('keyup', (event) => {\n  console.log(event.target.value);\n});",
            "usage": "Use `keyup` events to detect user input in real-time, for example, to perform live search functionality or update a display based on the input."
          },
          {
            "name": "submit Event",
            "description": "The `submit` event is triggered when a form is submitted. It can be used to perform form validation or send data to the server.",
            "example": "let form = document.querySelector('form');\nform.addEventListener('submit', (event) => {\n  event.preventDefault();  // Prevents default form submission\n  console.log('Form submitted!');\n});",
            "usage": "Use `submit` events to handle form submissions, prevent default behavior, and handle custom form logic."
          }
        ],
        "example": "let button = document.querySelector('button');\nbutton.addEventListener('click', () => {\n  alert('Hello!');\n});",
        "practice": "Create an input field where a user types a message. Display the message in real-time using the `keyup` event as they type."
      },
      {
        "lesson": 10,
        "topic": "ES6 Essentials",
        "skills": ["template literals", "destructuring"],
        "description": "ES6 (ECMAScript 2015) introduced many powerful features to JavaScript that make the code cleaner, more efficient, and easier to understand. In this lesson, you'll learn about two key ES6 features: template literals and destructuring.",
        "elements": [
          {
            "name": "Template Literals",
            "description": "Template literals allow you to embed expressions inside string literals, making string concatenation easier and more readable. They are enclosed in backticks (``).",
            "example": "let name = 'John';\nlet greeting = `Hello, ${name}!`;\nconsole.log(greeting);  // Outputs 'Hello, John!'",
            "usage": "Use template literals when you need to embed variables or expressions inside strings. It's especially helpful for building dynamic strings."
          },
          {
            "name": "Destructuring",
            "description": "Destructuring is a convenient way of extracting multiple values from arrays or objects and storing them in variables.",
            "example": "let person = { name: 'Alice', age: 25 };\nlet { name, age } = person;\nconsole.log(name, age);  // Outputs 'Alice 25'",
            "usage": "Use destructuring to simplify the process of extracting values from arrays and objects, making your code more concise and readable."
          }
        ],
        "example": "let numbers = [1, 2, 3];\nlet [a, b, c] = numbers;\nconsole.log(a, b, c);  // Outputs 1 2 3",
        "practice": "Create an object with multiple properties. Use destructuring to extract two properties into variables and log them."
      },
      {
        "lesson": 11,
        "topic": "Error Handling & Debugging",
        "skills": ["try/catch", "dev tools"],
        "description": "Error handling is an important part of any programming language. It allows you to manage and recover from unexpected situations in your code. In this lesson, you'll learn how to handle errors using `try/catch` blocks and use developer tools to debug your code.",
        "elements": [
          {
            "name": "try/catch",
            "description": "The `try/catch` statement lets you test a block of code for errors and handle them gracefully without crashing your program.",
            "example": "try {\n  let x = y + 1;  // This will cause an error because y is undefined\n} catch (error) {\n  console.log('An error occurred: ' + error.message);\n}",
            "usage": "Use `try/catch` when you expect that an error might occur in a certain part of your code, such as during network requests or when handling user input."
          },
          {
            "name": "Dev Tools",
            "description": "Modern browsers come with powerful developer tools that help you inspect HTML, CSS, and JavaScript in real-time. You can set breakpoints, inspect variables, and step through your code to find issues.",
            "example": "In Chrome, press `F12` to open Developer Tools. Use the 'Sources' tab to set breakpoints and the 'Console' tab to view logs and errors.",
            "usage": "Use browser developer tools for live debugging. These tools allow you to view and manipulate the DOM, check for errors in the console, and step through JavaScript code line by line."
          }
        ],
        "example": "try {\n  let user = JSON.parse('invalid json');\n} catch (error) {\n  console.error('Error parsing JSON:', error);\n}",
        "practice": "Write a simple program that divides two numbers. Use a `try/catch` block to handle any division by zero errors and log the error message."
      },
      {
        "lesson": 12,
        "topic": "Capstone Build",
        "skills": ["Assemble the To-Do List App"],
        "description": "In the final lesson, you will apply everything you've learned so far to build a complete project. You will create a To-Do List application that allows users to add, edit, and delete tasks. This capstone project will test your understanding of JavaScript fundamentals and help you solidify your skills.",
        "elements": [
          {
            "name": "To-Do List App",
            "description": "The To-Do List App is a simple yet practical project that covers basic CRUD operations, DOM manipulation, and event handling. Users can add new tasks, mark tasks as completed, and delete tasks.",
            "example": "let tasks = [];\ndocument.querySelector('#addBtn').addEventListener('click', () => {\n  let task = document.querySelector('#taskInput').value;\n  tasks.push(task);\n  updateTaskList();\n});",
            "usage": "Use this project to apply your JavaScript skills in a real-world scenario. Focus on handling user interactions, manipulating the DOM, and managing state."
          }
        ],
        "example": "let tasks = [];\nfunction addTask(task) {\n  tasks.push(task);\n  renderTasks();\n}\nfunction renderTasks() {\n  let list = document.querySelector('#taskList');\n  list.innerHTML = '';\n  tasks.forEach(task => {\n    let li = document.createElement('li');\n    li.textContent = task;\n    list.appendChild(li);\n  });\n}",
        "practice": "Build the To-Do List app that allows users to add tasks. Then, extend the app by allowing users to mark tasks as completed and delete tasks."
      }
    ],
    "questions": [
      {
        "question": "What does JavaScript primarily run on?",
        "options": ["Server", "Browser", "Database", "Operating System"],
        "answer": "Browser"
      },
      {
        "question": "Which HTML tag is used to embed JavaScript code?",
        "options": ["<js>", "<javascript>", "<script>", "<style>"],
        "answer": "<script>"
      },
      {
        "question": "How do you write 'Hello World' to the console in JavaScript?",
        "options": ["console.log('Hello World')", "log.console('Hello World')", "print('Hello World')", "echo('Hello World')"],
        "answer": "console.log('Hello World')"
      },
      {
        "question": "Which company developed JavaScript?",
        "options": ["Google", "Microsoft", "Netscape", "Apple"],
        "answer": "Netscape"
      },
      {
        "question": "Which of the following is NOT a valid JavaScript variable declaration?",
        "options": ["let name = 'John';", "const age = 30;", "var city = 'Delhi';", "int number = 10;"],
        "answer": "int number = 10;"
      },
      {
        "question": "Which keyword is used to declare a constant variable?",
        "options": ["let", "const", "var", "constant"],
        "answer": "const"
      },
      {
        "question": "What is the value of: `typeof true`?",
        "options": ["string", "boolean", "object", "undefined"],
        "answer": "boolean"
      },
      {
        "question": "Which of the following is a valid variable name?",
        "options": ["1stName", "first-name", "first_name", "first name"],
        "answer": "first_name"
      },
      {
        "question": "What will `console.log(typeof null)` return?",
        "options": ["null", "object", "undefined", "boolean"],
        "answer": "object"
      },
      {
        "question": "What does `===` operator check in JavaScript?",
        "options": ["Only value", "Only type", "Both value and type", "None of the above"],
        "answer": "Both value and type"
      },
      {
        "question": "Which operator is used for assignment?",
        "options": ["==", "===", "=", "=>"],
        "answer": "="
      },
      {
        "question": "What is the result of `5 + '5'`?",
        "options": ["10", "55", "NaN", "Error"],
        "answer": "55"
      },
      {
        "question": "Which operator is used for remainder in JavaScript?",
        "options": ["%", "/", "*", "#"],
        "answer": "%"
      },
      {
        "question": "What does `!true` evaluate to?",
        "options": ["true", "false", "undefined", "null"],
        "answer": "false"
      },
      {
        "question": "What will be the output of `typeof undefined`?",
        "options": ["null", "object", "undefined", "string"],
        "answer": "undefined"
      },
      {
        "question": "What will be the result of `0 == false`?",
        "options": ["true", "false", "error", "NaN"],
        "answer": "true"
      },
      {
        "question": "Which operator is used to compare values *without* type coercion?",
        "options": ["==", "===", "!=", "="],
        "answer": "==="
      },
      {
        "question": "Which of these is a JavaScript data type?",
        "options": ["boolean", "integer", "char", "decimal"],
        "answer": "boolean"
      },
      {
        "question": "What is the default value of an uninitialized variable?",
        "options": ["null", "0", "undefined", "false"],
        "answer": "undefined"
      },
      {
        "question": "Which keyword allows value reassignment after declaration?",
        "options": ["const", "let", "define", "fixed"],
        "answer": "let"
      }
    ]
  }
]

