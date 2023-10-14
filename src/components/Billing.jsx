import { apple, KitchenCost, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={KitchenCost} alt="Kitchen Arrangements" className='w-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Keep Your Kitchen <br className='sm:block hidden' /> Costs in Check
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily control your billing with our flavorful budgeting features. Our app helps you manage your culinary expenses efficiently, so you can savor every meal without worrying about your budget.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />

      </div>

    </div>
   </section>
  )

export default Billing