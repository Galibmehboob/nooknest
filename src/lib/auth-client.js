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
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const {
    useSession,
    signIn,
    signUp,
    signOut,
} = authClient;