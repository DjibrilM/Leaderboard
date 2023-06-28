const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const uniqueId = 'lvEo1fojlN7C2HMlW2Kg';

export const fetchScores = async () => {
  try {
    const request = await fetch(`${url}games/${uniqueId}/scores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const postScore = async (requestBody) => {
  try {
    const request = await fetch(`${url}games/${uniqueId}/scores`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
