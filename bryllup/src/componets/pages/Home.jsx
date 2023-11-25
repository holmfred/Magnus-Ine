import MainCarousel from "../ui/carousel/MainCarousel"
import Heading from "../layout/Heading"

function Home () {
    return ( 
        <>
        <Heading size="2" content={"Forside"} />
        <MainCarousel />
        </>
    )
}

export default Home