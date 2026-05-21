// import { createAuthClient } from "better-auth/react";

// export const authClient = createAuthClient({
//     baseURL: "http://localhost:3000",
// });

// export const {
//     useSession,
//     signIn,
//     signUp,
//     signOut,
// } = authClient;

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
});

export const {
    useSession,
    signIn,
    signUp,
    signOut,
} = authClient;