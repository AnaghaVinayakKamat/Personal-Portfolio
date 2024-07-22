

const About = () => {
    return (
            
            <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src="/assets/myimg.jpg" width={290} height={290} alt="" className="rounded border-2 p-1 border-rose-500 img_glow" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-rose-500">About Me</h1>
                <p data-aos="fade-left" >I hold a post-graduate Master’s degree in Computer Science - Data Analytics from the prestigious National University of Ireland Galway and a Bachelor’s degree in Information Technology with distinction from University of Mumbai. My expertise includes Python, R, MS Power BI, MS Excel, JavaScript, ReactJS, and Django. With one year of professional experience and numerous completed projects, I am eager to advance in this field and contribute to the company’s growth while expanding my knowledge.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="/assets/cv.pdf" download><button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-rose-800 border-rose-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default About;