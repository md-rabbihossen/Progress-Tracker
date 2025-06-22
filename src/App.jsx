import { useEffect, useMemo, useState } from "react";

// --- DATA: The 26-Week Roadmap Plan ---
// This object contains all the phases, weeks, and topics.
// We've added a `completed` flag to each topic to track progress.
const initialRoadmapData = [
  {
    phase: "Phase 1: Mastering Modern JavaScript",
    duration: "Weeks 1-4",
    weeks: [
      {
        week: 1,
        title: "JavaScript Fundamentals & Core Concepts",
        topics: [
          { text: "Review: let, const, var, and scope", completed: false },
          {
            text: "Data Types: Primitives vs. Reference types",
            completed: false,
          },
          {
            text: "Functions: Declarations, Expressions, Arrow Functions, `this` keyword",
            completed: false,
          },
          { text: "Control Flow: Conditionals and loops", completed: false },
          {
            text: "Error Handling with try...catch...finally",
            completed: false,
          },
        ],
      },
      {
        week: 2,
        title: "Data Structures & DOM Interaction",
        topics: [
          {
            text: "Arrays & methods (map, filter, reduce, find, etc.)",
            completed: false,
          },
          {
            text: "Objects: Properties, methods, destructuring, spread operator",
            completed: false,
          },
          { text: "JSON: JSON.stringify() and JSON.parse()", completed: false },
          {
            text: "DOM Manipulation (querySelector, createElement, etc.)",
            completed: false,
          },
          {
            text: "Events: Event listeners, event object, event delegation",
            completed: false,
          },
        ],
      },
      {
        week: 3,
        title: "Asynchronous JavaScript",
        topics: [
          { text: "The Event Loop concept", completed: false },
          { text: "Callbacks and Callback Hell", completed: false },
          { text: "Promises: .then(), .catch(), .finally()", completed: false },
          { text: "Focus: async/await", completed: false },
          { text: "The Fetch API for making requests", completed: false },
        ],
      },
      {
        week: 4,
        title: "ES6+, Modules, and Tooling",
        topics: [
          {
            text: "ES6+ Features: Template Literals, Optional Chaining, Nullish Coalescing",
            completed: false,
          },
          { text: "JavaScript Modules: import/export", completed: false },
          { text: "Intro to npm/yarn (package management)", completed: false },
          { text: "Basic command-line proficiency", completed: false },
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Diving Deep into React",
    duration: "Weeks 5-9",
    weeks: [
      {
        week: 5,
        title: "Introduction to React & JSX",
        topics: [
          { text: "What is React? The 'why' behind it", completed: false },
          { text: "Setting up a project with Vite", completed: false },
          { text: "Functional Components", completed: false },
          { text: "JSX syntax and rules", completed: false },
          { text: "Props: Passing data to components", completed: false },
        ],
      },
      {
        week: 6,
        title: "State, Events, and Forms",
        topics: [
          { text: "The useState Hook", completed: false },
          { text: "Handling Events (onClick, onChange)", completed: false },
          { text: "Controlled Components for forms", completed: false },
          { text: "Lifting State Up", completed: false },
        ],
      },
      {
        week: 7,
        title: "The Component Lifecycle & Side Effects",
        topics: [
          { text: "The useEffect Hook for side effects", completed: false },
          { text: "Understanding the Dependency Array", completed: false },
          { text: "Cleanup function in useEffect", completed: false },
          { text: "Fetching API data in React", completed: false },
        ],
      },
      {
        week: 8,
        title: "React Router & Client-Side Navigation",
        topics: [
          { text: "React Router v6 setup", completed: false },
          {
            text: "Key Components: <BrowserRouter>, <Routes>, <Route>, <Link>",
            completed: false,
          },
          { text: "Dynamic Routing with useParams", completed: false },
          {
            text: "Programmatic Navigation with useNavigate",
            completed: false,
          },
        ],
      },
      {
        week: 9,
        title: "Mini-Project & Deployment",
        topics: [
          { text: "Build a 'Movie Search App' using an API", completed: false },
          { text: "Integrate search functionality", completed: false },
          { text: "Use React Router for detail pages", completed: false },
          { text: "Deploy the project to Vercel/Netlify", completed: false },
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced React & State Management",
    duration: "Weeks 10-13",
    weeks: [
      {
        week: 10,
        title: "Advanced Hooks & Reusability",
        topics: [
          {
            text: "useContext Hook for avoiding 'prop drilling'",
            completed: false,
          },
          { text: "useReducer Hook for complex state", completed: false },
          { text: "Creating Custom Hooks (e.g., useFetch)", completed: false },
        ],
      },
      {
        week: 11,
        title: "Styling and Component Libraries",
        topics: [
          { text: "Deep dive into Tailwind CSS with React", completed: false },
          {
            text: "Learn a Component Library (e.g., Shadcn/ui or MUI)",
            completed: false,
          },
          {
            text: "Understand CSS-in-JS (Styled-Components) concepts",
            completed: false,
          },
        ],
      },
      {
        week: 12,
        title: "State Management Libraries",
        topics: [
          { text: "Understand the need for global state", completed: false },
          {
            text: "Learn and implement Zustand (modern & simple)",
            completed: false,
          },
          { text: "Understand Redux Toolkit concepts", completed: false },
          { text: "Persist state to Local Storage", completed: false },
        ],
      },
      {
        week: 13,
        title: "Mid-Level Project: E-commerce UI",
        topics: [
          {
            text: "Build an E-commerce Product Display Page UI",
            completed: false,
          },
          { text: "Use React Router for navigation", completed: false },
          { text: "Use Zustand for shopping cart state", completed: false },
          {
            text: "Fetch product data from a fake store API",
            completed: false,
          },
          { text: "Style professionally with Tailwind CSS", completed: false },
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Entering the World of Next.js",
    duration: "Weeks 14-17",
    weeks: [
      {
        week: 14,
        title: "Introduction to Next.js",
        topics: [
          {
            text: "The 'why' behind Next.js (SSR, SSG, SEO)",
            completed: false,
          },
          { text: "Focus on the App Router (new standard)", completed: false },
          {
            text: "File-based Routing (page.js, layout.js, etc.)",
            completed: false,
          },
          { text: "Linking with next/link", completed: false },
        ],
      },
      {
        week: 15,
        title: "Data Fetching in Next.js",
        topics: [
          { text: "Server Components vs. Client Components", completed: false },
          { text: "Fetching data in Server Components", completed: false },
          { text: "Static Site Generation (SSG)", completed: false },
          {
            text: "Server-Side Rendering (SSR) and dynamic rendering",
            completed: false,
          },
          { text: "Data Caching and Revalidation", completed: false },
        ],
      },
      {
        week: 16,
        title: "Next.js Features & Styling",
        topics: [
          { text: "API Routes for backend endpoints", completed: false },
          { text: "Image Optimization with <Image>", completed: false },
          { text: "Font Optimization with next/font", completed: false },
          { text: "Metadata API for SEO", completed: false },
        ],
      },
      {
        week: 17,
        title: "Intermediate Next.js Project: Portfolio",
        topics: [
          {
            text: "Build a professional developer portfolio",
            completed: false,
          },
          {
            text: "Make it statically generated (SSG) for performance",
            completed: false,
          },
          { text: "Optimize for SEO with metadata", completed: false },
          { text: "Deploy to Vercel with a custom domain", completed: false },
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Full-Stack Next.js & Advanced Concepts",
    duration: "Weeks 18-21",
    weeks: [
      {
        week: 18,
        title: "Authentication",
        topics: [
          {
            text: "Understand authentication patterns (JWT, sessions)",
            completed: false,
          },
          { text: "Implement NextAuth.js", completed: false },
          { text: "Add Social Logins (Google, GitHub)", completed: false },
          { text: "Protect pages and API routes", completed: false },
        ],
      },
      {
        week: 19,
        title: "Database Integration with Prisma",
        topics: [
          { text: "Intro to databases (SQL vs. NoSQL)", completed: false },
          { text: "Set up a database with Supabase", completed: false },
          {
            text: "Learn Prisma ORM to interact with the database",
            completed: false,
          },
          { text: "Create a database schema", completed: false },
        ],
      },
      {
        week: 20,
        title: "Full-Stack Capstone Project (Build)",
        topics: [
          {
            text: "Choose a project (Job Board, Forum, etc.)",
            completed: false,
          },
          {
            text: "Set up the full stack: Next.js, NextAuth, Prisma, DB",
            completed: false,
          },
          {
            text: "Build core CRUD functionality (Create, Read, Update, Delete)",
            completed: false,
          },
        ],
      },
      {
        week: 21,
        title: "Full-Stack Capstone Project (Polish & Deploy)",
        topics: [
          { text: "Add loading states (spinners/skeletons)", completed: false },
          {
            text: "Implement robust error handling (e.g., react-hot-toast)",
            completed: false,
          },
          { text: "Ensure full mobile responsiveness", completed: false },
          { text: "Run Lighthouse audit and optimize", completed: false },
          { text: "Deploy with a production database", completed: false },
        ],
      },
    ],
  },
  {
    phase: "Phase 6: Job & Freelance Preparation",
    duration: "Weeks 22-26",
    weeks: [
      {
        week: 22,
        title: "Building Your Brand",
        topics: [
          { text: "Polish portfolio with 3 best projects", completed: false },
          {
            text: "Write excellent READMEs for each project on GitHub",
            completed: false,
          },
          { text: "Create a professional one-page resume", completed: false },
          { text: "Optimize LinkedIn profile", completed: false },
        ],
      },
      {
        week: 23,
        title: "The Freelance Launchpad",
        topics: [
          { text: "Create profiles on Upwork and Fiverr", completed: false },
          {
            text: "Research and practice writing winning proposals",
            completed: false,
          },
          {
            text: "Create specific, service-based gigs on Fiverr",
            completed: false,
          },
          {
            text: "Send 10-15 high-quality proposals on Upwork",
            completed: false,
          },
        ],
      },
      {
        week: 24,
        title: "Mastering the Technical Interview",
        topics: [
          {
            text: "Revisit core JS concepts (event loop, closures, etc.)",
            completed: false,
          },
          {
            text: "Practice common React interview questions",
            completed: false,
          },
          {
            text: "Solve LeetCode (Easy/Medium) problems (Arrays, Strings, Hashmaps)",
            completed: false,
          },
          {
            text: "Conduct mock interviews with peers or on platforms",
            completed: false,
          },
        ],
      },
      {
        week: 25,
        title: "The Job Application Offensive",
        topics: [
          {
            text: "Target 3-5 quality remote job applications per day",
            completed: false,
          },
          {
            text: "Use LinkedIn, We Work Remotely, RemoteOK, Arc.dev",
            completed: false,
          },
          {
            text: "Write a short, customized cover letter for each application",
            completed: false,
          },
          { text: "Track all applications in a spreadsheet", completed: false },
        ],
      },
      {
        week: 26,
        title: "Continuous Improvement & First Contact",
        topics: [
          {
            text: "Make a small contribution to an open-source project",
            completed: false,
          },
          { text: "Network on LinkedIn and Twitter", completed: false },
          {
            text: "Build another small project or write a blog post",
            completed: false,
          },
          {
            text: "Review and refine portfolio/resume based on feedback",
            completed: false,
          },
        ],
      },
    ],
  },
];

// --- Reusable Components ---

/**
 * A reusable progress bar component.
 * @param {{ percentage: number }} props
 */
const ProgressBar = ({ percentage }) => {
  const displayPercentage = isNaN(percentage) ? 0 : percentage.toFixed(2);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-black h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${displayPercentage}%` }}
      ></div>
    </div>
  );
};

/**
 * A component to display a single week's checklist and progress.
 * @param {{ weekData: object, onToggle: function, phaseIndex: number, weekIndex: number }} props
 */
const Week = ({ weekData, onToggle, phaseIndex, weekIndex }) => {
  const [isOpen, setIsOpen] = useState(weekData.week === 1); // Open first week by default

  const completedTopics = weekData.topics.filter((t) => t.completed).length;
  const totalTopics = weekData.topics.length;
  const weekPercentage =
    totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4 shadow-sm">
      <button
        className="w-full p-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className="text-gray-500 text-sm">Week {weekData.week}</p>
          <h3 className="font-bold text-lg text-gray-900">{weekData.title}</h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-mono text-gray-900">
            {weekPercentage.toFixed(2)}%
          </span>
          <svg
            className={`w-6 h-6 text-gray-500 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <div className="mb-4">
            <ProgressBar percentage={weekPercentage} />
          </div>
          <ul className="space-y-3">
            {weekData.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="flex items-center">
                <input
                  type="checkbox"
                  id={`topic-${phaseIndex}-${weekIndex}-${topicIndex}`}
                  checked={topic.completed}
                  onChange={() => onToggle(phaseIndex, weekIndex, topicIndex)}
                  className="w-5 h-5 text-gray-800 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                />
                <label
                  htmlFor={`topic-${phaseIndex}-${weekIndex}-${topicIndex}`}
                  className={`ml-3 text-gray-700 cursor-pointer transition-colors ${
                    topic.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {topic.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [roadmap, setRoadmap] = useState(() => {
    // Lazy initializer to load from localStorage only on first render
    try {
      const savedProgress = localStorage.getItem("roadmapProgress");
      return savedProgress ? JSON.parse(savedProgress) : initialRoadmapData;
    } catch (error) {
      console.error("Could not parse roadmap from localStorage", error);
      return initialRoadmapData;
    }
  });

  // Effect to save progress to localStorage whenever the roadmap state changes
  useEffect(() => {
    try {
      localStorage.setItem("roadmapProgress", JSON.stringify(roadmap));
    } catch (error) {
      console.error("Could not save roadmap to localStorage", error);
    }
  }, [roadmap]);

  // Handler to toggle a topic's completion status
  const handleToggleTopic = (phaseIndex, weekIndex, topicIndex) => {
    // Create a deep copy to avoid direct state mutation
    const newRoadmap = JSON.parse(JSON.stringify(roadmap));
    const topic = newRoadmap[phaseIndex].weeks[weekIndex].topics[topicIndex];
    topic.completed = !topic.completed;
    setRoadmap(newRoadmap);
  };

  // Memoized calculation for the overall progress
  const overallProgress = useMemo(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    roadmap.forEach((phase) => {
      phase.weeks.forEach((week) => {
        totalTopics += week.topics.length;
        completedTopics += week.topics.filter((t) => t.completed).length;
      });
    });
    return totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
  }, [roadmap]);

  const handleResetProgress = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all your progress? This cannot be undone."
      )
    ) {
      localStorage.removeItem("roadmapProgress");
      // Need to create a fresh deep copy to reset state correctly
      setRoadmap(JSON.parse(JSON.stringify(initialRoadmapData)));
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* --- Header --- */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
            React & Next.js Developer Roadmap
          </h1>
          <p className="text-lg text-gray-600">
            Your 26-Week Journey to Becoming a Pro
          </p>
        </header>

        {/* --- Main Progress Bar --- */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10 sticky top-4 z-10 backdrop-blur-sm bg-opacity-70">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-black">Overall Progress</h2>
            <span className="text-xl font-mono font-bold text-black">
              {overallProgress.toFixed(2)}%
            </span>
          </div>
          <ProgressBar percentage={overallProgress} />
        </div>

        {/* --- Roadmap Phases and Weeks --- */}
        <main>
          {roadmap.map((phase, phaseIndex) => (
            <section key={phaseIndex} className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-black border-b-2 border-gray-200 pb-2 mb-1">
                  {phase.phase}
                </h2>
                <p className="text-gray-600">{phase.duration}</p>
              </div>
              {phase.weeks.map((week, weekIndex) => (
                <Week
                  key={week.week}
                  weekData={week}
                  onToggle={handleToggleTopic}
                  phaseIndex={phaseIndex}
                  weekIndex={weekIndex}
                />
              ))}
            </section>
          ))}
        </main>

        {/* --- Footer / Reset Button --- */}
        <footer className="text-center mt-12 py-6 border-t border-gray-200">
          <p className="text-gray-500 mb-4">
            Your progress is saved automatically.
          </p>
          <button
            onClick={handleResetProgress}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Reset All Progress
          </button>
        </footer>
      </div>
    </div>
  );
}
