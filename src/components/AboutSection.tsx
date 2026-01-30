"use client";

import { useState } from 'react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>About RDF</h2>
                    <div className="divider"></div>
                </div>
                <div className="about-content">
                    <p className="lead-text text-center">
                        Rainbow Dhamma Foundation is a Section 8 'Not for Profit' Company incorporated under the Companies Act, 2013.
                    </p>
                    <p className="text-center mb-4">
                        It is established with a sole purpose of pursuing the following objectives:
                    </p>

                    <div className={`expanded-content ${isExpanded ? 'active' : 'hidden'}`}>
                        <ol className="objectives-list text-left space-y-4 ml-6 list-decimal">
                            <li className="mb-3">
                                <strong>To promote affordable ‘Holistic Learning and Education’</strong> based on the teachings of Jiddu Krishnamurti (with guidance from Krishnamurti Foundation, India), and other such progressive Educational, Skills Development and Livelihood undertakings (viz. Arivu, Mysore; The School, KFI; The Valley School, Bangalore; SEMCOL, Ladakh etc.)
                            </li>
                            <li className="mb-3">
                                <strong>To promote sustainable development</strong> through environmental conservation, organic farming, natural resource management, waste management, and eco-tourism initiatives.
                            </li>
                            <li className="mb-3">
                                <strong>To promote holistic health and wellness</strong> through traditional healing systems (Ayurveda, Naturopathy, Unani, Homeopathy), yoga therapy, vipassana or mindfulness practices, sports, recreational activities, and rehabilitation services.
                            </li>
                            <li className="mb-3">
                                <strong>To promote progressive philosophical teachings</strong> for spiritual/ human growth, social justice and human dignity, especially based on the works of Late Jiddu Krishnamurti (20th Century Philosopher), Late Dr. B.R. Ambedkar (Chairman of the Constitution Drafting Committee of India), Late S.N. Goenka (Vipassana Teacher) and Late Narendra Achyut Dabholkar (Founder, MANS, Maharastra).
                            </li>
                            <li className="mb-3">
                                <strong>To promote art and culture,</strong> promotion and preservation of the progressive and humane aspects of different indigenous people (especially belonging to Assam and the rest of North East India) along with promotion of cultural exchange in order to improve better cross-cultural understanding.
                            </li>
                            <li className="mb-3">
                                <strong>To offer relief and render services,</strong> at par with capability and feasibility of the organisation, to people/ victims of calamities like natural disasters, man-made disasters, war etc.
                            </li>
                            <li className="mb-3">
                                <strong>To promote Legal Service and act as a Judicial Advocacy Institution</strong> with the aim of realising Human Rights viz. Right to Life, Liberty, Equality, Freedom, Justice and Fair play for every individual in the society.
                            </li>
                            <li className="mb-3">
                                <strong>To work towards Animal Welfare and Protection</strong> and work towards establishing and defending the rights of all non-human living beings.
                            </li>
                        </ol>

                        <div className="disclaimer mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600 italic text-center">
                            "No Object of the Company will be carried out without obtaining prior approval from the Concerned Authorities and none of the objects will be carried out on commercial Basis."
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn btn-secondary"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hidden {
          display: none;
        }
        .active {
          display: block;
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .objectives-list {
            text-align: left;
            margin-top: 20px;
        }
        .objectives-list li {
            margin-bottom: 15px;
            line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default AboutSection;
