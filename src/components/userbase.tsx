import "../assets/userbase.css";

const UserBase = ({ facultyList }: any) => {
  return (
    <div className="user-base column">
      <h1>Our Sellerbase</h1>
      <div className="user-base-cards row">
        {facultyList.map((faculty: any) => (
          <div className="user-base-card">
            <h2>
              {faculty.facultyName} <span>{faculty.count}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBase;
