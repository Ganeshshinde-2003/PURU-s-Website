import Image from "next/image"
import styles from "./page.module.css"
import Approach from "../../../public/ricardo-gomez-angel-WsEAiVwGrwo-unsplash 1.png";

const Page = () => {
    return (
        <div className={styles.main}>
            <p className={styles.faqhead}>FAQ</p>
            <div className={styles.faqsection}>
                <div className={styles.faqs}>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• What is Sustainability?</p>
                        <p className={styles.ans}>Sustainability is a holistic approach that considers
                            human, ecological, social and economic dimensions,
                            recognising that all must be considered together
                            to find lasting prosperity.</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• Why Sustainability is important?</p>
                        <p className={styles.ans}>Sustainable living means understanding
                            how our lifestyle choices impact the
                            world around us and finding ways for
                            everyone to live better and lighter. It is
                            important for all us to understand that
                            sustainability is not merely environment
                            protection; human, economical and societies
                            well-being which calls for planning and harnessing
                            consumption patterns for better lifestyle. Reducing c
                            arbon footprints, making more informed and qualitative
                            choices and adapting the alternative ways of living will
                            help us uplift the overall ecosystem (all inclusive).</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• What the Current Sustainable products available with
                            Puru’s Enterprises?</p>
                        <p className={styles.ans}>Puru’s Enterprises will deal into 3 segments of sustainable
                            products – Stationery, Home Décor, Utility & Luxury Accessories.
                            At this initial stage we are going to introduce our first line of products
                            i.e., Stationery. Within this segment we have two parent products, and
                            they are Pen & Pencils made from Recycled process of waste and newspaper.
                            Two main products do have 6 different variants as follows<br /><br />• Seed Pen (Recycled Kraft Paper)<br />
                            • Non-Seed Pen (Recycled Kraft Paper)<br />
                            • Seed Pencil (Recycled Newspaper)<br />
                            • Non-Seed Pencil ((Recycled Newspaper)<br />
                            • Seed Pencil (Recycled Newspaper with Color Graphite)<br />
                            • Seed Pencil (Recycled Color Kraft Paper)</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• What is unique about Puru’s Sustainable products?</p>
                        <p className={styles.ans}>A sustainable product is a good that doesn't deplete resources
                            while offering environmental, social, and economic benefits throughout its
                            life cycle. Our stationery products are handmade by traditional and skilled
                            craftsmen from different part of the Nation. Few of the important Characteristics
                            of sustainable products –<br /><br />• Made from Recycled raw material.<br />
                            • Doesn't directly harm the environment.<br />
                            • Doesn't deplete natural resources.<br /></p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• Where can You buy Puru’s Sustainable products?</p>
                        <p className={styles.ans}>You can reach out to us on our email or contact number to book your
                            sustainable product, the details are mentioned on Contact Us page..</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• What is Consulting Services and why they are necessary?</p>
                        <p className={styles.ans}>Consulting services provides expert advice to individuals,
                            businesses and organisations, on a range of industrial or commercial
                            problems. Being the external advisor – a consultant often better able to
                            look at problem objectively and provide solution the company hasn’t
                            considered. By opting a consulting service, organizations do able to meet
                            important goals – operational efficiency and organizational growth. With
                            expertise, knowledge and experience, the consulting service can optimize
                            processes, performance and profitability of an organization.</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• What are the core areas wherein the consulting service is a must?</p>
                        <p className={styles.ans}>Strategy, Management, Marketing and Finance are the fundamental
                            areas of an organization which requires consistent performance. It goes
                            with Organizational vision, people & processes, consumer awareness and
                            economical aspect of providing product and services to consumers.
                            Consulting firms are capable of understanding the needs of business
                            owners and ensure that they bring in effective solutions to day to day
                            and complex business challenges.</p>
                    </div>
                    <div className={styles.faq1}>
                        <p className={styles.que}>• Why should individuals & organizations opt Puru’s solutions?</p>
                        <p className={styles.ans}>Puru’s Enterprises, takes a step forward and ensure that we are
                            not only offering products and services but at the same time pass
                            on crucial value and create necessary awareness to help everyone
                            make conscious choices and align themselves to better lifestyle.
                            Our aim is to provide solutions which leads to meet the individual,
                            organizational and societal needs and ensure that we collectively
                            move towards progressive future.</p>
                    </div>
                </div>
                <div className={styles.faqiamge}>
                    <Image src={Approach} alt="The Approach" className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default Page