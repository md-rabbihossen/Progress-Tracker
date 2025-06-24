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
      phase: "Phase 1: JavaScript Refresher & React Basics",
      duration: "Weeks 1-4",
      weeks: [
        {
          week: 1,
          title: "JavaScript Refresher",
          topics: [
            { text: "Review: let, const, var, and scope", completed: false },
            {
              text: "Data Types: Primitives vs. Reference types",
              completed: false,
            },
            {
              text: "Arrow Functions & 'this' keyword",
              completed: false,
            },
            { text: "Spread & Rest Operators", completed: false },
            {
              text: "Destructuring Arrays & Objects",
              completed: false,
            },
          ],
        },
        {
          week: 2,
          title: "React Basics & Working With Components",
          topics: [
            {
              text: "What is React & Why Use It?",
              completed: false,
            },
            {
              text: "Creating a React Project with Vite",
              completed: false,
            },
            {
              text: "JSX - Writing React Code",
              completed: false,
            },
            {
              text: "Building Custom Components",
              completed: false,
            },
            {
              text: "Working with Props",
              completed: false,
            },
          ],
        },
        {
          week: 3,
          title: "React State & Working with Events",
          topics: [
            { text: "Handling Events with Props", completed: false },
            { text: "Working with 'useState' Hook", completed: false },
            {
              text: "Multiple States & State Objects",
              completed: false,
            },
            { text: "Two-Way Binding", completed: false },
            {
              text: "Child-to-Parent Component Communication",
              completed: false,
            },
          ],
        },
        {
          week: 4,
          title: "Rendering Lists & Conditional Content",
          topics: [
            {
              text: "Rendering Lists of Data with map()",
              completed: false,
            },
            { text: "Using Stateful Lists", completed: false },
            {
              text: "Understanding 'keys' in Lists",
              completed: false,
            },
            { text: "Conditional Rendering Techniques", completed: false },
            { text: "Dynamic Styles & CSS Classes", completed: false },
          ],
        },
      ],
    },
    // Phase 2
    {
      phase: "Phase 2: React Deep Dive",
      duration: "Weeks 5-9",
      weeks: [
        {
          week: 5,
          title: "Styling React Components",
          topics: [
            { text: "Conditional & Dynamic Styles", completed: false },
            { text: "CSS Modules", completed: false },
            { text: "Styled Components", completed: false },
            {
              text: "Tailwind CSS with React",
              completed: false,
            },
            { text: "CSS-in-JS Approaches", completed: false },
          ],
        },
        {
          week: 6,
          title: "Debugging & Error Boundaries",
          topics: [
            { text: "Understanding React Error Messages", completed: false },
            {
              text: "Using React DevTools",
              completed: false,
            },
            { text: "Working with Breakpoints", completed: false },
            {
              text: "Error Boundaries",
              completed: false,
            },
            { text: "Handling Runtime Errors", completed: false },
          ],
        },
        {
          week: 7,
          title: "Side Effects, Reducers & Context API",
          topics: [
            {
              text: "Working with useEffect Hook",
              completed: false,
            },
            {
              text: "useEffect Dependencies & Cleanup",
              completed: false,
            },
            { text: "useReducer for Complex State", completed: false },
            { text: "React Context API", completed: false },
            { text: "Building Custom Context Providers", completed: false },
          ],
        },
        {
          week: 8,
          title: "React Behind The Scenes",
          topics: [
            {
              text: "How React Works Behind The Scenes",
              completed: false,
            },
            {
              text: "Virtual DOM & Reconciliation",
              completed: false,
            },
            {
              text: "Optimization with React.memo",
              completed: false,
            },
            { text: "useMemo & useCallback Hooks", completed: false },
            { text: "State Scheduling & Batching", completed: false },
          ],
        },
        {
          week: 9,
          title: "Class Components & Lifecycle Methods",
          topics: [
            {
              text: "Class-based Components Syntax",
              completed: false,
            },
            {
              text: "Component Lifecycle Methods",
              completed: false,
            },
            {
              text: "Error Boundaries with Class Components",
              completed: false,
            },
            {
              text: "Context API with Class Components",
              completed: false,
            },
            {
              text: "When to Use Class vs. Functional Components",
              completed: false,
            },
          ],
        },
      ],
    },
    // Phase 3
    {
      phase: "Phase 3: Advanced React Features",
      duration: "Weeks 10-14",
      weeks: [
        {
          week: 10,
          title: "Sending HTTP Requests",
          topics: [
            { text: "Connecting to Backend APIs", completed: false },
            { text: "Using fetch() & useEffect", completed: false },
            {
              text: "Handling Loading & Error States",
              completed: false,
            },
            { text: "POST Requests & Form Submission", completed: false },
            { text: "Custom HTTP Hook", completed: false },
          ],
        },
        {
          week: 11,
          title: "Building Custom Hooks",
          topics: [
            {
              text: "Creating Your First Custom Hook",
              completed: false,
            },
            { text: "Custom Hook Rules & Best Practices", completed: false },
            {
              text: "Reusable Logic with Custom Hooks",
              completed: false,
            },
            { text: "Building a HTTP Custom Hook", completed: false },
            { text: "Building a Form Custom Hook", completed: false },
          ],
        },
        {
          week: 12,
          title: "Working with Forms & User Input",
          topics: [
            {
              text: "Handling Form Submission",
              completed: false,
            },
            {
              text: "Input Validation & Feedback",
              completed: false,
            },
            {
              text: "Form Actions (React 19)",
              completed: false,
            },
            { text: "Working with useRef for Inputs", completed: false },
            { text: "Form Libraries Overview", completed: false },
          ],
        },
        {
          week: 13,
          title: "React Router",
          topics: [
            {
              text: "Client-Side Routing Concepts",
              completed: false,
            },
            {
              text: "Setting up React Router",
              completed: false,
            },
            { text: "Dynamic Routes & Parameters", completed: false },
            {
              text: "Nested Routes & Layouts",
              completed: false,
            },
            { text: "Navigation & Programmatic Navigation", completed: false },
          ],
        },
        {
          week: 14,
          title: "Advanced React Router",
          topics: [
            {
              text: "Data Loading with React Router",
              completed: false,
            },
            {
              text: "Form Handling with React Router",
              completed: false,
            },
            { text: "Protected Routes & Authentication", completed: false },
            {
              text: "Error Handling in Routes",
              completed: false,
            },
            { text: "Lazy Loading & Code Splitting", completed: false },
          ],
        },
      ],
    },
    // Phase 4
    {
      phase: "Phase 4: State Management & Redux",
      duration: "Weeks 15-18",
      weeks: [
        {
          week: 15,
          title: "Redux Introduction",
          topics: [
            { text: "Redux Core Concepts", completed: false },
            { text: "Setting up Redux Store", completed: false },
            {
              text: "Actions, Reducers & State",
              completed: false,
            },
            { text: "Connecting Redux to React", completed: false },
            { text: "Redux DevTools", completed: false },
          ],
        },
        {
          week: 16,
          title: "Advanced Redux & Redux Toolkit",
          topics: [
            {
              text: "Redux Toolkit Setup",
              completed: false,
            },
            {
              text: "createSlice & configureStore",
              completed: false,
            },
            { text: "Thunks for Async Logic", completed: false },
            {
              text: "RTK Query for API Calls",
              completed: false,
            },
            {
              text: "Redux vs. Context API - When to Use What",
              completed: false,
            },
          ],
        },
        {
          week: 17,
          title: "React Query & Tanstack Query",
          topics: [
            {
              text: "Setting up React Query",
              completed: false,
            },
            {
              text: "Queries, Mutations & Query Invalidation",
              completed: false,
            },
            {
              text: "Caching & Stale Data",
              completed: false,
            },
            { text: "Pagination & Infinite Queries", completed: false },
            { text: "Optimistic Updates", completed: false },
          ],
        },
        {
          week: 18,
          title: "Authentication in React Apps",
          topics: [
            {
              text: "Authentication Concepts & JWT",
              completed: false,
            },
            {
              text: "Managing Auth State",
              completed: false,
            },
            { text: "Protecting Routes", completed: false },
            {
              text: "Auto Logout & Token Refresh",
              completed: false,
            },
            { text: "Persisting Auth State", completed: false },
          ],
        },
      ],
    },
    // Phase 5
    {
      phase: "Phase 5: Next.js & React Server Components",
      duration: "Weeks 19-22",
      weeks: [
        {
          week: 19,
          title: "Next.js Fundamentals",
          topics: [
            { text: "Why Next.js & Project Setup", completed: false },
            { text: "File-based Routing", completed: false },
            {
              text: "Pages vs. App Router",
              completed: false,
            },
            { text: "Pre-rendering & Data Fetching", completed: false },
            { text: "API Routes", completed: false },
          ],
        },
        {
          week: 20,
          title: "Next.js App Router",
          topics: [
            {
              text: "App Router Structure & Conventions",
              completed: false,
            },
            {
              text: "Layouts & Nested Layouts",
              completed: false,
            },
            { text: "Route Groups & Dynamic Routes", completed: false },
            {
              text: "Loading & Error UI",
              completed: false,
            },
            { text: "Metadata API for SEO", completed: false },
          ],
        },
        {
          week: 21,
          title: "React Server Components",
          topics: [
            {
              text: "Server vs. Client Components",
              completed: false,
            },
            {
              text: "Data Fetching in Server Components",
              completed: false,
            },
            {
              text: "Server Actions",
              completed: false,
            },
            { text: "Streaming & Suspense", completed: false },
            { text: "Optimizing with Server Components", completed: false },
          ],
        },
        {
          week: 22,
          title: "Next.js Advanced Features",
          topics: [
            {
              text: "Authentication with NextAuth.js",
              completed: false,
            },
            {
              text: "Image & Font Optimization",
              completed: false,
            },
            { text: "Internationalization (i18n)", completed: false },
            {
              text: "Middleware & Edge Functions",
              completed: false,
            },
            { text: "Deployment & Production Optimization", completed: false },
          ],
        },
      ],
    },
    // Phase 6
    {
      phase: "Phase 6: Testing, TypeScript & Best Practices",
      duration: "Weeks 23-26",
      weeks: [
        {
          week: 23,
          title: "Testing React Applications",
          topics: [
            { text: "Jest & React Testing Library Setup", completed: false },
            { text: "Component Testing Basics", completed: false },
            {
              text: "Testing Hooks & Custom Hooks",
              completed: false,
            },
            { text: "Mocking API Calls", completed: false },
            { text: "Integration & E2E Testing", completed: false },
          ],
        },
        {
          week: 24,
          title: "React with TypeScript",
          topics: [
            {
              text: "TypeScript Basics for React",
              completed: false,
            },
            {
              text: "Typing Props & State",
              completed: false,
            },
            { text: "Typing Hooks & Events", completed: false },
            {
              text: "Generic Components",
              completed: false,
            },
            { text: "TypeScript with Redux & Context", completed: false },
          ],
        },
        {
          week: 25,
          title: "React Patterns & Best Practices",
          topics: [
            {
              text: "Component Composition Patterns",
              completed: false,
            },
            {
              text: "Render Props & Higher-Order Components",
              completed: false,
            },
            {
              text: "Performance Optimization Techniques",
              completed: false,
            },
            { text: "State Management Patterns", completed: false },
            { text: "Project Structure & Organization", completed: false },
          ],
        },
        {
          week: 26,
          title: "Animations & Deployment",
          topics: [
            {
              text: "CSS Transitions & Animations",
              completed: false,
            },
            {
              text: "React Transition Group",
              completed: false,
            },
            { text: "Framer Motion Basics", completed: false },
            {
              text: "Deployment Options & CI/CD",
              completed: false,
            },
            { text: "Performance Monitoring & Analytics", completed: false },
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

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);

      const difference = midnight - now;

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      };
    };

    const updateTimer = () => {
      const time = calculateTimeLeft();
      setTimeLeft(`${time.hours} : ${time.minutes} : ${time.seconds}`);
    };

    // Initial call
    updateTimer();

    // Update every second
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="text-base font-mono text-gray-800 whitespace-nowrap">
      {timeLeft}
    </div>
  );
};

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
          <div className="flex flex-col items-end">
            <span className="text-base font-normal text-bold-800 whitespace-nowrap">
              {getTodayString()}
            </span>
            <CountdownTimer />
          </div>
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
