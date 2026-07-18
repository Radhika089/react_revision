import Card from "./components/Card";
const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU9Ssj61SuOq_YoVA6AOLq9iV9sISnRDQfHJ1Go3-VQ&s=10",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      status: "Hiring",
      location: "Mumbai, India",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR556MwnY5oRUk0nsHvN-HKxvpvTzBFDHtYzpVuTO3L4w&s=10",
      posted: "2 days ago",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$100/hr",
      status: "Closed",
      location: "Bangalore, India",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-DN8JuBVqnVzi9ib4zpDiRwE9ab9KziRGVb2OW2lIQ&s=10",
      posted: "1 week ago",
      role: "React Developer",
      type: "Remote",
      level: "Senior Level",
      salary: "$110/hr",
      status: "Urgent",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluh0zSa3EAAkP1U7u2L_Ah9CZqMOlpnd7PtEnhaNoOg&s=10",
      posted: "3 days ago",
      role: "Product Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$140/hr",
      status: "Hiring",
      location: "Delhi, India",
    },
    {
      id: 5,
      company: "Adobe",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL68KXnv5evQwuqgWbZYVCeFcSPEeHwDDIINHAYJWug&s=10",
      posted: "6 days ago",
      role: "UI Designer",
      type: "Part Time",
      level: "Junior Level",
      salary: "$80/hr",
      status: "Closed",
      location: "Pune, India",
    },
    {
      id: 6,
      company: "Spotify",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOqRNiPTqf_wTaKHkH2J9bkUWBqu_aUbI9ZGPnOCs8g&s=10",
      posted: "Today",
      role: "UX Researcher",
      type: "Remote",
      level: "Mid Level",
      salary: "$95/hr",
      status: "Urgent",
      location: "Chandigarh, India",
    },
    {
      id: 7,
      company: "Apple",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPd6pKSGfqhrwmLLsOBldVxbIe11zF38ZpM6Zlyvl3w&s=10",
      posted: "4 days ago",
      role: "Visual Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$150/hr",
      status: "Hiring",
      location: "Gurgaon, India",
    },
    {
      id: 8,
      company: "Meta",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUTMM2lhenNLnu8VO5J8t_Vin0wN51CxlOCs2NnfX2w&s=10",
      posted: "2 weeks ago",
      role: "React Native Developer",
      type: "Contract",
      level: "Mid Level",
      salary: "$105/hr",
      status: "Closed",
      location: "Noida, India",
    },
    {
      id: 9,
      company: "Flipkart",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkXiJH0Nr3PgKasZhVDMyLoeg6fmn299HNzIFOURvIg&s=10",
      posted: "Yesterday",
      role: "Frontend Engineer",
      type: "Full Time",
      level: "Junior Level",
      salary: "$85/hr",
      status: "Urgent",
      location: "Jaipur, India",
    },
    {
      id: 10,
      company: "Swiggy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMC4qDxb2LQlIpx18GSB-aECbfOCenZN0NqizWhG4xg&s=10",
      posted: "8 days ago",
      role: "Web Designer",
      type: "Internship",
      level: "Entry Level",
      salary: "$50/hr",
      status: "Hiring",
      location: "Kolkata, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem) {
        return (
          <div key={elem.id}>
            <Card
              company={elem.company}
              logo={elem.logo}
              posted={elem.posted}
              role={elem.role}
              type={elem.type}
              level={elem.level}
              salary={elem.salary}
              location={elem.location}
              status={elem.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
