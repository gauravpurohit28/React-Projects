const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile and analyze sales data for Q2.",
        date: "2025-06-21",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Discuss project roadmap and assign roles.",
        date: "2025-06-22",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Email client for feedback on latest delivery.",
        date: "2025-06-20",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Website",
        description: "Revamp the homepage layout and CTA buttons.",
        date: "2025-06-19",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixing Sprint",
        description: "Fix bugs reported in the last sprint.",
        date: "2025-06-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Update README and API docs.",
        date: "2025-06-21",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security Review",
        description: "Audit recent changes for security flaws.",
        date: "2025-06-20",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Plan posts for upcoming campaign.",
        date: "2025-06-22",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Design Logo",
        description: "Create logo options for client review.",
        date: "2025-06-20",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Draft Email Newsletter",
        description: "Create monthly newsletter template.",
        date: "2025-06-18",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review code submissions for new features.",
        date: "2025-06-21",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Training",
        description: "Conduct session on React best practices.",
        date: "2025-06-22",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Performance Review",
        description: "Evaluate interns and provide feedback.",
        date: "2025-06-20",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback Analysis",
        description: "Analyze client survey responses.",
        date: "2025-06-18",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Prepare Pitch Deck",
        description: "Create slides for investor presentation.",
        date: "2025-06-19",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "QA Testing",
        description: "Test new feature in staging environment.",
        date: "2025-06-21",
        category: "Quality Assurance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Sprint Planning",
        description: "Organize backlog for next sprint.",
        date: "2025-06-20",
        category: "Agile",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Log Analysis",
        description: "Review logs for recent crashes.",
        date: "2025-06-18",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "System Upgrade",
        description: "Upgrade backend dependencies.",
        date: "2025-06-19",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const SetLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const GetLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
}