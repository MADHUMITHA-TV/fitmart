function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "80px",
        background: "#2563EB",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h2>FitMart</h2>
    </header>
  );
}

export default Navbar;