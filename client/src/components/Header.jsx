function Header() {
  const today = new Date().toLocaleDateString();

  return (
    <div
      className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center"
      style={{ borderBottom: "1px solid #ddd" }}
    >
      <h2 className="text-primary m-0">
        🏥 Hospital Management System
      </h2>

      <h5 className="text-secondary m-0">
        {today}
      </h5>
    </div>
  );
}

export default Header;