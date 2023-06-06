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
                                    <img key="source" src="https://i.postimg.cc/L6CBNnFY/selectsource.png"/>
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
                                <img key="select-sandbox" src="https://i.postimg.cc/Z56n0MHb/selectsandboxes.png"/>
                                <a href="#carousel__slide1"
                                   className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide3"
                                   className="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide3"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper"></div>
                                <img key="select-destination-sandbox" src="https://i.postimg.cc/yNPNy322/selectdestsandbox.png"/>
                                <a href="#carousel__slide2"
                                   className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide4"
                                   className="carousel__next">Go to next slide</a>
                            </li>
                            <li id="carousel__slide4"
                                tabIndex="0"
                                className="carousel__slide">
                                <div className="carousel__snapper"></div>
                                <img key="copy" src="https://i.postimg.cc/fRy5NYff/sandboxcopy.png"/>
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
                            data or artifacts in sandboxes. Transferring complex artifacts can be
                            time-consuming and error prone for multi-sandbox environments. <u>My team's primary
                                objective was to
                                design and build an app that enables users to easily copy Adobe Experience Platform
                                (AEP)
                                and Adobe Journey Optimizer (AJO) artifacts between sandboxes for seamless
                                deployments.</u><br/><br/>
                            My role was Lead Front End Developer in a team of five.<br/><br/>
                            Technologies: React Spectrum, App Builder (UI template), and SPA Pipeline
                            for deployment to Unified Shell.<br/><br/>
                        </p><br/>
                        <h5>Requirements</h5><br/>
                        <img id="full-width" key="milestones" src="https://i.postimg.cc/G217XR3W/milestones.png"
                                 alt="milestones"/>
                        <br/><br/><br/><br/>
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
                            <div class="col-6">
                                <img class="ux-design-img" key="sketch1" src="https://i.postimg.cc/RFRRGnDt/sketch1.jpg"
                                     alt="sketch"/><br/>
                            </div>
                            <div class="col-6">
                                <img class="ux-design-img" key="sketch3" src="https://i.postimg.cc/prcBMMxX/sketch3.jpg"
                                     alt="sketch"/><br/>
                            </div>
                        </div>
                        <div class="row">
                            <img id="full-width" key="initial" src="https://i.postimg.cc/zGgF6QQ8/initial-design.png"
                                 alt="initial"/><br/><br/>
                        </div>
                        <div class="row">
                            <img id="full-width" key="dep" src="https://i.postimg.cc/FKv3qHcV/dependency.png"
                                 alt="dep"/><br/><br/>
                        </div>
                        <p><br/>Dependency tree<br/></p>
                        <div>
                            <h5><br/>Setbacks</h5><p>After presenting our app to internal teams, we concluded that our initial design lacked
                            scalability and helpful reporting. For large copy operations,
                            users could not review all dependencies at once. Troubleshooting from the audit log was also
                            difficult due to the volume of calls being made. Lastly, adding additional features like
                            sync and revert would crowd the UI.
                        </p><br/>
                        </div>
                        <div>
                        <h5>Redesign</h5>
                            <p>Based on existing design patterns in AEP (left), I drafted a re-design in
                            <a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137"> Figma</a>.</p>
                        <div class="row">
                            <div class="col-6">
                                <img class="ux-design-img" key="aep" src="https://i.postimg.cc/kGVdm98T/Screen-Shot-2023-06-02-at-5-53-33-PM.png" alt="aep"/>
                            </div>
                            <div class="col-6">
                                <img class="ux-design-img" key="figma" src="https://i.postimg.cc/brQfJgCn/Screen-Shot-2023-06-02-at-5-55-12-PM.png" alt="figma"/>
                            </div>
                        </div><br/>
                        <p>Problem #1: Copying all artifact types at once leads to confusion and is difficult to troubleshoot.<br/>
                            Solution: Separate each artifact into its own tab.</p>
                        <div className="row">
                            <img id="full-width" key="improv1" src="https://i.postimg.cc/DzMKKj93/Screen-Shot-2023-06-02-at-11-43-34-PM.png" alt="improv1"/>
                            <br/><br/>
                        </div>
                        <p><br/>Problem #2: Users can only view one dependency tree at a time.<br/>
                            Solution: A dialog window clearly displays each artifact and its dependencies in list form.</p>
                        <div className="row">
                            <img id="full-width" key="improv2" src="https://i.postimg.cc/GmDMpMT1/Screen-Shot-2023-06-02-at-11-57-11-PM.png" alt="improv2"/>
                            <br/><br/>
                        </div>
                        <p><br/>Problem #3: The audit log does not display user-friendly messages for troubleshooting.<br/>
                            Solution: Users can see the progress of each copy under the Job Status column.</p>
                        <div className="row">
                            <img id="full-width" key="improv3" src="https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png" alt="improv3"/><br/>
                            <br/><br/>
                        </div>
                        <p>The biggest improvement to our app was separating the artifacts into their own tabs.
                            This enabled us to easily integrate additional capabilities, such as syncing, reverting, and
                            copying artifacts across IMS organizations.
                        </p><br/>
                        <div className="row">
                            <img id="full-width" key="improv3" src="https://i.postimg.cc/xTNM3Ynn/Screen-Shot-2023-06-05-at-11-06-18-PM.png" alt="improv3"/>
                            <br/><br/>
                        </div>
                        <p>Sync capability</p>
                        <div className="row">
                            <img id="full-width" key="improv3" src="https://i.postimg.cc/HkfWmDyW/Screen-Shot-2023-06-05-at-11-07-24-PM.png" alt="improv3"/>
                            <br/><br/>
                        </div>
                        <p>Revert capability</p>
                        <div className="row">
                            <img id="full-width" key="improv3" src="https://i.postimg.cc/yYdr1qVR/Screen-Shot-2023-06-05-at-10-51-38-PM.png" alt="improv3"/>
                            <br/><br/>
                        </div>
                        <p>Cross IMS organization copy</p><br/>
                        <p>To satisfy the requirement of logging actions for documentation and troubleshooting, we
                            added an Audit Log tab.
                        </p>
                        <div className="row">
                            <img id="full-width" key="auditLog" src="https://i.postimg.cc/1tMBTX4W/Screen-Shot-2023-06-03-at-12-41-29-AM.png" alt="auditLog"/><br/>
                            <br/><br/>
                        </div>
                        </div>
                        <h5><br/>Conclusion</h5>
                           <p><u>Design Takeaways:</u><br/>Throughout this project, I learned to involve
                            the team more in the design iteration process and to communicate clearly with stakeholders
                            to fine-tune requirements. By modularizing my code into reusable components,
                               I was able to build a simpler and user-friendly UI that facilitates faster troubleshooting
                               and reporting.
                               Lastly, by following layouts in AEP to improve our copy workflow, I learned to
                            take inspiration from existing sources and build a proof of concept that could easily be
                            integrated into the Adobe ecosystem.<br/><br/>
                            From the audit log, we've tracked over 100 internal Adobe consultants and solution architects
                            using our app to copy, sync, and revert artifacts. By continuously improving the app based
                            on customer feedback and integrating new customer use cases, we've provided an application
                            that simplifies and streamlines sandbox management in AEP.
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
