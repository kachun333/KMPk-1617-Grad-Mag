const initState = {
  departments: [{
    image: "#",
    name: "Treasury",
    link: "/committee/register?dept=treasury",
    caption: "Are you guys still in contact?",
    jd: [
      "Budgeting. Ensure the efficient use of resources while organizing the event",
      "Accounting. Track Expenses and record down for future references"
    ],
    preference: [
      "stingy",
      "good in dealing money",
      "won't involve in corruption"
    ]
  }, {
    image: "../../assets/images/committee.jpg",
    name: "Marketing",
    link: "/committee/register?dept=marketing",
    caption: "Learn more about 'Our Promise' & register now to get involve in the event preparation",
    jd: [
      "Invite KMPKians to attend this event",
      "engage & deliver information to participants",
      "produce digital media"],
    preference: [
      "Good at jio-ing people",
      "creative",
      "computer literate, able to design poster and create videos"
    ]
  }, {
    image: "../../assets/images/committee.jpg",
    name: "Program",
    link: "/committee/register?dept=program",
    caption: "Learn more about 'Our Promise' & register now to get involve in the event preparation",
    jd: [
      "Budgeting. Ensure the efficient use of resources while organizing the event",
      "Accounting. Track Expenses and record down for future references",
    ],
    preference: [
      "consolidate KMPKians interest",
      "Crazy minded, can come out with the most interesting program in the world",
      "realistic. Know the limit the resources, won't give up and make the event successful",
      "resourceful. able the react to sudden change of event"]
  }, {
    image: "#",
    name: "Operation",
    link: "/committee/register?dept=operation",
    caption: "Learn more about the story & motivation behind 'Our Promise'",
    jd: [
      "Ensure food & transportation is well arranged",
      "prepare venue",
      "prepare tools and equipments"
    ],
    preference: [],
  },
  ],
}

const committeeReducer = (state = initState, action) => {
  return state;
};

export default committeeReducer;
