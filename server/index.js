import { app, port } from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(port, () => console.log(`Server started on port ${port}`));
