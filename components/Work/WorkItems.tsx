interface WorkInterface {
    name: string,
    details: string,
    live: string,
    source: string,
    tech: string[],
}

type WorkType = Array<WorkInterface>;

const WorkItems: WorkType = [
    {
        name: 'Void List',
        details: 'Void List is a todo-list web application created with MERN stack and tailwindcss. You can create, edit and delete a task. When you authenticate for the first time, you are given a customize avatar which is randamized.',
        live: 'https://voidtodo.herokuapp.com/',
        source: 'https://github.com/pandacover/void-todo',
        tech: ["React.js", "Node.js", "Express.js", "MongoDb", "Redux", "Tailwindcss"]
    },
    {
        name: "Goal Setter",
        details: "GoalSetter is a personal goal setting application created with MERN stack. GoalSetter lets you create, edit, update and delete your personal goals only while keeping you and others away from manipulating else's goals.",
        live: "https://goalsetterluv.herokuapp.com/",
        source: "https://github.com/pandacover/goalsetter",
        tech: ["React.js", "Node.js", "Express.js", "MongoDb", "Redux"]
    },
    {
        name: "Express Tracker",
        details: "A React.js expense tracker to keep note of your credits and debits. It can also calculate your overall savings.",
        live: "https://tracker-expense-pandacover.netlify.app/",
        source: "https://github.com/pandacover/expense-tracker-react.git",
        tech: ["React.js", "Context API"]
    },
    {
        name: "Swiggy Clone Edyst",
        details: "A clone of Swiggy's website landing page made in React.js",
        live: "https://swiggy-clone-edyst.netlify.app/",
        source: "https://github.com/edyst/swiggy-landing-page-reactjs-pandacover",
        tech: ["React.js"]
    },
    {
        name: "Sudoku",
        details: "Sudoku game created with JavaScript, Html and Css. The game has 3 difficulty levels ranging from Easy to Hard. Do you have what it takes to solve the puzzle?",
        live: "https://sudoku-pandacover.netlify.app/",
        source: "https://github.com/edyst/sudoku-edyst-pandacover",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Pok??mon Wiki",
        details: "A Wiki page for the famous T.V. show and game Pok??mon. Created with Html and Css. The website is fully responsive with mobiles too.",
        live: "https://pokemon-wiki-pandacover.netlify.app/",
        source: "https://github.com/edyst/pokemon-wiki-edyst-pandacover",
        tech: ["HTML", "CSS"]
    },

]

export default WorkItems;