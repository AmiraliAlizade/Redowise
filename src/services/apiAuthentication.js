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

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);
      throw new Error(errorData.detail || "Could not fetch api");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Could not fetch api");
    }
    const data = await response.json();

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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to fetch current user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
