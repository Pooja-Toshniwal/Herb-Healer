const symptomsDropdown = document.getElementById("symptoms-dropdown");
const addSymptomButton = document.getElementById("add-symptom");
const selectedSymptomsList = document.getElementById("selected-symptoms-list");
const submitButton = document.getElementById("submit-button");

// Define symptom data based on categories
const symptomData = {
    category1: ["Symptom 1", "Symptom 2", "Symptom 3"],
    category2: ["Symptom 4", "Symptom 5", "Symptom 6"],
    category3: ["Symptom 7", "Symptom 8", "Symptom 9"],
};

// Function to populate the symptoms dropdown based on the selected category
const dropdownData = {
    "Digestive System Disorders": [
        'Digestive Weakness',
        'Stomach Disorders',
        'Constipation',
        'Irritable Bowel Syndrome',
        'Diarrhea',
        'Abdominal Pain',
        'Abdominal Distention',
        'Abdomen Irregular Fever',
        'Gastrointestinal Disorders',
        'Indigestion',
        'Hyperacidity'
    ],
    "Fever and Infectious Diseases": [
        'Fever',
        'Chronic Fever',
        'Tuberculosis',
        'Typhoid Fever'
    ],
    "Cardiovascular Disorders": [
        'Heart Disease',
        'Weak Heart',
        'Heartburn',
        'Chest Injury',
        'Chest Pain',
        'Spleen Disorders',
        'Hypertension'
    ],
    "Mental Health and Neurological Disorders": [
        'Mental Disorders',
        'Delusion',
        'Fainting',
        'Memory Loss',
        'Anxiety',
        'Psychosis',
        'Epilepsy',
        'Involuntary Movements'
    ],
    "Gynecological and Reproductive Health": [
        'Menstrual Disorders',
        'White Discharge (Leukorrhea)',
        'Female Reproductive Disorders',
        'Menstrual Blockage',
        'Painful Menstruation',
        'Abnormal Uterine Bleeding'
    ],
    "Skin Disorders": [
        'Itching',
        'Skin Disorders',
        'Skin Eruptions',
        'Fungal Skin Infection',
        'Serious Skin Disorders',
        'Vitiligo'
    ],
    "Respiratory Disorders": [
        'Cough',
        'Breathlessness',
        'Sinusitis',
        'Common Cold'
    ],
    "Urinary Tract and Kidney Disorders": [
        'Difficulty in Urination',
        'Kidney Stones',
        'Urinary Obstruction',
        'Urinary Disorders'
    ],
    "Blood and Circulation Disorders": [
        'Anemia',
        'Bleeding Disorders',
        'Blood Impurity',
        'Blood Stasis',
        'Impurity in Blood',
        'Toxin in Blood'
    ],
    "Metabolic and Hormonal Disorders": [
        'Diabetes',
        'Obesity',
        'Hormonal Imbalance'
    ],
    "Musculoskeletal Disorders": [
        'Joint Pain',
        'Arthritis (Rheumatoid Arthritis, Gouty Arthritis)',
        'Bone Fracture',
        'Joint Stiffness',
        'Sciatica'
    ],
    "Infections and Immune System Disorders": [
        'Worm Infestation',
        'Tuberculosis',
        'Wasting Syndrome',
        'Hepatitis',
        'Jaundice',
        'Urticaria',
        'Impotency',
        'Infertility'
    ],
    "Eye and Ear Disorders": [
        'Eye Disorders',
        'Ear Discharge',
        'Conjunctivitis',
        'Visual Impairment',
        'Eye Injury',
        'Eye Swelling'
    ],
    "Dental and Oral Health": [
        'Mouth Disorders',
        'Dental Disorders',
        'Bad Breath',
        'Oral Ulcers',
        'Tonsillitis'
    ],
    "Injuries and Wound Healing": [
        'Burn Injury',
        'Infected Wound',
        'Pilonidal Cyst',
        'Perianal Abscess',
        'Wound Due to Kapha Imbalance'
    ],
    "Other Categories": [
        'Childhood Diseases',
        'Child Malnutrition',
        'Disorders During Pregnancy',
        'Post-Delivery Disorders',
        'Postnatal Diseases',
        'Aging-related Disorders',
        'Snake Bite'
    ],
    // Add more categories with their respective symptoms
};

// Function to populate the category dropdown
function populateCategoryDropdown() {
    const categoryDropdown = document.getElementById('category-dropdown');
    // Clear existing options
    categoryDropdown.innerHTML = '';
    // Add categories as options
    for (const category in dropdownData) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    }
    // Trigger the change event to populate the symptom dropdown for the selected category
    categoryDropdown.dispatchEvent(new Event('change'));
}

// Function to populate the symptom dropdown based on the selected category
function populateSymptomDropdown(selectedCategory) {
    const symptomsDropdown = document.getElementById('symptoms-dropdown');
    // Clear existing options
    symptomsDropdown.innerHTML = '';
    // Get the symptoms for the selected category
    const symptoms = dropdownData[selectedCategory];
    // Add symptoms as options
    if (symptoms) {
        symptoms.forEach(symptom => {
            const option = document.createElement('option');
            option.value = symptom;
            option.textContent = symptom;
            symptomsDropdown.appendChild(option);
        });
    }
}

// Attach event listener to the category dropdown to populate the symptom dropdown
document.getElementById('category-dropdown').addEventListener('change', function () {
    const selectedCategory = this.value;
    populateSymptomDropdown(selectedCategory);
});

// Initially populate the category dropdown
populateCategoryDropdown();

// Array to store selected symptoms
const selectedSymptoms = [];

addSymptomButton.addEventListener("click", function () {
    const selectedOption = symptomsDropdown.options[symptomsDropdown.selectedIndex];
    const symptomValue = selectedOption.value;
    // Add the selected symptom to the array
    selectedSymptoms.push(symptomValue);

    // Update the list of selected symptoms
    updateSelectedSymptomsList();
});

// Function to update the list of selected symptoms
function updateSelectedSymptomsList() {
    selectedSymptomsList.innerHTML = "";
    selectedSymptoms.forEach((symptom, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = symptom;
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            selectedSymptoms.splice(index, 1);
            updateSelectedSymptomsList();
        });
        listItem.appendChild(removeButton);
        selectedSymptomsList.appendChild(listItem);
    });
}

// Submit button functionality (You can modify this to send data to a server if needed)
submitButton.addEventListener("click", function () {
    // Do something with the selected symptoms, e.g., send to a server
    console.log("Selected Symptoms:", selectedSymptoms);
});


// Function to handle the submission of symptoms
function submitSymptoms() {
    // Check if there are selected symptoms
    if (selectedSymptoms.length === 0) {
        alert('Please select at least one symptom.');
        return;
    }

    // Prepare the data to send to the API
    const data = {
        symptoms: selectedSymptoms,
    };

    // Define the API URL (replace with your actual API endpoint)
    const apiUrl = 'https://example.com/api/endpoint';

    // Make a POST request to the API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(apiResponse => {
            // Handle the API response here
            displayResults(apiResponse);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to display the API results
function displayResults(apiResponse) {
    // Display the results in the results container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    apiResponse.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3>Result ${index + 1}</h3>
            <p>Medicine Name: ${result.medicine}</p>
            <p>Dosage: ${result.dosage}</p>
            <p>Age: ${result.age}</p>
            <p>Precaution: ${result.precaution}</p>
            <p>Allergies: ${result.allergies}</p>
        `;
        resultsContainer.appendChild(resultItem);
    });
}
