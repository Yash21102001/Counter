// import { useState } from "react";
// function Count() {
//   const [count, setcount] = useState(0);
//   return (
//     <>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setcount(count + 1)}>Increment ➕</button>
//         <button onClick={() => {
//           if (count == 0) return;
//           setcount(count - 1)

//         }}>Decrement ➖</button>
//         <button onClick={() => setcount(0)}>Reset  ↺</button>
//       </div>
//     </>
//   );
// }
// export default Count;

// import { useState } from "react";

// function Count() {
//   const [count, setCount] = useState(0);

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f0f0f0",
//   };

//   const countStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     color: "#333",
//     margin: "20px 0",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     margin: "5px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     color: "#fff",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   };

//   const resetButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#dc3545",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={countStyle}>{count}</h1>
//       <div>
//         <button
//           style={buttonStyle}
//           onClick={() => setCount(count + 1)}
//         >
//           Increment ➕
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => {
//             if (count === 0) return;
//             setCount(count - 1);
//           }}
//         >
//           Decrement ➖
//         </button>
//         <button
//           style={resetButtonStyle}
//           onClick={() => setCount(0)}
//         >
//           Reset ↺
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Count;

import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(226, 32, 32, 0.2)",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "18px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#219150")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
      >
        Increment ➕
      </button>

      <button
        onClick={() => {
          if (count === 0) return;
          setCount(count - 1);
        }}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "18px",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
      >
        Decrement ➖
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "18px",
          backgroundColor: "#f39c12",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#d68910")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f39c12")}
      >
        Reset ↺
      </button>
    </div>
  );
}

export default Count;

