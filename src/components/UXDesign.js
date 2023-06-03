import React, {Component, useState} from 'react';
import Contact from './Contact';

import Footer from './Footer';
// import {Flex} from "@adobe/react-spectrum";

const UXDesign = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function onSelectedIndexChange(newIndex) {
        setSelectedIndex(Math.round(newIndex));
    }

        return (
            <div>
                <div className="content-container portfolio">
                    <h4 key="AEP-Copy-App">Adobe Experience Platform<br/>Artifact Copy App</h4><br></br>
                    <section className="carousel" aria-label="Gallery">
                        <ol className="carousel__viewport">
                            <li id="carousel__slide1"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper">
                                    <img key="overview" src="https://i.postimg.cc/JzzWQbYN/overview.png"/>
                                    <a href="#carousel__slide4"
                                       className="carousel__prev">Go to last slide</a>
                                    <a href="#carousel__slide2"
                                       className="carousel__next">Go to next slide</a>
                                </div>
                            </li>
                            <li id="carousel__slide2"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper"></div>
                                <a href="#carousel__slide1"
                                   className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide3"
                                   className="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide3"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper"></div>
                                <a href="#carousel__slide2"
                                   className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide4"
                                   className="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide4"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper"></div>
                                <a href="#carousel__slide3"
                                   className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide1"
                                   className="carousel__next">Go to first slide</a>
                            </li>
                        </ol>
                        <aside className="carousel__navigation">
                            <ol className="carousel__navigation-list">
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide1"
                                       className="carousel__navigation-button">Go to slide 1</a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide2"
                                       className="carousel__navigation-button">Go to slide 2</a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide3"
                                       className="carousel__navigation-button">Go to slide 3</a>
                                </li>
                                <li className="carousel__navigation-item">
                                    <a href="#carousel__slide4"
                                       className="carousel__navigation-button">Go to slide 4</a>
                                </li>
                            </ol>
                        </aside>
                    </section>
                    <div className="row">
                        <h5><br/>Background</h5><br/>
                        <p>Adobe Experience Platform allows customers to store, manage, and monitor configurations of
                            data or <b>artifacts</b> in sandboxes. Transferring complex artifacts can be
                            time-consuming and error prone for multi-sandbox environments. <u>My team's primary
                                objective was to
                                design and build an app that enables users to easily copy Adobe Experience Platform
                                (AEP)
                                and Adobe Journey Optimizer (AJO) artifacts between sandboxes for seamless
                                deployments.</u><br/><br/>
                            <b>My role was Lead Front End Developer in a team of five.</b><br/><br/>
                            Technologies: React Spectrum, App Builder (UI template), and SPA Pipeline
                            for deployment to Unified Shell.<br/><br/>
                        </p><br/>
                        <h5>Requirements</h5><br/>
                        <img id="full-width" key="milestones" src="https://i.postimg.cc/G217XR3W/milestones.png"
                             alt="milestones"/><br/><br/><br/>
                        <p>The app needed to accomplish the following:</p><br/><br/>
                        <p id="list">
                            • Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                            first level dependencies<br/>
                            • Review dependencies before initiating copy<br/>
                            • Sync artifacts between the source and destination sandboxes<br/>
                            • Revert artifacts (once) after syncing<br/>
                            • Log actions for documentation and troubleshooting
                        </p><br/><br/>
                        <h5><br/>Initial Design</h5>
                        <p>The first design consisted of two pages: the copy page and confirmation page.<br/><br/>
                        On the copy page, the user can select the source and destination sandboxes from the
                            left and artifacts on the right. Upon selecting an artifact the user can view its
                            dependency tree below.<br/>
                            On the confirmation page, the user can view all successes and failures in the audit log and
                            artifacts in the destination sandbox.<br/>
                        </p>
                        <div class="row">
                            <div class="col-xs-6">
                                <img id="half-width" key="sketch1" src="https://i.postimg.cc/RFRRGnDt/sketch1.jpg" alt="sketch"/><br/><br/>
                            </div>
                            <div className="col-xs-6">
                                <img id="half-width" key="sketch3" src="https://i.postimg.cc/prcBMMxX/sketch3.jpg" alt="sketch"/><br/><br/>
                            </div>
                        </div>
                        <img id="full-width" key="initial" src="https://i.postimg.cc/zGgF6QQ8/initial-design.png"
                             alt="initial"/><br/>
                        <img id="full-width" key="dep" src="https://i.postimg.cc/FKv3qHcV/dependency.png"
                             alt="dep"/><br/>
                        <p><br/>Dependency tree</p>
                        <p><h5><br/>Setbacks</h5>After several internal demos and testing sessions, we concluded that our initial design lacked
                            scalability and helpful reporting. For large copy operations,
                            users could not review all dependencies at once. Troubleshooting from the audit log was also
                            difficult due to the volume of calls being made. Lastly, adding additional features like
                            sync and revert would crowd the UI.
                        </p><br/>
                        <h5><br/>Redesign</h5><br/>
                            <p>Based on existing design patterns in AEP (left), I drafted a re-design in
                            <a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137"> Figma</a>.</p><br/>
                        <div className="row">
                            <div className="col-xs-6">
                                <img id="half-width" key="aep" src="https://i.postimg.cc/kGVdm98T/Screen-Shot-2023-06-02-at-5-53-33-PM.png" alt="aep"/>
                            </div>
                            <div className="col-xs-6">
                                <img id="half-width" key="figma" src="https://i.postimg.cc/brQfJgCn/Screen-Shot-2023-06-02-at-5-55-12-PM.png" alt="figma"/>
                            </div>
                        </div><br/>
                        <p>Problem #1: Copying all artifact types at once leads to confusion and is difficult to troubleshoot.<br/>
                            Solution: Separate each artifact into its own tab.</p>
                        <img id="full-width" key="improv1" src="https://i.postimg.cc/DzMKKj93/Screen-Shot-2023-06-02-at-11-43-34-PM.png" alt="improv1"/>
                        <p><br/>Problem #2: Users can only view one dependency tree at a time.<br/>
                            Solution: A dialog window clearly displays each artifact and its dependencies in list form.</p>
                        <img id="full-width" key="improv2" src="https://i.postimg.cc/GmDMpMT1/Screen-Shot-2023-06-02-at-11-57-11-PM.png" alt="improv2"/>
                        <p><br/>Problem #3: The audit log does not display user-friendly messages for troubleshooting.<br/>
                            Solution: Users can see the progress of each copy under the Job Status column.</p>
                        <img id="full-width" key="improv3" src="https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png" alt="improv3"/><br/>
                        <p>The biggest improvement to our app was separating the artifacts into their own tabs.
                            This enabled us to easily integrate additional capabilities, such as syncing, reverting, and
                            copying artifacts across IMS organizations.
                        </p><br/>
                        <img id="full-width" key="improv3" src="https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png" alt="improv3"/>
                        <p>Sync capability</p>
                        <img id="full-width" key="improv3" src="https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png" alt="improv3"/>
                        <p>Revert capability</p>
                        <img id="full-width" key="improv3" src="https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png" alt="improv3"/>
                        <p>Cross IMS organization copy</p><br/>
                        <p>To satisfy the requirement of logging actions for documentation and troubleshooting, we also
                            added an Audit Log tab.
                        </p>
                        <img id="full-width" key="auditLog" src="https://i.postimg.cc/1tMBTX4W/Screen-Shot-2023-06-03-at-12-41-29-AM.png" alt="auditLog"/><br/>

                        <p><h5><br/>Conclusion</h5>
                            <u>Design Takeaways:</u><br/> In the process of re-designing the app, I learned the importance of
                            involving the team throughout the design iteration process and communicating clearly with stakeholders
                            to fine-tune requirements. Through modularizing the copy workflows, I also improved
                            my organization skills in design and code. Lastly, by following layouts in AEP, particularly
                            the dialog window before copy, I learned to
                            take inspiration from existing sources and build a proof of concept that could easily be
                            integrated into the Adobe ecosystem.<br/><br/>
                            From the audit log, we've tracked over 100 internal Adobe consultants and solution architects
                            using our app to copy, sync, and revert artifacts. By continuously improving the app based
                            on customer feedback and integrating new customer use cases, we've provided an application
                            that simplifies and streamlines sandbox management in Adobe Experience Platform.
                            </p>
                        <br></br><br></br>
                    </div>
                    <br></br><br></br>
                    <p>• • • • • • •</p>
                </div>
            </div>
        )

}

export default UXDesign;
