import React, { useState } from 'react';
import '../mycomponents/index'
import './Global.css'
import { FaAngleDown } from "react-icons/fa";
import { SiSocialblade } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { MdCampaign } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { FaPersonBooth } from "react-icons/fa";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";   

function Indexpage() {

    const [services, showServices] = useState(false);
    return (
        <>
            {/* Nav bar */}
            <nav className='navBar'>
                <span className='logo'>
                </span>
                <ul className='list'>
                    <li className='listOptions'>Home</li>
                    <li className='listOptions'>About</li>
                    <li className='listOptions' id='services' onClick={() => { showServices(!services) }}>Services{<FaAngleDown size={20} color='#fafafa' />}</li>
                    <li className='listOptions'>Blog</li>
                    <li className='listOptions'>Team</li>
                    <li className='listOptions'>Contact Us</li>
                </ul>
            </nav>
            {/* Nav Bar services Options */}
            {services ? (<>
                <div className="navBarServices">
                    <ul className='servicesListColumn1'>
                        <li className='listOptionsNavServices'>Social media Campaigning</li>
                        <li className='listOptionsNavServices'>Opinion Poll Survery</li>
                        <li className='listOptionsNavServices'>Advertisments</li>
                        <li className='listOptionsNavServices'>Report Analysis</li>
                        <li className='listOptionsNavServices'>Media Campaign</li>
                        <li className='listOptionsNavServices'>Social Media Handling</li>
                        <li className='listOptionsNavServices'>Bulk Messaging</li>
                        <li className='listOptionsNavServices'>Routine Management</li>
                        <li className='listOptionsNavServices'>Polling Booth Management</li>
                        <li className='listOptionsNavServices'>Real Time Media Updations</li>
                    </ul>

                </div>
            </>) : (<>
            </>)}

            <div className="bodyFirstContainer">
                <h1 className='campaignSlogan'>
                    Campaigning for a Better Today and Tommorow
                </h1>
                <p className='campaignPara'>
                    "Campaigning for a Better Today and Tomorrow" embodies our unwavering commitment to creating positive change and shaping a brighter future for all. With a steadfast dedication to progress, our campaigns span diverse fields, addressing pressing issues from healthcare accessibility to environmental sustainability and beyond. Through advocacy, education, and community engagement, we strive to empower individuals and communities to take action, fostering a collective movement towards a more equitable and prosperous world. From grassroots initiatives to national campaigns, we work tirelessly to amplify voices, drive policy reform, and inspire meaningful impact. Together, we envision a tomorrow built on compassion, equality, and opportunity, where every voice is heard and every person thrives.
                </p>
                <button className='contactUs'>
                    Contact Us
                </button>
            </div>
            <div className="bodySecondContainer">
                <div className="imageSection">
                    <div className="imageContainer">

                    </div>
                </div>
                <div className="aboutUsSection">
                    <h1 className='aboutUs'>About Us</h1>
                    <p className='aboutUsContent'>
                        E-Strategy is a budding company that has recently emerged onto the digital landscape with a fresh perspective and a dynamic vision. Established just a few days back, our journey began with the aspiration to redefine the way businesses approach their online presence and digital marketing strategies. Despite being in the nascent stage of our existence, we are fueled by a profound commitment to innovation, excellence, and client satisfaction.
                        At E-Strategy, we understand that in today's fast-paced digital world, having a robust online presence is essential for businesses to thrive and succeed. Our primary goal is to assist companies in navigating the intricacies of the digital realm and harnessing its vast potential to achieve their business objectives. Whether it's enhancing brand visibility, driving website traffic, or increasing customer engagement, we provide comprehensive solutions tailored to meet the unique needs of each client.

                    </p>
                    <div className="socialIconsContainer">
                        <h3 className='follow'>Follow Us On</h3>
                        <div className='socialIconStyle'>
                            <span className='socialIcons'>
                                {<FaFacebook size={50} cl />}
                            </span>
                            <span className='socialIcons'>
                                {<FaInstagramSquare size={50} cl />}
                            </span>
                            <span className='socialIcons'>
                                {<FaSquareXTwitter size={50} cl />}
                            </span>
                            <span className='socialIcons'>
                                {<FaYoutube size={50} cl />}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bodyThirdContainer">
                <h3 className='services' >
                    Our Services
                </h3>
                <div className="servicesContainer">
                    <div className="item">
                        <div className='serviceIcons'>{<SiSocialblade size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Social Media Political Campaigning
                        </div>
                        <div className="serviceContent">
                        E-Strategy spearheads political campaigns on social media with precision and impact. We leverage targeted ads, engaging content, and strategic messaging to amplify political messages. Our data-driven approach ensures maximum reach and influence, shaping public opinion and driving political discourse in the digital arena.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<IoPeople size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Opinion Poll Survey
                        </div>
                        <div className="serviceContent">
                        E-Strategy conducts opinion poll surveys with meticulous attention to detail. Through comprehensive research methodologies and advanced analytics, we gather insights that shape public opinion and influence decision-making. Our surveys provide valuable data to political campaigns, businesses, and organizations, empowering them to make informed choices and engage effectively with their audience.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<RiAdvertisementLine size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Advertisement
                        </div>
                        <div className="serviceContent">
                        E-Strategy crafts captivating advertisements that captivate audiences across digital platforms. With creative storytelling, compelling visuals, and targeted messaging, we drive engagement and conversions. Our data-driven approach ensures precise ad placement and optimization, maximizing ROI for businesses and organizations seeking to expand their reach and impact.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<TbReportAnalytics size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Report Analysis
                        </div>
                        <div className="serviceContent">
                        E-Strategy develops compelling service content that resonates with target audiences. Through strategic storytelling, informative articles, and engaging multimedia, we communicate the value and benefits of products and services effectively. Our content strategies drive engagement, build brand authority, and ultimately, convert prospects into loyal customers, maximizing business success.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<MdCampaign size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Media Campaign
                        </div>
                        <div className="serviceContent">
                        E-Strategy orchestrates dynamic media campaigns that amplify brand messaging across diverse channels. Through strategic planning, creative content creation, and precise targeting, we maximize visibility and engagement. Our data-driven approach ensures optimal performance, delivering measurable results and driving brand awareness, loyalty, and conversions in the digital landscape.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<MdOutlineManageAccounts size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Social Media Handling
                        </div>
                        <div className="serviceContent">
                        E-Strategy excels in managing social media for dynamic media campaigns. With strategic planning, engaging content creation, and proactive community management, we foster meaningful interactions and drive brand advocacy. Our expertise in social media analytics ensures optimized performance, allowing us to adapt and maximize engagement for impactful campaign results.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<LuMessagesSquare size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Bulk Messaging
                        </div>
                        <div className="serviceContent">
                        E-Strategy facilitates bulk messaging campaigns with precision and efficiency. Leveraging advanced technologies and strategic targeting, we deliver personalized messages to large audiences. Our platform ensures compliance with regulations and provides detailed analytics to track campaign performance, enabling businesses to reach and engage their target demographics effectively.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<MdManageHistory size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Routine Management
                        </div>
                        <div className="serviceContent">
                        Routine management is crucial for organizational efficiency and productivity. E-Strategy streamlines daily operations through effective planning, scheduling, and delegation of tasks. Our robust systems ensure seamless coordination and communication, optimizing workflow and resource allocation. With automated processes and proactive monitoring, we empower businesses to achieve their goals and drive continuous improvement.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<FaPersonBooth size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Polling Booth Management
                        </div>
                        <div className="serviceContent">
                        E-Strategy specializes in efficient polling booth management for elections and surveys. From setup and logistics to staffing and security, we ensure smooth operations on voting day. Our comprehensive approach includes voter registration, crowd control, and real-time monitoring, ensuring a seamless and secure voting experience for all participants.
                        </div>
                    </div>
                    <div className="item">
                        <div className='serviceIcons'>{<MdOutlineSecurityUpdateGood size={60} color='#000' />}</div>
                        <div className="serviceTopic">
                            Real Time Media Updations
                        </div>
                        <div className="serviceContent">
                        E-Strategy offers real-time media updates to keep audiences informed and engaged. Through rapid content creation and distribution, we provide up-to-the-minute news, updates, and announcements across digital platforms. Our agile approach ensures timely responses to emerging events, enhancing brand credibility and relevance in the fast-paced media landscape.
                        </div>
                    </div>

                </div>

            </div>
            <div className="bodyFourthContainer">
                <div className="leftCircleOuter">
                    <div className="formContainer">
                        <div className="formContainerLeft">
                            <h3 className='formHeading'>Let's Get in Touch</h3>
                            <p className='details'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dignissimos suscipit, adipisci repellat sed molestiae ratione! Dignissimos doloribus facere fugit sunt numquam ducimus soluta ratione.</p>
                            <div className="address">
                                <div className="adressLines"><span className='addressIcon'>{<FaLocationDot size={20} color='#1cd4af' />} </span><span className='adressAbout'>Block C, Street4, Delhi-110044</span></div>
                                <div className="adressLines"><span className='addressIcon'>{<MdEmail size={20} color='#1cd4af' />} </span><span className='adressAbout'>Estrategy24@gmail.com</span></div>
                                <div className="adressLines"><span className='addressIcon'>{<FaPhone size={20} color='#1cd4af' />} </span><span className='adressAbout'>8512036756</span></div>
                            </div>
                            <div className="socialIconsContainerForm">
                                <h3 className='follow'>Follow Us On</h3>
                                <div className='socialIconStyle'>
                                    <span className='socialIcons'>
                                        {<FaFacebook size={30} cl />}
                                    </span>
                                    <span className='socialIcons'>
                                        {<FaInstagramSquare size={30} cl />}
                                    </span>
                                    <span className='socialIcons'>
                                        {<FaSquareXTwitter size={30} cl />}
                                    </span>
                                    <span className='socialIcons'>
                                        {<FaYoutube size={30} cl />}
                                    </span>
                                </div>
                            </div>


                        </div>
                        <div className="formContainerRight">
                            <span className='circle One'>

                            </span>
                            <span className='circle Two'>

                            </span>
                            <h3 className='contactUsFormHeading'>Contact Us</h3>
                            <form action="" autocomplete="off">
                                <div class="input-container">
                                    <input type="text" name="name" class="input" placeholder='Username' />
                                </div>
                                <div class="input-container">
                                    <input type="email" name="email" class="input" placeholder='Email' />
                                </div>
                                <div class="input-container">
                                    <input type="number" name="phone" class="input" placeholder='Phone Number' />
                                </div>
                                <div class="input-container textarea">
                                    <textarea name="message" class="input" placeholder='Message'></textarea>
                                </div>
                                <input type="submit" value="Send" class="btn" />
                            </form>

                        </div>

                    </div>
                </div>

            </div>
            <div className="bodyFifthContainer">
                <h3 className='ourWork'>Our Work</h3>

                <div className="workContainer">
                    <div className="workContainerLayout1">
                        <div className="leaderimg1">

                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>

                        </div>
                    </div>
                    <div className="workContainerLayout2">
                        <div className="leaderimg2">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                    <div className="workContainerLayout1">
                        <div className="leaderimg3">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                    <div className="workContainerLayout2">
                        <div className="leaderimg4">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                    <div className="workContainerLayout2">
                        <div className="leaderimg1">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                    <div className="workContainerLayout2">
                        <div className="leaderimg2">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                    <div className="workContainerLayout2">
                        <div className="leaderimg3">
                        </div>
                        <div className="imgContent">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed recusandae consequatur aliquam sit quas tempore non neque excepturi. Itaque at aspernatur saepe harum omnis?</p>
                        </div>
                    </div>
                </div>
                <button className='viewMorePhoto'>View More</button>
            </div>
            <div className="bodySixthContainer">
                <footer>
                    <div className="socialIconsContainerForm">
                        <h3 className='followFooter'>Follow Us On</h3>
                        <div className='socialIconStyle'>
                            <span className='socialIcons'>
                                {<FaFacebook size={30} color='#fafafa' />}
                            </span>
                            <span className='socialIcons'>
                                {<FaInstagramSquare size={30} color='#fafafa' />}
                            </span>
                            <span className='socialIcons'>
                                {<FaSquareXTwitter size={30} color='#fafafa' />}
                            </span>
                            <span className='socialIcons'>
                                {<FaYoutube size={30} color='#fafafa' />}
                            </span>
                        </div>
                    </div>
                    <div className="copyright">
                        <h1 className='copyrightFont'>© Copyright 2022 @ E-Strategy Consultation</h1>
                    </div>

                </footer>
            </div>
        </>

    );
};
export default Indexpage;