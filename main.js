const button = document.querySelector('#generateStory');
button.addEventListener('click', generateStory);

function generateStory() {
    // Get user input
    const customName = document.getElementById('customName').value;
    const unitType = document.querySelector('input').value;
    const container = document.querySelector('.container');

    // Your silly story template
    const sillyStory = "Once upon a time, there was a person named Bob. They weighed WEIGHT pounds and enjoyed the nice WEATHER.";

    // Replace placeholders in the story
    let generatedStory = sillyStory.replace('Bob', customName || 'Bob');
    // Convert units if UK is selected
    if (unitType === 'UK') {
         generatedStory = generatedStory.replace('pounds', 'stones');
    }else if(unitType === 'US'){
        generatedStory.replace('weather', 'centigrade')
    }
    // Display the generated story
    document.getElementById('storyOutput').textContent = generatedStory;

    // Set container background color
    container.style.backgroundColor = "green";
    container.style.color = "white";
}
