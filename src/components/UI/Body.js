export default function Body() {
    return(
        <div className="Body">
                <div className='imgHapoLearn'>
                    <img src='./image/Hapo_Learn_banner 1.png'></img>
        
                    <div class="txtLearn">
                        <p>Learn Anytime, Anywhere </p>
                    </div>
                    <div class="imgAthapo">
                        <p>at HapoLearn <img src='./image/Group 6.png'></img> !</p> 
                    </div>
                    <div class="txtInter">
                        <p> Interactive lessons, "on-the-go"  practice, peer support. </p>
                    </div>
                    <div className="btn-start">
                        <button  type='button' class="btn btn-success">
                            <p>Start Learning Now! </p>
                        </button>
                    </div>

                    <div>
                        <div className='txtFont'></div>
                        {/* <div className='btnMeschat'>
                            <img src='./image/Group 8.png'></img>
                        </div> */}
                    </div>
                    <div className="Chatbox">


                    </div>

                </div> 
                <div className="pt-3">
                <div class="container pt-3 text-center">
                    <div class="row">
                        <div class="col-lg-4 pb-5 border border-light-subtle">
                            <div className="Playitem ">
                                <img src="./image/Rectangle 7.png" className="Playimg " alt="Html" />
                            </div>
                            <div className="Playbody">
                                <p className="Playheading">HTML/CSS/js Tutorial</p>
                                <p className="Playtime">
                                    I knew hardly anything about HTML, JS, and CSS
                                    before entering New Media. I had coded quite a bit,
                                    but never touched anything in regards to web
                                    development.
                                </p>
                                <a href="#" className="Play-buy-btn">Take This Course</a>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-5 border border-light-subtle ">
                            <div className="Playitem">
                                <img src="./image/laravel-1-logo-black-and-white 1.png" className="Playimg" alt="Laravel" />
                            </div>
                            <div className="Playbody">
                                <p className="Playheading">LARAVEL Tutorial</p>
                                <p className="Playtime">
                                    I knew hardly anything about HTML, JS, and CSS
                                    before entering New Media. I had coded quite a bit,
                                    but never touched anything in regards to web
                                    development.
                                </p>
                                <a href="#" className="Play-buy-btn">Take This Course</a>
                            </div>
                        </div>
                        <div class="col-lg-4 pb-5 border border-light-subtle ">
                                <div className="Playitem">
                                    <img src="./image/Rectangle 15.png" className="Playimg" alt="Php" />
                                </div>
                                <div className="Playbody">
                                    <p className="Playheading">PHP Tutorial</p>
                                    <p className="Playtime">
                                        I knew hardly anything about HTML, JS, and CSS
                                        before entering New Media. I had coded quite a bit,
                                        but never touched anything in regards to web
                                        development.
                                    </p>
                                    <a href="#" className="Play-buy-btn">Take This Course</a>
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>

                <div className="Learnlist">
                    <div className="Playlist">
                            
                        </div> 
                        <div className="Playlist">
                            
                        </div>
                        <div className="Playlist">
                            
                        </div>                            

                    </div>
               
                {/* <div>
                    <div className='txtChat'>  
                    <div className='imgCu'><img src='./image/Ellipse 7.png'></img></div>
                    <div className='txtHapo'><p>HapoLearn</p></div>
                    <div className='btnEx'><img src='./image/Exclude.png'></img></div>   
                    <div className='txtLea'>
                        <div className='txtHe'>
                        <p>
                        HapoLearn xin chào bạn. <br></br>
                        Bạn có cần chúng tôi hỗ trợ gì không? 
                        </p>
                        </div>
                    </div>
                    <button className='btnMes'>
                        <div className='imgVec'><img src='./image/Vector.png'></img></div>
                        <div className='txtMes'> <p>Đăng nhập vào Messenger </p></div>
                    </button>
                    <div className='txtChatmes'><p>Chat với HapoLearn trong Messenger</p></div>
                    </div>
                </div> */}
                
                {/* <div>
                    <div className='txtListhtml'>
                        <div className='txtForhtml'>
                        <div className='imgRect'><img src='./image/Rectangle 7.png'></img></div>
                        </div>
                        <div className='txtTuto'><p>HTML/CSS/js Tutorial</p></div>

                        <div className='txtHtml'>
                        <p>
                        I knew hardly anything about HTML, JS, and CSS
                        before entering New Media. I had coded quite a bit,
                        but never touched anything in regards to web
                        development.
                        </p>
                        </div>
                        <button className='btnHtml'>
                            <div className='txtTkhtml'><h2>Take This Course</h2></div>
                        </button>    
                    </div>
                    <div className='txtLava'>
                        <div className='imgLava'>
                        <div className='imgLavafont'>
                            <img src='./image/laravel-1-logo-black-and-white 1.png'></img>           
                        </div>
                        </div>
                        <div className='txtLavatual'><p>LARAVEL Tutorial </p></div>
                        <div className='txtLavadevment'>
                        <p>
                        I knew hardly anything about HTML, JS, and CSS
                        before entering New Media. I had coded quite a bit,
                        but never touched anything in regards to web
                        development.
                        </p>
                        </div>
                        <button className='btnLavatake'>
                            <div className='txtLavatake'><h2>Take This Course</h2> </div> 
                        </button>    
                    </div>
                    <div className='txtPhplist'>
                        <div className='txtPhpfont'>
                        <div className='imgRect'>
                            <img src='./image/Rectangle 15.png'></img>
                        </div>
                        </div>
                        <div className='txtPhptual'><p>PHP Tutorial</p></div>
                        <div className='txtPhpdevent'>
                        <p>
                        I knew hardly anything about HTML, JS, and CSS
                        before entering New Media. I had coded quite a bit,
                        but never touched anything in regards to web
                        development.
                        </p>
                        </div>
                        <button className='btnPhptake'>
                            <div className='txtPhptake'> <h2>Take This Course</h2> </div>
                        </button>
                    </div>
                </div> */}
                {/* <div>
                    <div className='txtOther' ><p>Other courses</p></div>  
                    <div className='btnOther'></div>
                </div>
                <div>
                    <div className='txtCsslist'>
                        <div className='txtFontcss'>
                        <div className='imgCss'><img src='./image/CSS.png'></img></div>
                        </div>
                        <div className='txtCsstual'><p>CSS Tutorial</p></div>
                        <div className='txtCssdev'>
                        <p>
                        I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                        </p>
                        </div>
                        <button className='btnCsstake'>
                            <div className='txtCsstake'><h2>Take This Course</h2></div>    
                        </button>    
                    </div>
                    <div className='txtRubylist'>
                        <div className='txtRubyfont'>
                        <div className='imgRuby'><img src='./image/Group.png'></img> </div>
                        </div>
                        <div className='txtRubytual'><p>Ruby on rails Tutorial</p></div>
                        <div className='txtRubydev'>
                        <p>
                        I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                        </p>
                        </div>
                        <button className='btnRuby'><div className='txtRubytake'><h2>Take This Course </h2></div></button> 
                    </div>
                    <div className='txtJavalist'>
                        <div className='txtJavafont'>
                        <div className='imgJava'>
                            <img src='./image/java 1.png'></img>
                        </div>
                        </div>
                        <div className='txtJavatual'><p>Java Tutorial</p> </div>
                        <div className='txtJavadev'>
                        <p>
                            I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                        </p>
                        </div>
                        <button className='btnJava'><div className='txtJavatake'><h2>Take This Course</h2></div></button> 
                    </div>
                </div>  
                <div>
                    <div className='txtView'><p>View All Our Courses</p></div>
                    <div className='bntMten'><img src='./image/muiten.png'></img></div>
                </div>
                <div>
                    <div className='txtFontlap'><img src='./image/Rectangle 17.png'></img></div>
                    <div className='txtLaptop'><img src='./image/transparent-1911160_1280.png'></img> </div>
                    <div className='txtWhy'><p>Why HapoLearn?</p></div>  
                    <div className='imgOne'> <img src='./image/tich.png'></img> </div>
                    <div className='txtOne'><p> Interactive lessons, "on-the-go" practice, peer support.</p> </div>
                    <div className='imgTwo'>  <img src='./image/tich.png'></img></div>
                    <div className='txtTwo'> <p>Interactive lessons, "on-the-go" practice, peer support.  </p></div>
                    <div className='imgThree'>  <img src='./image/tich.png'></img></div>
                    <div className='txtThree'><p>Interactive lessons, "on-the-go" practice, peer support.</p></div>
                    <div className='imgFour'><img src='./image/tich.png'></img></div>
                    <div className='txtFour'><p> Interactive lessons, "on-the-go" practice, peer support.</p></div>
                    <div className='imgFive'><img src='./image/tich.png'></img></div>
                    <div className='txtFive'><p>Interactive lessons, "on-the-go" practice, peer support.</p></div> 
                </div>
                <div>
                    <div className='txtFeedback'><p>Feedback</p></div>
                    <div className='btnFeed'></div>
                    <div className='txtFeed'>
                    <p>
                    What other students turned professionals have to say about us
                    after learning with us and reaching their goals
                    </p>
                    </div>
                </div>
                <div>
                    <div className='imgFontchatOne'>
                    <img src='./image/Union.png'></img>
                    <div className='txtChatone'>
                        <p>
                        “A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.”
                        </p>
                    </div>
                    </div>
                    <div className='btnOnelist'></div>
                    <div className='imgOnebut'> <img src='./image/Group 11.png'></img></div>
                    <div className='imgFontchattwo'>
                    <img src='./image/Union.png'></img>
                    <div className='txtChattwo'>
                        <p>
                        “A wonderful course on how to start. Eddie beautifully conveys all essentials of
                        a becoming a good Angular developer. Very glad to have taken this course.
                        Thank you Eddie Bryan.”
                        </p>
                    </div>
                    </div>
                    <div className='btnTwolist'></div>
                    <div className='imgTwobut'><img src='./image/Group 10.png'></img></div>
                </div>
                
                <div>
                    <div className='imgFontOne'><img src='./image/Ellipse 1.png'></img></div>
                    <div className='txtOnedev'><p>Hoang Anh Nguyen</p></div>
                    <div className='txtOnephp'><p>PHP</p></div>
                    <div className='imgOneStartone'><img src='./image/sao-1.png'></img></div>
                    <div className='imgOneStartwo'><img src='./image/sao-1.png'></img></div>
                    <div className='imgOneStarthree'><img src='./image/sao-1.png'></img></div>
                    <div className='imgOneStartfour'><img src='./image/sao-1.png'></img></div>
                    <div className='imgOneStartfive'><img src='./image/sao.png'></img></div>

                    <div className='imgFonttwo'><img src='./image/Ellipse 1.png'></img></div>
                    <div className='txtTwodev'><p>Tuan Tran Hoang</p></div>
                    <div className='txtTwopython'><p>Python</p></div>
                    <div className='imgTwoStartone'><img src='./image/sao-1.png'></img></div>
                    <div className='imgTwoStarttwo'><img src='./image/sao-1.png'></img></div>
                    <div className='imgTwoStartthree'><img src='./image/sao-1.png'></img></div>
                    <div className='imgTwoStartfour'><img src='./image/sao-1.png'></img></div>
                    <div className='imgTwoStartfive'><img src='./image/-5.png'></img></div>
                    <div className='imgTwoStartsix'><img src='./image/sao.png'></img></div>
                </div>
                <div>
                    <div className='imgBecome'>
                    <img src='./image/Group 7.png'></img>
                    <div className='txtBecome'><p> Become a member of our growing community! </p></div>
                    </div>  
                    <button className='btnBecome'>
                        <div className='txtStart'>Start Learning Now!</div>
                    </button>
                </div>
                <div>
                    <div className='txtStat'><p>Statistic</p></div>
                    <div className='btnStat'></div>
                    <div className='txtCour'><p>Courses</p></div>
                    <div className='txtLess'><p>Lessons</p></div>
                    <div className='txLearn'><p>Learners</p></div>
                    <div className='txtListCour'><p>1,586</p></div>
                    <div className='txtListless'><p>2,689</p></div>
                    <div className='txtListlearn'><p>16,882</p></div>
                </div>*/}

            </div> 
    );
}