export const upcomingEvents = [
  // === Bi-Weekly GBody Meetings (Mondays) ===
  {
    title: "GBody #1",
    date: "September 15, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "https://cglink.me/2ee/r2290301",
  },
  {
    title: "GBody #2",
    date: "September 29, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "",
  },
  {
    title: "GBody #3",
    date: "October 13, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "",
  },
  {
    title: "GBody #4",
    date: "October 27, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "",
  },
  {
    title: "GBody #5",
    date: "November 10, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "",
  },
  {
    title: "GBody #6",
    date: "November 24, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description:
      "Bi-weekly general body meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "",
  },

  // === Sophie Fund Cupcake Contest (Service) ===
  {
    title: "The Sophie Fund Cupcake Contest",
    date: "October 18, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "The Commons",
    description:
      "Support the annual Sophie Fund Cupcake Contest! Come enjoy, participate, or help volunteer!",
    category: "Service",
    link: "",
  },

  // === District Events ===
  {
    title: "K-Family Picnic",
    date: "October 4, 2025",
    time: "12:00 PM - 5:00 PM",
    location: "Thorndon Park, Syracuse",
    description:
      "This event will be a great opportunity for everyone to get together and mingle with the different branches of the Kiwanis Family, all while supporting a great cause!",
    category: "District",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScpYO6jRvh1bcQgFZwuxUU4cQtksO94-wQjkFwb0qpitkMSyQ/viewform",
  },
  {
    title: "New York Speaking",
    date: "November 7, 2025",
    time: "All Weekend",
    location: "Lake George",
    description:
      "New York Speaking is our Fall event, which usually occurs in early November. This event is focused on Circle K’s fellowship tenant. Get ready for a fun-filled weekend of bonding with Circle K members from all over New York state! We will have informational and fun workshops, service, a large fellowship event, and more throughout the weekend!",
    category: "District",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc5mmQ86X__wyNWytdu_zxaG4ywHZSW9CVkCrqtbyFGTf_pPw/viewform",
  },
{
    title: "Circle K International Social",
    date: "September 17, 2025",
    time: "8:00 PM - 9:00 PM",
    location: "Zoom",
    description:
      "Start strong with a night of fun, fellowship, and goal-setting with members from all over the world. ✨ Learn how to set goals that inspire ✨ Create your own Bingo Card or Vision Board ✨ Connect with CKI friends new + old",
    category: "District",
    link: "https://kiwanis-org.zoom.us/meeting/register/JkziGcuOTyaFJ7v5cC3Diw#/registration",
  },
];


export const getBadgeColor = (category) => {
  switch(category) {
    case "Service":
      return "success";
    case "Social":
      return "info";
    case "Fundraiser":
      return "warning";
    case "Meeting":
      return "secondary";
    default:
      return "primary";
  }
};

// Function to determine if an event is in the past
export const isEventInPast = (eventDateString) => {
  const today = new Date(); // Get current date
  today.setHours(0, 0, 0, 0); // Set to beginning of the day
  
  // For date ranges like "March 18-21, 2025", we'll extract the end date
  let dateToCheck;
  
  if (eventDateString.includes("-")) {
    // Handle a date range
    const dateRange = eventDateString.split("-");
    const endDatePart = dateRange[1].trim();
    
    // If the end date doesn't include a month, we need to use the month from the start date
    if (!endDatePart.match(/[a-zA-Z]/)) {
      // End date is just a day number, like "21, 2025"
      const startDateParts = dateRange[0].trim().split(" ");
      const month = startDateParts[0]; // e.g., "March"
      
      // Create the full end date string
      const endDateString = `${month} ${endDatePart}`;
      dateToCheck = new Date(endDateString);
    } else {
      // End date already includes month
      dateToCheck = new Date(endDatePart);
    }
  } else {
    // Simple date, not a range
    dateToCheck = new Date(eventDateString);
  }
  
  return dateToCheck < today;
};