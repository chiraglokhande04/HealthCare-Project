import React, { useState } from 'react';

function Community() {
    const [visibleAnswers, setVisibleAnswers] = useState({});

    const toggleAnswer = (index) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const discussions = [
        {
            question: "How to manage stress during treatment?",
            answer: "Managing stress during treatment can be challenging. Some effective strategies include practicing mindfulness, engaging in regular physical activity, maintaining a healthy diet, and seeking support from friends, family, or a mental health professional."
        },
        {
            question: "Tips for a healthy diet",
            answer: "A healthy diet includes a variety of fruits and vegetables, whole grains, lean proteins, and healthy fats. It's important to stay hydrated, limit processed foods, and avoid excessive sugar and salt intake."
        },
        {
            question: "Best exercises for recovery",
            answer: "The best exercises for recovery depend on the type of treatment and individual needs. Generally, low-impact activities like walking, swimming, and yoga can be beneficial. Always consult with a healthcare provider before starting any new exercise regimen."
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Community Support</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Welcome to the Community</h2>
                <p className="text-gray-700 mb-4">
                    This is a place where you can ask questions, share experiences, and get support from other members.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Join the Discussion
                </button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">Recent Discussions</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {discussions.map((discussion, index) => (
                        <li key={index} className="mb-2">
                            <button onClick={() => toggleAnswer(index)} className="text-blue-500">
                                {discussion.question}
                            </button>
                            {visibleAnswers[index] && (
                                <p className="text-gray-600 mb-4">{discussion.answer}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Community;