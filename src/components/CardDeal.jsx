import { Student } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Discover delightful culinary <br className='sm:block hidden' /> experiences in a few simple steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Embark on delightful culinary journeys, discovering exquisite flavors and culinary wonders with ease and delight.
      </p>

      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={Student} alt="Student" className='w-[100%] h-[100%]' />

    </div>
  </section>
  )

export default CardDeal