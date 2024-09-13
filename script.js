const apiKey = ''; 

document.getElementById('submit-btn').addEventListener('click', async () => {
    const achievement = document.getElementById('achievement').value;
    const regret = document.getElementById('regret').value;

    const prompt = `You are a highly encouraging AI. The user has achieved: "${achievement}". They regret: "${regret}". Provide an uplifting and motivational response.`;

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 150
            })
        });

        const data = await response.json();
        const compliment = data.choices[0].text.trim();

        document.getElementById('compliment').innerText = compliment;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        document.getElementById('compliment').innerText = 'An error occurred. Please try again.';
    }
});
