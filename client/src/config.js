let BASE_URL = "https://ceddit.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:5000/";
}

export { BASE_URL };
