import Image from "next/image";
import styles from "./style.module.css"
import main from "../../../public/0F4A9170 1.png"
import one from "../../../public/sliderimages/puru 2.jpg"
import three from "../../../public/Screenshot 2023-09-20 at 7.58 1.png"
import five from "../../../public/Screenshot 2023-09-20 at 7.58 2.png"
import two from "../../../public/0F4A9073 1.png"
import four from "../../../public/0F4A9170 1.png"
import six from "../../../public/0F4A9004 1.png"
import seven from "../../../public/0F4A9009 1.png"
import eight from "../../../public/0F4A9218 1.png"
import nine from "../../../public/sliderimages/puru.jpg"

const Page = () => {
    return (
        <div className={styles.main}>
            <Image className={styles.mainimg} src={main} alt="Photo" />
            <div className={styles.part1}>
                <div className={styles.textpart}>
                    <h3>Newspaper Seed Pen, Seed pencils Designed for today’s world.</h3>
                    <p>Draw the line on climate change with our eco friendly and fully biodegradable pencils. Our pencils are made from recycled newspapers</p>
                </div>
                <div className={styles.imgpart}>
                    <Image src={one} alt="photo1" />
                </div>
            </div>
            <div className={styles.onlyimage}>
                <div className={styles.imgpart1}>
                    <div className={styles.images}>
                        <Image src={two} alt="two" />
                        <Image src={three} alt="three" />
                    </div>
                    <h4>Kraft Paper Pen</h4>
                    <p>Seed & non seed</p>
                </div>
                <div className={styles.imgpart1}>
                    <div className={styles.images}>
                        <Image src={four} alt="two" />
                        <Image src={five} alt="three" />
                    </div>
                    <h4>Newspaper Paper Pencil</h4>
                    <p>Seed & non seed</p>
                </div>
            </div>
            <div className={styles.part1}>
                <div className={styles.textpart}>
                    <h3>Coloured Kraft paper pencils Designed for today’s world.</h3>
                    <p>Draw the line on climate change with our eco friendly and fully biodegradable pencils. Our pencils are made from recycled newspapers</p>
                </div>
                <div className={styles.imgpart}>
                    <Image src={six} alt="photo1" />
                </div>
            </div>
            <div className={styles.onlyimagetwo}>
                <div className={styles.imageonly}>
                    <Image src={seven} alt="two" />
                    <Image src={eight} alt="three" />
                </div>
                <h4>Colour Kraft Paper Pencil</h4>
                <p>Seed & non seed</p>
            </div>
            <div className={styles.part1}>
                <div className={styles.textpart}>
                    <h3>Coloured Kraft paper pencils Designed for today’s world.</h3>
                    <p>Draw the line on climate change with our eco friendly and fully biodegradable pencils. Our pencils are made from recycled newspapers</p>
                </div>
                <div className={styles.imgpart}>
                    <Image src={nine} alt="photo1" />
                </div>
            </div>
        </div>
    )
}

export default Page;