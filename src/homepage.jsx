import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';
import { useEmail } from './assets/email/email';
import SendEmailProvider from './assets/email/email';

function Homepage( {name, setName, email, setEmail, contactNo, setContactNo, message, setMessage}) {
  const controls = useAnimation();
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {state , sendEmail} = useEmail()

  const handleCancelClick = () => {
    // Clear form fields when Cancel is clicked
    setName('');
    setEmail('');
    setContactNo('');
    setMessage('');
  };

  const handleSendClick = async () => {

   await sendEmail({name, email, contactNo, message})
  
    
      setIsFormSubmitted(true);
    
      setName('');
      setEmail('');
      setContactNo('');
      setMessage('');
    

  };

  const handleInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
       }
        else if (name === 'message') {
      setMessage(value);
    } else {
      return;
    }
    
  }



  useEffect(() => {
    controls.start('visible');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define the thresholds for each section
      const aboutMeThreshold = 100;
      const skillsThreshold = 500; // Adjust as needed
      const projectsThreshold = 1000; // Adjust as needed
      const contactThreshold = 1500; // Adjust as needed

      setIsAboutMeVisible(scrollY > aboutMeThreshold);
      setIsSkillsVisible(scrollY > skillsThreshold);
      setIsProjectsVisible(scrollY > projectsThreshold);
      setIsContactVisible(scrollY > contactThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 2,
      },
    },
  };

  const hoverScaleVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative  md:px-8">
      <div className=" justify-center h-[100vh] top-[5rem]
       relative font-robo  md:font-[3rem] 
       flex flex-col text-center items-start   space-y-6">
        <motion.span initial="hidden" animate={controls} variants={fadeInUpVariants}
        className='lg:text-7xl intro md:text-5xl text-5xl'>
          Hello, I'm
        </motion.span>
        <motion.span initial="hidden" animate={controls} variants={fadeInUpVariants}
        className='lg:text-7xl intro md:text-5xl text-5xl'>
          Faith Adetona
        </motion.span>
        <motion.span initial="hidden" animate={controls} variants={fadeInUpVariants} className="lg:text-3xl text-xl 
        font-semibold">
          Frontend Developer
        </motion.span>
        <motion.span initial="hidden" animate={controls} variants={fadeInUpVariants} className="text-lg text-center">
          Email: adetona.fk@gmail.com
        </motion.span>
        <motion.span initial="hidden" animate={controls} variants={fadeInUpVariants} className="flex 
        justify-center items-center w-full text-xl gap-4">
          <a href="https://www.linkedin.com/in/fktona" className=" relative z-[2] transform hover:scale-125">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/aik_fikan?t=JscyCck_SLDJOgCGVA0Vbw&s=09" className="  transform aspect-square  hover:scale-125">
            <AiFillTwitterSquare className='w-full' />
          </a>
          <a href="https://github.com/fktona" className=" transform hover:scale-125">
            <AiFillGithub />
          </a>
        </motion.span>
      </div>

      <div className="font-mono relative p-2">
        <div>
          <motion.h3
            className="text-xl relative m-5 w-fit mb-4 mx-auto  font-mono mt-[5rem] text-center"
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          >
            About Me
          </motion.h3>
          <motion.span
            className="text-sm leading-8 text-center font-normal font-mono"
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          >
            
            I'm a dedicated Frontend Developer with 2+ years of expertise in crafting exceptional user experiences with React.js. Proficient in both frontend and backend, especially Node.js, I bring a versatile skill set to ensure holistic web development. Passionate about using technology to drive positive user interactions, I'm eager to contribute to dynamic projects. Let's create impactful digital experiences together!




          </motion.span>
        </div>

        <div className="mb-[5rem]">
          <motion.h3
            className="text-xl relative w-fit mb-4 mx-auto text-center mt-[8rem]"
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          >
            My Skills
          </motion.h3>
          <motion.ul
            
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
           className="flex p-5 font-mono justify-center items-cent gap-4 flex-wrap text-md fonthsemibold">
                          <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">HTML</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">CSS</p>
    </li>
    <li>
      <img  alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">JAVASCRIPT</p>
    </li>
    <li>
      <img  alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">Figma</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">REACT</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">TYPESCRIPT</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">NEXT JS</p>
    </li>
   
   
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">GIT</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">Tailwind CSS</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">Node js</p>
    </li>
    <li>
      <img src="" alt=""/>
      <p className="text-center py-1 px-2 bg-accent rounded-lg">Firebase</p>
    </li>
          </motion.ul>
        </div>

        <div className="font-robo">
          <motion.h3
            className="text-2xl w-fit relative mx-auto m-8"
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          >
            My Projects
          </motion.h3>
          <motion.ul
            
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          className="grid p-2 md:p-8 grid-cols-1 md:grid-cols-2 gap-8 relative justify-center">
                        <li className="flex shadow-accent/[0.68] flex-col justify-center p-2 shadow-md text-md"><img src={"https://i.ibb.co/sF6dvMt/Web-capture-26-9-2023-151931-culinary-oasis-netlify-app.jpg"} alt="" className="h-[250px] object-cover relative" /><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">CULINARY OASIS</span>
  <span>This an E-commerce website for ordering food uses paystack as mode of payment</span>
 <p className="flex items-center w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">React</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">Tailwind</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">Firebase</span>
 </p>
   <span className="flex justify-between w-full px-3 m-4">
  <a href="https://culinary-oasis.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Preview</button></a>
 <a href="https://github.com/fktona/Little_Lemon_e_commerce_website"> <button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span></div></li>
  
  
  <li className="flex flex-col shadow-accent/[0.68] justify-center p-2 shadow-md text-md"><img src={"https://i.ibb.co/1skNdYX/Web-capture-26-9-2023-151820-hng-movie-app-netlify-app.jpg"} alt="" className="h-[250px] object-cover relative"/><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">MovieBox</span>
  <span>This a movie website for checking upcoming and
     trending movies and also see the trailer all the movie data are gotten from TMBD Api</span>
 <p className="flex items-center w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">React</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">Tailwind CSS</span>
 </p>  <span className="flex justify-between w-full px-3 m-4">
  <a href="https://hng-movie-app.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Preview</button></a>
 <a href="https://github.com/fktona/HngMovieappProject" ><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span>
