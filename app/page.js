import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import Footer from '../components/Footer';
import LatestRecipe from '../components/LatestRecipe';
import Headings from '@/components/Headings';
import Heading2 from '@/components/Heading2';
import Headings3 from '@/components/Headings3';
import AllRecipe from '@/components/AllRecipe';
import Heading5 from '@/components/Heading5';
import DisplayCard from '@/components/DisplayCard';
import Journal from '@/components/Journal';
import BannerComp from '@/components/BannerComp';
import BannerComponent from '@/components/BannerComponent';

function MyApp({ Component, pageProps }) {
return (
<>
<Navbar />
<Navbar2/>
<Banner1/>
<Headings/>
<LatestRecipe/>
<Banner2/>
<Heading2 tag="New Recipes" content="Explore our latest recipes, from quick snacks to heartly meals and indulgent desserts."/>
<Headings3/>
<AllRecipe/>
<Heading5/>
<Heading2 tag="Video Recipes" content="Watch our latest recipe videos and learn step-by-step cooking tips and techniques!"/>
<AllRecipe/>
<DisplayCard/>
<Heading2 tag="Our Journal" content="Discover stories, tips, and trends to inspire your culinary journey and creativity!"/>
<BannerComponent/>
<Journal/>
<Footer/>

</>
);
}

export default MyApp;
