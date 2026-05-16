import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '08fbd239f779ff6891919cd419136a398a0debbf', queries,  });
export default client;
  