</div></li>
  
  
  <li className="flex flex-col shadow-accent/[0.68] justify-center p-2 shadow-md text-md"><img src={"https://i.ibb.co/NpZwPgV/Web-capture-26-9-2023-15171-image-hng-galleryapp-netlify-app.jpg"} alt=""  className="h-[250px] object-cover relative"/><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">View Vault</span>
  <span>This an image gallery web app for viewing  difference images and also able to rearrange them  all image data are gotten from pixabay Api </span>
 <p className="flex items-center  w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">React</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">Tailwind CSS</span>
 </p>
  <span className="flex justify-between w-full px-3 m-4">
  <a href="https://image-hng-galleryapp.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Preview</button></a>
 <a href="https://github.com/fktona/ImgGallery" ><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span></div></li>
  
  
  
  <li className="flex flex-col shadow-accent/[0.68] justify-center p-2 shadow-md text-md"><img src={"https://i.ibb.co/sC3T19R/IMG-20230926-160033.jpg"} alt=""  className="h-[250px] object-fill relative"/><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">IKAN FOUNDATION</span>
  <span>This a website design for foundation groups that all them to show there project and achievements </span>
 <p className="flex items-center  w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">HTML</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">CSS</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">JavaScript</span>
 </p>  <span className="flex justify-between w-full px-3 m-4">
  <a href="https://ikangroup.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">peview</button></a>
 <a href="https://github.com/fktona/ikan-foundation" ><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span>
</div></li>
  
  
  <li className="flex flex-col shadow-accent/[0.68] justify-center p-2 shadow-md text-md font-robo"><img src={"https://i.ibb.co/JjgBh0H/Web-capture-26-9-2023-152356-aikclock-netlify-app.jpg"} alt="" className="h-[250px] object-cover relative"/><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">Aik TIMER</span>
  <span>This a web app thst has both timer and stopwatch functionality it also allow user to download there timer results</span>
 <p className="flex items-center w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">Html</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg"> CSS</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg">JavaScript</span>
 </p>  <span className="flex justify-between w-full px-3 m-4">
  <a href="https://aikclock.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Preview</button></a>
 <a href="https://github.com/fktona/clock" ><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span>
</div></li>
  
  
  
  <li className="flex flex-col shadow-accent/[0.68]  justify-center p-2 shadow-md text-md"><img src={"https://i.ibb.co/51MQvtD/Web-capture-26-9-2023-152428-aikcal-netlify-app.jpg"} alt="" className="h-[250px] object-cover relative"/><div className="font-semibold flex flex-col gap-2 p-2 justify-center items-center"><span className="text-2xl p-1 m-2 font-bold border-2 border-accent">Aik Calculator</span>
  <span>This a simple calculator capable of simple mathematical operations </span>
 <p className="flex items-center w-full gap-2 justify-start"> Stack used:
   <span className="text-center py-1 px-2 bg-accent rounded-lg">HTML</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg"> CSS</span>
   <span className="text-center py-1 px-2 bg-accent rounded-lg"> JavaScript</span>
 </p>
  <span className="flex justify-between w-full px-3 m-4">
  <a href="https://aikcal.netlify.app"><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Preview</button></a>
 <a href="https://github.com/fktona/calculator" ><button className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary">Source Code</button></a></span></div></li>
          </motion.ul>
          
        </div>
        
        <motion.div
            className="text-sm leading-2 text-center font-semibold font-popi"
            initial="hidden"
            animate={controls}
            variants={fadeInUpVariants}
          >
          <h4 className="text-2xl font-robo">My Certificate</h4>
          <div className="flex flex-col items-center gap-4"><img src={"https://i.ibb.co/0cj765D/Screenshot-2023-08-14-21-42-16-167-edit-com-google-android-apps-docs.jpg"} alt="" /><span>Meta Frontend Certificate</span>
          <a href="https://www.coursera.org/account/accomplishments/specialization/YVCULFG2F9SG?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n" className="bg-primary w-fit p-2">View</a>
          </div>
        </motion.div>

        <div className="screen">
          <div className="screen-header">
            {/* ... (previous code) */}
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title text-primary">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div className="app-contact">Email: adetona.fk@gmail.com</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    name='name'
                    placeholder="NAME"
                    value={name}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    name='email'
                    placeholder="EMAIL"
                    value={email}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    name='message'
                    placeholder="MESSAGE"
                    value={message}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group buttons flex justify-between mt-5">
                  <button
                    className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary"
                    onClick={handleCancelClick}
                  >
                    CANCEL
                  </button>
                  <button
                    className="app-form-button px-2 py-1 border-2 border-primary hover:bg-primary"
                    onClick={handleSendClick}
                  >
                    SEND
                  </button>
                </div>
                {isFormSubmitted && <div className="text-primary mt-2 ">{state?.message}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;




  