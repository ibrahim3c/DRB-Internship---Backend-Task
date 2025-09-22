import { listen } from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
