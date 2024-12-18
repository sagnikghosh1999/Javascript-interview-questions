console.log("---------------<Objects>--------------");

const facebookUserData = {
  // Basic Information
  id: "fb123456789",
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe",
  username: "john.doe92",
  profilePicture: "https://dummyimage.com/400x400/a377a3/ffffff.png",
  coverPhoto: "https://dummyimage.com/john_doe_cover.jpg",
  gender: "Male",
  age: 32,
  dateOfBirth: "1992-05-14",
  relationshipStatus: "Married",
  interestedIn: ["Music", "Technology", "Traveling"],
  languages: ["English", "Spanish"],
  about: "Loving life, tech geek, and adventurer at heart.",

  // Contact Information
  contact: {
    email: "johndoe@example.com",
    phone: "+1-555-789-1234",
    address: {
      street: "123 Main St",
      city: "Los Angeles",
      state: "California",
      country: "USA",
      postalCode: "90001",
    },
    website: "https://johndoeportfolio.com",
    socialLinks: {
      instagram: "https://instagram.com/john_doe92",
      twitter: "https://twitter.com/johndoe92",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },

  // Work and Education
  work: [
    {
      companyName: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      location: "San Francisco, California",
      startDate: "2018-01-10",
      endDate: null, // Currently working
      description:
        "Working on web and mobile applications using JavaScript frameworks.",
    },
    {
      companyName: "SoftTech Ltd.",
      position: "Junior Developer",
      location: "New York, USA",
      startDate: "2014-06-01",
      endDate: "2017-12-31",
      description: "Built backend systems using Python and Node.js.",
    },
  ],
  education: [
    {
      schoolName: "Harvard University",
      degree: "Bachelor of Science in Computer Science",
      startYear: 2010,
      endYear: 2014,
      description: "Specialized in software engineering and algorithms.",
    },
    {
      schoolName: "Los Angeles High School",
      startYear: 2006,
      endYear: 2010,
      description:
        "High school diploma with honors in Science and Mathematics.",
    },
  ],

  // Family Information
  family: [
    { relation: "Spouse", name: "Jane Doe", facebookId: "fb987654321" },
    { relation: "Child", name: "Emma Doe", facebookId: "fb123987456" },
    { relation: "Father", name: "Michael Doe", facebookId: null },
    { relation: "Mother", name: "Sarah Doe", facebookId: null },
  ],

  // Social Life
  friends: [
    { name: "Alice Smith", facebookId: "fb456123789" },
    { name: "Bob Johnson", facebookId: "fb789456123" },
    { name: "Charlie Brown", facebookId: "fb321654987" },
  ],
  groups: [
    {
      groupName: "JavaScript Developers",
      groupId: "group12345",
      role: "Member",
    },
    { groupName: "Travel Enthusiasts", groupId: "group67890", role: "Admin" },
    { groupName: "Music Lovers", groupId: "group54321", role: "Moderator" },
  ],
  pagesLiked: [
    { pageName: "TechCrunch", pageId: "page001" },
    { pageName: "National Geographic", pageId: "page002" },
    { pageName: "Coldplay", pageId: "page003" },
  ],
  events: [
    {
      eventName: "Tech Conference 2024",
      eventId: "event12345",
      date: "2024-08-12",
      location: "San Francisco, CA",
      status: "Going",
    },
    {
      eventName: "Friend's Wedding",
      eventId: "event67890",
      date: "2024-10-20",
      location: "New York, NY",
      status: "Interested",
    },
  ],

  // Posts and Activity
  posts: [
    {
      postId: "post001",
      content: "Excited to start my new journey at Tech Solutions Inc.! 🚀",
      datePosted: "2018-01-12",
      likes: 250,
      comments: 12,
      shares: 5,
    },
    {
      postId: "post002",
      content: "Vacation in Hawaii 🌴⛱️ was a dream come true!",
      datePosted: "2022-07-20",
      likes: 500,
      comments: 45,
      shares: 20,
      images: [
        "https://dummyimage.com/hawaii_beach.jpg",
        "https://dummyimage.com/hawaii_sunset.jpg",
      ],
    },
  ],
  checkIns: [
    { location: "Golden Gate Bridge, San Francisco", date: "2023-03-15" },
    { location: "Times Square, New York", date: "2022-11-01" },
  ],

  // Preferences and Settings
  privacySettings: {
    profileVisibility: "Friends",
    postVisibility: "Friends",
    tagReview: true,
    locationSharing: false,
  },
  notifications: {
    messages: true,
    tags: true,
    friendRequests: true,
    eventInvites: false,
  },

  // Miscellaneous
  hobbies: ["Traveling", "Photography", "Reading", "Playing Guitar"],
  favoriteQuotes: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
  ],
  createdAt: "2010-06-15T12:00:00Z",
  lastLogin: "2024-06-01T15:45:00Z",
};

const person = {
  firstName: "Sagnik",
  lastName: "Ghosh",
  age: 25,
};

/**
  <----------------------------------------------------------------->
  Creation of Objects 
  <----------------------------------------------------------------->
 

//-object literals--
const person = {
  firstName: "Sagnik",
  lastName: "Ghosh",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

// console.log(person.firstName); // "John"
// person.greet(); // "Hello, my name is John Doe"

//-object constructor
const person1 = new Object();
person1.firstName = "Saggy";
person1.lastName = "Ghosh";
person1.age = 25;

// console.log(person1);

//Object.create
const person2 = Object.create({});
person2.firstName = "Sagnik";
person2.lastName = "Ghosh";
person2.age = 24;
// console.log(person2);

//using function constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.greet = function () {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };
}

const newPerson = new Person("John", "Doe", 55);
// console.log(newPerson);
// newPerson.greet();

//using ES6 class constructor
class Person1 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet = () => {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  };
}

const newPerson1 = new Person1("Spider", "Man", 55);
// console.log(newPerson1);
// newPerson1.greet();

//Object.assign --

const newUser = Object.assign({}, { firstName: "user", age: 23 });
console.log(newUser);

  <----------------------------------------------------------------->
  Creation of Objects 
  <----------------------------------------------------------------->
  
//  looping through objects

  const properties = Object.keys(person);
  const values = Object.values(person);
  const entries = Object.entries(person);
  // console.log(properties, values, entries);
  
for (const key in facebookUserData) {
    console.log(`${key}: `, facebookUserData[key]);
}

for (const [key, val] of Object.entries(facebookUserData)) {
  console.log(key, ": ", val);
}

*/
