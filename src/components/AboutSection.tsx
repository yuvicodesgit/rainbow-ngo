"use client";

import { useState } from 'react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="pdf-heading">About RDF</h2>
                    <div className="divider"></div>
                </div>
                <div className="about-content">
                    <div className="vision-mission-text mb-12">
                        <h3 className="pdf-subheading text-xl mb-4">VISION</h3>
                        <p className="pdf-body mb-8 italic">
                            A world where holistic education, sustainable living, inner wellness, and cultural harmony empower every individual—human and animal alike—to thrive in dignity, justice, and unity with nature.
                        </p>
                        <h3 className="pdf-subheading text-xl mb-4">MISSION</h3>
                        <p className="pdf-body mb-8 italic">
                            To promote and offer holistic, progressive learning aligned with Jiddu Krishnamurti's vision of education; environmental stewardship; natural and holistic healing; mindfulness practices; teachings of Jiddu Krishnamurti, B.R. Ambedkar, and S.N. Goenka; arts and culture (especially of Assam and Northeast India); disaster relief; human rights advocacy; and animal welfare—towards building resilient communities rooted in compassion and equity.
                        </p>
                    </div>

                    <div className={`expanded-content ${isExpanded ? 'active' : 'hidden'}`}>
                        <h3 className="pdf-subheading text-xl mb-6 text-center">OUR OBJECTIVES</h3>
                        <ol className="objectives-list pdf-body list-decimal ml-8">
                            <li>
                                <strong>‘Holistic Learning and Education’</strong><br />
                                To promote affordable ‘Holistic Learning and Education’ based on the teachings of Jiddu Krishnamurti (with guidance from Krishnamurti Foundation, India), and other such progressive Educational, Skills Development and Livelihood undertakings (viz. Arivu, Mysore; The School, KFI; The Valley School, Bangalore; SEMCOL, Ladakh etc.)
                            </li>
                            <li>
                                <strong>'Sustainable Development'</strong><br />
                                To promote sustainable development through environmental conservation, organic farming, natural resource management, waste management, and eco-tourism initiatives.
                            </li>
                            <li>
                                <strong>'Holistic health and Wellnes'</strong><br />
                                To promote holistic health and wellness through traditional healing systems (Ayurveda, Naturopathy, Unani, Homeopathy), yoga therapy, vipassana or mindfulness practices, sports, recreational activities, and rehabilitation services.
                            </li>
                            <li>
                                <strong>'Progressive Philosophy for a Better World'</strong><br />
                                To promote progressive philosophical teachings for spiritual/ human growth, social justice and human dignity, especially based on the works of Late Jiddu Krishnamurti (20th Century Philosopher), Late Dr. B.R. Ambedkar (Chairman of the Constitution Drafting Committee of India), Late S.N. Goenka (Vipassana Teacher) and Late Narendra Achyut Dabholkar (Founder, MANS, Maharastra).
                            </li>
                            <li>
                                <strong>'Art and Culture'</strong><br />
                                To promote art and culture, promotion and preservation of the progressive and humane aspects of different indigenous people (especially belonging to Assam and the rest of North East India) along with promotion of cultural exchange in order to improve better cross-cultural understanding.
                            </li>
                            <li>
                                <strong>'Relief Services to the Needy'</strong><br />
                                To offer relief and render services, at par with capability and feasibility of the organisation), to people/ victims of calamities like natural disasters, man-made disasters, war etc.
                            </li>
                            <li>
                                <strong>'Legal Service to protect Human Rights'</strong><br />
                                To promote Legal Service and act as a Judicial Advocacy Institution with the aim of realising Human Rights viz. Right to Life, Liberty, Equality, Freedom, Justice and Fair play for every individual in the society.
                            </li>
                            <li>
                                <strong>'Animal Welfare'</strong><br />
                                To work towards Animal Welfare and Protection and work towards establishing and defending the rights of all non-human living beings.
                            </li>
                        </ol>

                        <div className="disclaimer mt-10 mb-10 text-center pdf-body italic font-bold">
                            "No Object of the Company will be carried out without obtaining prior approval from the Concerned Authorities and none of the objects will be carried out on commercial Basis."
                        </div>

                        <div className="philosophy-section mt-12">
                            <h3 className="pdf-subheading text-2xl mb-8 text-center">ORGANISATIONAL PHILOSOPHY</h3>
                            <p className="mb-8 pdf-body">Our Organisational Philosophy is based on the following Core teachings of 'Gautama the Buddha':</p>

                            <div className="philosophy-block">
                                <h4 className="pdf-subheading text-lg mb-4 italic">TEACHING I - THE FOUR NOBLE TRUTHS:</h4>
                                <p className="mb-4 pdf-body">Addressing suffering (Dukkha) as a universal reality and offering a path to liberation, the Buddha articulated ‘The Four Noble Truths’ in his first sermon after enlightenment. The truths are:</p>
                                <ol className="list-decimal ml-8 space-y-4 pdf-body">
                                    <li><strong>Truth of Suffering:</strong> Life involves inevitable suffering, including birth, aging, illness, death, separation from what we love, and not getting what we want.</li>
                                    <li><strong>Truth of the Cause of Suffering:</strong> Suffering arises from craving, attachment, and ignorance, which fuel a cycle of desire and dissatisfaction.</li>
                                    <li><strong>Truth of the Cessation of Suffering:</strong> Suffering can end completely by eliminating its causes, leading to nirvana—a state of peace and freedom.</li>
                                    <li><strong>Truth of the Path to the Cessation of Suffering:</strong> The Noble Eightfold Path (right view, intention, speech, action, livelihood, effort, mindfulness, and concentration) guides this liberation.</li>
                                </ol>
                            </div>

                            <div className="philosophy-block">
                                <h4 className="pdf-subheading text-lg mb-4 italic">TEACHING II - THE NOBLE EIGHTFOLD PATH</h4>
                                <ol className="list-decimal ml-8 space-y-4 pdf-body">
                                    <li><strong>Right View:</strong> Correctly understanding the Four Noble Truths, the law of karma, and the impermanent, interconnected nature of reality.</li>
                                    <li><strong>Right Resolve:</strong> Cultivating wholesome intentions centered on compassion, goodwill, and the renunciation of harmful attachments.</li>
                                    <li><strong>Right Speech:</strong> Abstaining from lying, gossip, and harsh words; instead, speaking truthfully to promote harmony and understanding.</li>
                                    <li><strong>Right Action:</strong> Practicing ethical conduct by refraining from harmful behaviors such as killing, stealing, and sexual misconduct.</li>
                                    <li><strong>Right Livelihood:</strong> Earning a living through ethical professions that do not involve dishonesty or cause harm to sentient beings.</li>
                                    <li><strong>Right Effort:</strong> Diligently working to eliminate negative mental states while nurturing and sustaining wholesome, positive qualities.</li>
                                    <li><strong>Right Mindfulness:</strong> Maintaining non-judgmental, moment-to-moment awareness of one's body, feelings, mind, and thoughts.</li>
                                    <li><strong>Right Concentration:</strong> Developing a disciplined, one-pointed mind through meditation to achieve deep tranquillity and insight.</li>
                                </ol>
                            </div>

                            <div className="philosophy-block mt-12">
                                <h4 className="pdf-subheading text-lg mb-6 italic">TEACHING III - BELIEVE NOTHING WITHOUT VALID REASONING</h4>
                                <div className="pdf-body">
                                    <p className="mb-2">"<strong>Do Not Believe</strong> in Anything (simply) because you have Heard it.</p>
                                    <p className="mb-2"><strong>Do Not Believe</strong> in Traditions because they have been Handed Down for many Generations.</p>
                                    <p className="mb-2"><strong>Do Not Believe</strong> in Anything because it is Spoken and Rumoured by Many.</p>
                                    <p className="mb-2"><strong>Do Not Believe</strong> in Anything (simply) because it is found Written in your Religious Books.</p>
                                    <p className="mb-2"><strong>Do Not Believe</strong> merely in the Authority of your Teachers and Elders.</p>
                                    <p className="mt-4"><strong>BELIEVE</strong>, only After Due Examination and Analysis. If you find it to be Reasonable and Conducive to the Good, the Benefit and the Welfare of All Beings, Believe and Accept that Doctrine, take it as your Guide and Live up to it."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
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
        .pdf-heading {
            font-family: 'Arial Rounded MT Bold', 'Arial Rounded MT', Arial, sans-serif;
            font-weight: bold;
            text-decoration: underline;
            text-transform: uppercase;
        }
        .pdf-subheading {
            font-family: 'Arial Rounded MT Bold', 'Arial Rounded MT', Arial, sans-serif;
            font-weight: bold;
            text-decoration: underline;
            text-transform: uppercase;
        }
        .pdf-body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 1.1rem;
            line-height: 1.5;
        }
        .vision-mission-text {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        .objectives-list li {
            margin-bottom: 20px;
        }
        .philosophy-block {
            margin-bottom: 30px;
        }
      `}</style>
        </section>
    );
};

export default AboutSection;
