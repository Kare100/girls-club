import ServiceCard from './ServiceCard'
export default function Services() {

    return(
        <div className="Services">
            <h1 className="servicesTitle">Our Services</h1>

            <div className = "serviceCards">
                <ServiceCard
                title="Sisterhood"
                description="Build real connections through mentorship, support, and shared experiences."/>

                <ServiceCard
                title= "Skill-Up"
                description="Learn and grow with coding, career tips, and peer knowledge sharing."/>

                <ServiceCard
                title="Self-Care"
                description="Focus on wellness, mindfulness, and creative expression to stay balanced."/>

                <ServiceCard
                 title="Safe Space"
                 description="A dedicated community where you can share your thoughts and feelings without judgment."/>

                <ServiceCard
                title="Empower Hour"
                description="Weekly workshops focused on leadership, confidence building, and personal branding."/>

                <ServiceCard
                title="Tech Tea"
                description="Casual hangouts to discuss the latest in tech, share projects, and find study buddies."/>


            </div>
        </div>



    )
 
}