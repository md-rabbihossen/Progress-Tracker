import React, { useEffect, useMemo, useState } from "react";

// --- DATA: The 26-Week Roadmap Plan ---
const getInitialRoadmapData = () => {
  const recurringTasks = [
    { text: "HTML Step - 8", completed: false, isDefault: true },
    { text: "CSS Step - 55", completed: false, isDefault: true },
  ];

  let data = [
    // Phase 1
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
            {
              text: "JSON: JSON.stringify() and JSON.parse()",
              completed: false,
            },
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
            {
              text: "Promises: .then(), .catch(), .finally()",
              completed: false,
            },
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
            {
              text: "Intro to npm/yarn (package management)",
              completed: false,
            },
            { text: "Basic command-line proficiency", completed: false },
          ],
        },
      ],
    },
    // Phase 2
    {
      phase: "Phase 2: React - Describing the UI",
      duration: "Weeks 5-7",
      weeks: [
        {
          week: 5,
          title: "Your First Component & JSX",
          topics: [
            { text: "Understand React as a library for UIs", completed: false },
            { text: "Create and nest components", completed: false },
            { text: "Learn JSX syntax and rules", completed: false },
            {
              text: "Use curly braces in JSX for expressions",
              completed: false,
            },
            { text: "Setting up a project with Vite", completed: false },
          ],
        },
        {
          week: 6,
          title: "Props, Conditional Rendering & Lists",
          topics: [
            { text: "Passing props to a component", completed: false },
            {
              text: "Conditional rendering: if, &&, ternary operator",
              completed: false,
            },
            { text: "Rendering lists with .map()", completed: false },
            {
              text: "Understanding and using `key` prop for lists",
              completed: false,
            },
            { text: "Keeping components pure", completed: false },
          ],
        },
        {
          week: 7,
          title: "Project: Build a Static UI",
          topics: [
            {
              text: "Build a static version of an app like a recipe list or contact card list",
              completed: false,
            },
            {
              text: "Break the UI into a component hierarchy",
              completed: false,
            },
            { text: "Use props to pass data down the tree", completed: false },
            { text: "Style with Tailwind CSS", completed: false },
          ],
        },
      ],
    },
    // Phase 3
    {
      phase: "Phase 3: React - Adding Interactivity & Managing State",
      duration: "Weeks 8-12",
      weeks: [
        {
          week: 8,
          title: "Responding to Events & State",
          topics: [
            { text: "Handling events (e.g., onClick)", completed: false },
            {
              text: "Introduction to State: The `useState` Hook",
              completed: false,
            },
            {
              text: "Understand that state is isolated and private",
              completed: false,
            },
            { text: "Queuing state updates", completed: false },
            { text: "Updating objects and arrays in state", completed: false },
          ],
        },
        {
          week: 9,
          title: "Project: Adding Interactivity",
          topics: [
            {
              text: "Take the static project from Week 7 and add state",
              completed: false,
            },
            {
              text: "Implement event handlers to modify state",
              completed: false,
            },
            {
              text: "Create interactive forms with controlled components",
              completed: false,
            },
            { text: "Practice updating state immutably", completed: false },
          ],
        },
        {
          week: 10,
          title: "Managing State: Sharing & Preserving",
          topics: [
            { text: "Sharing state by 'lifting state up'", completed: false },
            { text: "Understand 'State as a Snapshot'", completed: false },
            {
              text: "Preserving and resetting state when conditional rendering",
              completed: false,
            },
            { text: "Choosing the right state structure", completed: false },
          ],
        },
        {
          week: 11,
          title: "Managing State: Reducers & Context",
          topics: [
            {
              text: "Consolidate state logic with the `useReducer` Hook",
              completed: false,
            },
            {
              text: "Passing data deeply with the `useContext` Hook",
              completed: false,
            },
            {
              text: "Combining `useReducer` and `useContext` for complex state",
              completed: false,
            },
            { text: "Compare with 'lifting state up'", completed: false },
          ],
        },
        {
          week: 12,
          title: "React Escape Hatches",
          topics: [
            {
              text: "Synchronizing with external systems using `useEffect`",
              completed: false,
            },
            {
              text: "Understanding the `useEffect` dependency array",
              completed: false,
            },
            { text: "Creating your own custom Hooks", completed: false },
            { text: "Learn about other hooks like `useRef`", completed: false },
          ],
        },
      ],
    },
    // Phase 4
    {
      phase: "Phase 4: Entering the World of Next.js",
      duration: "Weeks 13-17",
      weeks: [
        {
          week: 13,
          title: "State Management Libraries & Routers",
          topics: [
            {
              text: "Learn and implement Zustand (modern & simple)",
              completed: false,
            },
            { text: "Understand Redux Toolkit concepts", completed: false },
            {
              text: "Implement React Router v6 for client-side routing",
              completed: false,
            },
          ],
        },
        {
          week: 14,
          title: "Introduction to Next.js",
          topics: [
            {
              text: "The 'why' behind Next.js (SSR, SSG, SEO)",
              completed: false,
            },
            {
              text: "Focus on the App Router (new standard)",
              completed: false,
            },
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
            {
              text: "Server Components vs. Client Components",
              completed: false,
            },
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
    // Phase 5
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
            {
              text: "Add loading states (spinners/skeletons)",
              completed: false,
            },
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
    // Phase 6
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
            {
              text: "Track all applications in a spreadsheet",
              completed: false,
            },
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

  // Add recurring tasks and unique IDs to all tasks
  let weekCounter = 0;
  let idCounter = 0;
  for (const phase of data) {
    for (const week of phase.weeks) {
      weekCounter++;
      week.topics = week.topics.map((topic) => ({
        ...topic,
        id: `task-${idCounter++}`,
      }));
      if (weekCounter <= 21) {
        const recurringWithIds = JSON.parse(JSON.stringify(recurringTasks)).map(
          (t) => ({ ...t, id: `task-${idCounter++}` })
        );
        week.topics.push(...recurringWithIds);
      }
    }
  }

  return data;
};

// --- Reusable Components ---

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

const AddTaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText("");
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-black transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Add Task
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 pt-4 border-t border-gray-200"
    >
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter new task..."
          className="flex-grow p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          autoFocus
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setIsAdding(false)}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

// Helper to get today's date string (e.g., 'SUN 22')
function getTodayString() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const now = new Date();
  return `${days[now.getDay()]} ${now.getDate()}`;
}

// Helper to get week date range, starting from 21 June
function getWeekDateRange(weekNumber) {
  // Week 1 starts on 21 June
  const start = new Date(
    new Date().getFullYear(),
    5,
    21 + (weekNumber - 1) * 7
  ); // June is month 5 (0-indexed)
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const startStr = `${start.getDate()} ${months[start.getMonth()]}`;
  const endStr = `${end.getDate()} ${months[end.getMonth()]}`;
  return `${startStr} - ${endStr}`;
}

// --- TodayTasksSection ---
const TodayTasksSection = ({ tasks, onAddTask, onToggleTask }) => {
  const visibleTasks = tasks.filter((task) => !task.completed);
  const completedCount = tasks.length - visibleTasks.length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;
  const remainingCount = visibleTasks.length;

  return (
    <section className="mb-12">
      <div className="bg-white rounded-lg p-4 shadow-2xl ring-1 ring-gray-100">
        <div className="flex justify-between items-center mb-4 gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Today's Tasks ({remainingCount})
          </h2>
          <span className="text-xl font-mono font-bold text-black">
            {progress.toFixed(2)}%
          </span>
        </div>
        <ProgressBar percentage={progress} />
        <ul className="space-y-3 mt-6">
          {visibleTasks.length > 0 ? (
            visibleTasks.map((task) => (
              <li key={task.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={task.id}
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  className="w-5 h-5 text-gray-800 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                />
                <label
                  htmlFor={task.id}
                  className="ml-3 text-gray-700 cursor-pointer"
                >
                  {task.text}
                </label>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">
              No tasks for today. Add one below!
            </p>
          )}
        </ul>
        <AddTaskForm onAddTask={onAddTask} />
      </div>
    </section>
  );
};

// --- Main App Component ---

export default function App() {
  const [roadmap, setRoadmap] = useState(() => {
    try {
      const savedProgress = localStorage.getItem("roadmapProgress");
      return savedProgress
        ? JSON.parse(savedProgress)
        : getInitialRoadmapData();
    } catch (error) {
      console.error("Could not parse roadmap from localStorage", error);
      return getInitialRoadmapData();
    }
  });

  const [todayTasks, setTodayTasks] = useState(() => {
    try {
      const savedTodayTasks = localStorage.getItem("todayTasks");
      return savedTodayTasks ? JSON.parse(savedTodayTasks) : [];
    } catch (error) {
      console.error("Could not parse today's tasks from localStorage", error);
      return [];
    }
  });

  const [lastResetDate, setLastResetDate] = useState(() => {
    return localStorage.getItem("todayTasksLastReset") || "";
  });

  useEffect(() => {
    try {
      localStorage.setItem("roadmapProgress", JSON.stringify(roadmap));
    } catch (error) {
      console.error("Could not save roadmap to localStorage", error);
    }
  }, [roadmap]);

  useEffect(() => {
    try {
      localStorage.setItem("todayTasks", JSON.stringify(todayTasks));
    } catch (error) {
      console.error("Could not save today's tasks to localStorage", error);
    }
  }, [todayTasks]);

  // --- Reset today's progress at midnight ---
  useEffect(() => {
    const now = new Date();
    const todayKey = now.toISOString().slice(0, 10); // YYYY-MM-DD
    if (lastResetDate !== todayKey) {
      // Reset only the completed status, keep the list
      setTodayTasks((prevTasks) =>
        prevTasks.map((task) => ({ ...task, completed: false }))
      );
      setLastResetDate(todayKey);
      localStorage.setItem("todayTasksLastReset", todayKey);
    }
    // Set timer for next midnight
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1) -
      now;
    const timer = setTimeout(() => {
      setLastResetDate(""); // Will trigger effect again
    }, msUntilMidnight);
    return () => clearTimeout(timer);
  }, [lastResetDate]);

  // Save lastResetDate to localStorage
  useEffect(() => {
    if (lastResetDate) {
      localStorage.setItem("todayTasksLastReset", lastResetDate);
    }
  }, [lastResetDate]);

  const handleToggleRoadmapTask = (taskId) => {
    const newRoadmap = JSON.parse(JSON.stringify(roadmap));
    let found = false;
    for (const phase of newRoadmap) {
      for (const week of phase.weeks) {
        const topic = week.topics.find((t) => t.id === taskId);
        if (topic) {
          topic.completed = !topic.completed;
          found = true;
          break;
        }
      }
      if (found) break;
    }
    setRoadmap(newRoadmap);
  };

  const handleAddRoadmapTask = (weekNumber, taskText) => {
    const newRoadmap = JSON.parse(JSON.stringify(roadmap));
    const newTask = {
      text: taskText,
      completed: false,
      isDefault: false,
      id: `custom-roadmap-${Date.now()}`,
    };
    let found = false;
    for (const phase of newRoadmap) {
      for (const week of phase.weeks) {
        if (week.week === weekNumber) {
          week.topics.push(newTask);
          found = true;
          break;
        }
      }
      if (found) break;
    }
    setRoadmap(newRoadmap);
  };

  const handleAddTodayTask = (taskText) => {
    const newTask = {
      text: taskText,
      completed: false,
      id: `today-${Date.now()}`,
    };
    setTodayTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTodayTask = (taskId) => {
    setTodayTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const overallProgress = useMemo(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    roadmap.forEach((phase) =>
      phase.weeks.forEach((week) => {
        totalTopics += week.topics.length;
        completedTopics += week.topics.filter((t) => t.completed).length;
      })
    );
    return totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
  }, [roadmap]);

  const handleResetProgress = () => {
    if (
      window.confirm(
        "Are you sure you want to reset ALL progress? This cannot be undone."
      )
    ) {
      localStorage.removeItem("roadmapProgress");
      setRoadmap(getInitialRoadmapData());
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
              Roadmap
            </h1>
          </div>
          <span className="text-base font-normal text-bold-800 whitespace-nowrap ml-4">
            {getTodayString()}
          </span>
        </header>
        <p className="text-lg text-gray-600 text-center mb-8 -mt-6">
          Your 26-Week Journey to Becoming a Pro
        </p>

        <TodayTasksSection
          tasks={todayTasks}
          onAddTask={handleAddTodayTask}
          onToggleTask={handleToggleTodayTask}
        />

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10 sticky top-4 z-10 backdrop-blur-sm bg-opacity-70">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-black">
              Overall Roadmap Progress
            </h2>
            <span className="text-xl font-mono font-bold text-black">
              {overallProgress.toFixed(2)}%
            </span>
          </div>
          <ProgressBar percentage={overallProgress} />
        </div>

        <main>
          {roadmap.map((phase, phaseIndex) => (
            <section key={phaseIndex} className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-black border-b-2 border-gray-200 pb-2 mb-1">
                  {phase.phase}
                </h2>
                <p className="text-gray-600">{phase.duration}</p>
              </div>
              {phase.weeks.map((week) => (
                <Week
                  key={week.week}
                  weekData={{
                    ...week,
                    weekDateRange: getWeekDateRange(week.week),
                  }}
                  onToggle={handleToggleRoadmapTask}
                  onAddTask={handleAddRoadmapTask}
                />
              ))}
            </section>
          ))}
        </main>

        <footer className="text-center mt-12 py-6 border-t border-gray-200">
          <p className="text-gray-500 mb-4">
            Your progress is saved automatically.
          </p>
          <button
            onClick={handleResetProgress}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {" "}
            Reset All Progress{" "}
          </button>
        </footer>
      </div>
    </div>
  );
}

// Update Week component to show weekDateRange
const Week = ({ weekData, onToggle, onAddTask }) => {
  const [isOpen, setIsOpen] = useState(weekData.week === 1);
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
          <p className="text-gray-500 text-sm">
            Week {weekData.week}{" "}
            <span className="ml-2 text-xs text-gray-400">
              ({weekData.weekDateRange})
            </span>
          </p>
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
            {" "}
            <ProgressBar percentage={weekPercentage} />{" "}
          </div>
          <ul className="space-y-3">
            {weekData.topics.map((topic) => (
              <li key={topic.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={topic.id}
                  checked={topic.completed}
                  onChange={() => onToggle(topic.id)}
                  className="w-5 h-5 text-gray-800 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                />
                <label
                  htmlFor={topic.id}
                  className={`ml-3 text-gray-700 cursor-pointer transition-colors ${
                    topic.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {" "}
                  {topic.text}{" "}
                </label>
              </li>
            ))}
          </ul>
          <AddTaskForm
            onAddTask={(taskText) => onAddTask(weekData.week, taskText)}
          />
        </div>
      )}
    </div>
  );
};
