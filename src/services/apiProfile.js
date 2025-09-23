export async function createUpdateProfile(profile, access_token) {
  try {
    const response = await fetch(
      "https://dev-api.redowise.com/v1/users/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          name: profile.name,
          phone_number: profile.phone_number,
          general_job_title: profile.general_job_title,
          password: profile.password,
          confirm_password: profile.confirm_password,
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
