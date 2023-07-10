import React ,{useState} from "react";
import '../Course/Course.css';


export default function Course()
{
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    return(
        <div className="body-course">
            <div className="head-page-course">
                <a href="/" className="head-page-home">
                    <p>Home</p> 
                    <p className="btn-head-page"> > </p>
                </a>
                
                <a href="/allcourses" className="head-page-allcour">
                    <p>All courses</p> 
                    <p className="btn-head-page-all"> > </p>
                </a>    
                <a href="/course" className="head-page-cour">
                    <p>Course detail</p> 
                </a>  
            </div>
            <div className="body-page-course">  
                <div className="row body-page-head">
                    <div className="col">
                        <div className="imgpage-html">
                            <img src="./image/Rectangle 7.png" className="img-html-body"></img>
                        </div>

                    </div>
                    <div className="col">
                        <div className="des-cours">
                            <p className="txtdes-cours">Descriptions course</p>
                            <div className="btndes-cours"></div>
                            <p className="txtlearn-des">
                            Vivamus volutpat eros pulvinar velit
                             laoreet, sit amet egestas erat dignissim.
                              Sed quis rutrum tellus, sit amet viverra
                               felis. Cras sagittis sem sit amet urna 
                               feugiat rutrum. Nam nulla ipsum, venenatis 
                               malesuada felis quis, ultricies convallis neque.
                                Pellentesque tristique fringilla tempus. Vivamus bibendum 
                                nibh in dolor pharetra, a euismod nulla dignissim. Aenean 
                                viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu
                                 ante pretium, consectetur leo at, congue quam. Nullam 
                                 hendrerit porta ante vitae tristique.
                            </p>
                        </div>
                    </div>
                </div>   

                <div className="row body-page-head">
                    <div className="col">
                        <div className="coures-learn-devlist">
                            <span
                                onClick={() => handleOptionClick('lessons')}
                                style={{ textDecoration: selectedOption === 'lessons' ? 'underline' : 'none' }}
                            >
                                Lessons
                            </span>

                            <span
                                onClick={() => handleOptionClick('teacher')}
                                style={{ textDecoration: selectedOption === 'teacher' ? 'underline' : 'none' }}
                            >
                                Teacher
                            </span>

                            <span
                                onClick={() => handleOptionClick('reviews')}
                                style={{ textDecoration: selectedOption === 'reviews' ? 'underline' : 'none' }}
                            >
                                Reviews
                            </span>

                            {selectedOption === 'lessons' && (
                                <div>Thẻ div  Lessons</div>
                            )}

                            {selectedOption === 'teacher' && (
                                <div> giao diện cho Teacher</div>
                            )}

                            {selectedOption === 'reviews' && (
                                <div>Thẻ div giao diện cho Reviews</div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="des-cours-gr">
                            <img src="./image/3hs.png"></img>
                            <p className="txt3hs">Learners</p>
                            <p className="txtlearn-cour"> : </p>
                            <p className="solearn-cour">500</p>
                            <div className="btn-courn-solearn"></div>
                            <div className="magin-cours-one">
                                 <img src="./image/bang.png"></img>
                                <p className="txt3hs">Lessons</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">100 lesson</p>
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/dho.png"></img>
                                <p className="txt3hs">Times</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">80 hours</p>
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/key.png"></img>
                                <p className="txt3hs">Learners</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour-code">#learn,#code</p>
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/1do.png"></img>
                                <p className="txt3hs">Learners</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">Free</p>

                            </div>
                        </div>

                        <div className="des-cours-list">
                            <div className="cours-oth">
                                <p className="txtcours-oth">Other Courses</p>
                            </div>
                            <div className="cours-oth-list">
                                <p className="oth-solist">1.</p>
                                <p className="oht-txtlist">
                                    Lorem ipsum dolor sit amet, consectetur the adipiscing elit.
                                </p>
                                <div className="btn-oth-list"></div>
                            </div>
                            <div className="cours-oth-list">
                                <p className="oth-solist">2.</p>
                                <p className="oht-txtlist">
                                    Lorem ipsum dolor sit amet, consectetur the adipiscing elit.
                                </p>
                                <div className="btn-oth-list2"></div>
                            </div>
                            <div className="cours-oth-list">
                                <p className="oth-solist">3.</p>
                                <p className="oht-txtlist">
                                Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <div className="btn-oth-list3"></div>
                            </div>
                            <div className="cours-oth-list">
                                <p className="oth-solist">4.</p>
                                <p className="oht-txtlist">
                                Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <div className="btn-oth-list3"></div>
                            </div>
                            <div className="cours-oth-list">
                                <p className="oth-solist">5.</p>
                                <p className="oht-txtlist">
                                Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <div className="btn-oth-list3"></div>
                            </div>

                            <div className="cours-oth-list">
                                
                                <a  href='/'type='button' className="btn-oth-foot">
                                    <p className="oth-viewtxt">View all ours courses</p>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>   
               
            </div>


               
        </div>
    )
}