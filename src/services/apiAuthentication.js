import { store } from "../redux/store";

// export async function createUser(email) {
//   console.log("Mock createUser called with:", email);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         message: "A verification code has been sent for you",
//       });
//     }, 500);
//   });
// }

// export async function verifyOtp({ email, otp }) {
//   console.log("Mock verifyOtp called with:", { email, otp });
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (otp === "123456") {
//         resolve({
//           user_id: "987867657890-0=-987547",
//           email,
//           is_active: false,
//           is_verified: true,
//           token: {
//             access_token: ";jlhgjfhdshfjkyguhio;jphlgkfjdhey",
//             token_type: "bearer",
//           },
//         });
//       } else {
//         reject(new Error("Invalid OTP"));
//       }
//     }, 500);
//   });
// }

export async function fetchWithAuth(url, options = {}) {
  const state = store.getState();

  let access_token = state.auth.loginUser.access_token;
  const refresh_token = state.auth.loginUser.refresh_token;

  const config = {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(url, config);

  if (res.status === 401 && refresh_token) {
    console.log("Access token expired, refreshing...");

    const newAccessToken = await refreshAccessToken(
      store.dispatch,
      refresh_token
    );

    if (newAccessToken) {
      config.headers.Authorization = `Bearer ${newAccessToken}`;
      res = await fetch(url, config);
    }
  }

  return res;
}

export async function createUser(email) {
  try {
    const response = await fetch("https://dev-api.redowise.com/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    if (data.statusCode !== 200) {
      throw new Error(data.errorMessage);
    }

    return data;
  } catch (error) {
    throw error;
  }
}
export async function verifyOtp({ email, otp }) {
  try {
    const response = await fetch(
      "https://dev-api.redowise.com/auth/verify-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp_code: otp,
        }),
      }
    );

    const data = await response.json();

    if (data.statusCode !== 200) {
      throw new Error(data.errorMessage);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signInUser(user) {
  try {
    const response = await fetch("https://dev-api.redowise.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        password: user?.password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.statusCode !== 200) {
      throw new Error(data.errorMessage);
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser(access_token) {
  try {
    if (!access_token) throw new Error("No access token provided");

    const response = await fetch("https://dev-api.redowise.com/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await response.json();
    if (data.statusCode !== 200) {
      throw new Error(data.errorMessage);
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function refreshAccessToken(dispatch, refresh_token) {
  try {
    const res = await fetch("https://yourapi.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token }),
    });

    if (!res.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await res.json();

    // update Redux with the new access token
    dispatch(setToken(data.access_token));

    return data.access_token;
  } catch (err) {
    console.error("Token refresh failed:", err);
    dispatch(logout());
    return null;
  }
}
