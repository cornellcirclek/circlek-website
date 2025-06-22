export const upcomingEvents = [
  {
    title: "St Patty's Day Tabling",
    date: "March 18-21, 2025",
    time: "12:00 PM - 9:00 PM",
    location: "Various Check the Docs",
    description: "Raising money for the club selling Cake Pops! Come out buy and sell some!",
    category: "Fundraiser",
    link: "https://docs.google.com/spreadsheets/d/18bEV0Mft3EYlpyZgpqAq7rTFe3Atf0V1AdEYWr_uSo4/edit?gid=0#gid=0"
  },
  {
    title: "Polar Plunge",
    date: "March 22, 2025",
    time: "8:30 AM - 12:30 PM",
    location: "2221 Taughannock Park Rd, Trumansburg, NY",
    description: "Various members will be plunging into the icy waters of Cayuga Lake to raise money for Special Olympics! Come out and support and/or volunteer as a photographer, registration, and more!",
    category: "Service",
    link: "https://www.signupgenius.com/go/10C0A4BABAA2DA1FAC61-54988617-ithaca?useFullSite=true#/"
  },
  {
    title: "General Body Meeting",
    date: "March 24, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description: "Weekly meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "https://cglink.me/2ee/r2283966"
  },
  {
    title: "General Body Meeting",
    date: "April 21, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "Stimson Hall G01",
    description: "Weekly meeting to discuss upcoming events, do service and fellowship! New members are welcome!",
    category: "Meeting",
    link: "https://cglink.me/2ee/r2285143"
  }
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