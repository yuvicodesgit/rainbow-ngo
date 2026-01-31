export default function ObjectivesGrid() {
    const objectives = [
        { icon: 'fa-book-open-reader', title: 'Holistic Learning and Education', desc: 'To promote affordable ‘Holistic Learning and Education’ based on the teachings of Jiddu Krishnamurti (with guidance from Krishnamurti Foundation, India), and other such progressive Educational, Skills Development and Livelihood undertakings (viz. Arivu, Mysore; The School, KFI; The Valley School, Bangalore; SEMCOL, Ladakh etc.)' },
        { icon: 'fa-leaf', title: 'Sustainable Development', desc: 'To promote sustainable development through environmental conservation, organic farming, natural resource management, waste management, and eco-tourism initiatives.' },
        { icon: 'fa-heart-pulse', title: 'Holistic Health and Wellness', desc: 'To promote holistic health and wellness through traditional healing systems (Ayurveda, Naturopathy, Unani, Homeopathy), yoga therapy, vipassana or mindfulness practices, sports, recreational activities, and rehabilitation services.' },
        { icon: 'fa-lightbulb', title: 'Progressive Philosophy for a Better World', desc: 'To promote progressive philosophical teachings for spiritual/ human growth, social justice and human dignity, especially based on the works of Late Jiddu Krishnamurti (20th Century Philosopher), Late Dr. B.R. Ambedkar (Chairman of the Constitution Drafting Committee of India), Late S.N. Goenka (Vipassana Teacher) and Late Narendra Achyut Dabholkar (Founder, MANS, Maharastra).' },
        { icon: 'fa-palette', title: 'Art and Culture', desc: 'To promote art and culture, promotion and preservation of the progressive and humane aspects of different indigenous people (especially belonging to Assam and the rest of North East India) along with promotion of cultural exchange in order to improve better cross-cultural understanding.' },
        { icon: 'fa-hands-holding-child', title: 'Relief Services to the Needy', desc: 'To offer relief and render services, at par with capability and feasibility of the organisation), to people/ victims of calamities like natural disasters, man-made disasters, war etc.' },
        { icon: 'fa-scale-balanced', title: 'Legal Service to protect Human Rights', desc: 'To promote Legal Service and act as a Judicial Advocacy Institution with the aim of realising Human Rights viz. Right to Life, Liberty, Equality, Freedom, Justice and Fair play for every individual in the society.' },
        { icon: 'fa-paw', title: 'Animal Welfare', desc: 'To work towards Animal Welfare and Protection and work towards establishing and defending the rights of all non-human living beings.' },
    ];

    return (
        <section id="objectives" className="section objectives-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Objectives</h2>
                    <div className="divider"></div>
                </div>
                <div className="objectives-grid">
                    {objectives.map((obj, index) => (
                        <div key={index} className="objective-card">
                            <div className="icon-box">
                                <i className={`fas ${obj.icon}`}></i>
                            </div>
                            <h3>{obj.title}</h3>
                            <p>{obj.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
