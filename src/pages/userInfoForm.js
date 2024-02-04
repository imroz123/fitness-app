import React, { useState, useEffect, useRef } from 'react';
import openAI from "./OpenAi";
// import { Typed }from 'react-typed';
import Typed from 'typed.js'
const UserInfoForm = () => {
    // State variables to store user input
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [generate, setGenerate] = useState(false);
    //   const typed = 
    // Function to handle changes in input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update the corresponding state variable based on the input field name
        switch (name) {
            case 'age':
                setAge(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'height':
                setHeight(value);
                break;
            default:
                break;
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setGenerate(true);
        // You can perform additional logic here if needed
        // For example, send the data to a server or perform calculations
        console.log('User data:', { age, weight, height });
    };

    return (
        <div className='Navbar' style={{display: 'flex', flexDirection: 'column', height: "100%"}}>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Weight (kg):
                    <input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Height (cm):
                    <input
                        type="number"
                        name="height"
                        value={height}
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Submit</button>
                <br></br>
            
            </form>
            {generate && (
            <div style={{display: "flex", flexDirection: "column"}}>
            Workout Plan:<br/><br/>

            Day 1: Full Body Strength Training<br/><br/>

            Squats: 4 sets x 8-12 reps<br/>
            Bench Press: 4 sets x 8-12 reps<br/>
            Bent Over Rows: 3 sets x 10-15 reps<br/>
            Overhead Press: 3 sets x 10-15 reps<br/>
            Planks: 3 sets, hold for 30-60 seconds each<br/>
            Day 2: Cardio and Core<br/><br/>

            30 minutes of brisk walking, jogging, or cycling<br/>
            HIIT (High-Intensity Interval Training): 20 minutes<br/>
            Core exercises: Crunches, leg raises, Russian twists - 3 sets x 15-20 reps each<br/>
            Day 3: Rest or Light Activity<br/>
            <br/>
            Day 4: Upper Body Strength Training<br/>
            <br/>
            Pull-Ups or Lat Pulldowns: 4 sets x 8-12 reps<br/>
            Dumbbell Rows: 3 sets x 10-15 reps<br/>
            Push-Ups: 3 sets x 15-20 reps<br/>
            Tricep Dips: 3 sets x 12-15 reps<br/>
            Bicep Curls: 3 sets x 12-15 reps<br/>
            Day 5: Cardio and Lower Body<br/>
            <br/>
            30-45 minutes of cardiovascular exercise (running, cycling, swimming)<br/>
            Lunges: 3 sets x 12-15 reps per leg<br/>
            Leg Press or Squats: 4 sets x 10-12 reps<br/>
            Hamstring Curls: 3 sets x 12-15 reps<br/>
            Calf Raises: 3 sets x 15-20 reps<br/>
            Day 6: Active Rest or Yoga<br/>
            <br/>
            Day 7: Rest<br/>
            <br/>
            Meal Recommendations:<br/>
            <br/>
            Breakfast:<br/>
            <br/>
            Scrambled eggs with spinach and tomatoes<br/>
            Whole grain toast<br/>
            Greek yogurt with berries<br/>
            Mid-Morning Snack:<br/>
            <br/>
            Handful of almonds or walnuts<br/>
            Apple or banana<br/>
            Lunch:<br/>
            <br/>
            Grilled chicken breast or tofu<br/>
            Quinoa or brown rice<br/>
            Steamed vegetables (broccoli, carrots, bell peppers)<br/>
            Afternoon Snack:<br/>
            <br/>
            Greek yogurt with a drizzle of honey<br/>
            Carrot or cucumber sticks<br/>
            Dinner:<br/>
            <br/>
            Baked or grilled salmon or cod<br/>
            Sweet potato or cauliflower mash<br/>
            Mixed green salad with olive oil dressing<br/>
            Evening Snack (if needed):<br/>
            <br/>
            Cottage cheese with pineapple<br/>
            Herbal tea<br/>
            Hydration:<br/>
            <br/>
            Drink at least 3 liters of water throughout the day.<br/>
            Important Points:<br/>
            <br/>
            Ensure a balance of macronutrients (protein, carbohydrates, and healthy fats).<br/>
            Include a variety of colorful fruits and vegetables for essential vitamins and minerals.<br/>
            Portion control is crucial for weight management.<br/>
            Consider consulting with a nutritionist to tailor the meal plan to your specific needs.<br/>
            Remember, consistency is key, and it's important to listen to your body. Adjust the intensity and duration of exercises based on your fitness level, and be patient with the process.
        </div>    
            )}
        </div>
    );
};

export default UserInfoForm;
