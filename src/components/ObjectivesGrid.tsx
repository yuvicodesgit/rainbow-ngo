export default function ObjectivesGrid() {
    const objectives = [
        { icon: 'fa-hands-holding-child', title: 'Child Welfare', desc: 'Supporting education and nutrition for underprivileged children.' },
        { icon: 'fa-dove', title: 'Peace Building', desc: 'Workshops and dialogues to promote communal harmony.' },
        { icon: 'fa-leaf', title: 'Environment', desc: 'Tree plantation drives and sustainable living initiatives.' },
        { icon: 'fa-heart-pulse', title: 'Health Camps', desc: 'Providing free medical checkups to rural communities.' },
        { icon: 'fa-om', title: 'Meditation', desc: 'Teaching mindfulness and Dhamma for mental clarity.' },
        { icon: 'fa-bowl-food', title: 'Food Security', desc: 'Distributing rations to those in desperate need.' },
        { icon: 'fa-rainbow', title: 'Inclusivity', desc: 'Advocating for rights and dignity of all genders.' },
        { icon: 'fa-book-open-reader', title: 'Education', desc: 'Scholarships and learning aids for bright students.' },
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
