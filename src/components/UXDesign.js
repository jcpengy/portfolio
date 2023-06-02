import React, { Component } from 'react';
import Contact from './Contact';

import Footer from './Footer';
import {Flex} from "@adobe/react-spectrum";

class UXDesign extends Component {
    render() {
        return (
            <div>
                <div className="content-container portfolio">
                    <h4 key="AEP-Copy-App">Adobe Experience Platform<br/>Artifact Copy App</h4><br></br>
                    <img id="full-width" key="overview" src="/project_images/AEPArtifactCopyApp/overview.png" alt="overview"/><br/><br/>
                    <div className="row">
                        <h5>Background</h5><br/>
                        <p>Adobe Experience Platform allows customers to store, manage, and monitor configurations of
                            data or <b>artifacts</b> in sandboxes. Transferring complex artifacts can be
                            time-consuming and error prone for multi-sandbox environments. <u>My team's primary objective was to
                            design and build an app that enables users to easily copy Adobe Experience Platform (AEP)
                                and Adobe Journey Optimizer (AJO) artifacts between sandboxes for seamless deployments.</u><br/><br/>
                            <b>My role was Lead Front End Developer in a team of five.</b><br/><br/>
                            Technologies: React Spectrum, App Builder (UI template), and SPA Pipeline
                            for deployment to Unified Shell.<br/><br/>
                        </p><br/>
                        <h5>Requirements</h5><br/>
                        <img id="full-width" key="milestones" src="/project_images/AEPArtifactCopyApp/milestones.png" alt="milestones"/><br/><br/><br/>
                        <p>The app needed to accomplish the following:</p><br/>
                        <Flex direction="row">
                            <Flex direction="column" width="50%">
                                <p id="list">
                                    • Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                                    first level dependencies<br/>
                                    • Review dependencies before initiating copy<br/>
                                </p>
                            </Flex>
                            <Flex direction="column" width="50%">
                                <p id="list">
                                    • Sync artifacts between the source and destination sandboxes<br/>
                                    • Revert artifacts (once) after syncing<br/>
                                    • Log actions for documentation and troubleshooting
                                </p>
                            </Flex>
                        </Flex>
                        <h5>Initial Design</h5><br/>
                        <Flex direction="row">
                            <Flex direction="column">
                                <img id="half-width" key="sketch1" src="/project_images/AEPArtifactCopyApp/sketch1.jpg" alt="sketch"/><br/><br/><br/>
                            </Flex>
                            {/*<Flex direction="column">*/}
                            {/*    <img id="half-width" key="sketch2" src="/project_images/AEPArtifactCopyApp/sketch2.jpg" alt="sketch"/><br/><br/><br/>*/}
                            {/*</Flex>*/}
                            <Flex direction="column">
                                <img id="half-width" key="sketch3" src="/project_images/AEPArtifactCopyApp/sketch3.jpg" alt="sketch"/><br/><br/><br/>
                            </Flex>
                        </Flex>
                        <p>The first design consisted of two pages: the copy page and confirmation page.<br/>
                            On the copy page, the user can select the source and destination sandbox and artifacts to
                            display from the left panel. All artifacts are listed on the right.</p><br/>
                        <img id="full-width" key="initial" src="/project_images/AEPArtifactCopyApp/initial-design.png" alt="initial"/><br/><br/><br/>
                        <img id="full-width" key="dep" src="/project_images/AEPArtifactCopyApp/dependency.png" alt="dep"/><br/><br/><br/>
                        <p>When the user selects an
                            artifact, the dependency graph updates below. Once the user confirms all artifacts to be
                            copied, an audit log shows the progress of backend calls in real time.<br/>
                            The user is then directed to the confirmation page, which lists all successes and failures
                            and artifacts in the destination sandbox.</p><br/>
                        <h5>Setbacks</h5><br/>
                        <p>Our main issues were troubleshooting and scalability. Users who want to copy multiple
                            artifacts cannot view all dependencies at once. Backend calls for artifact types often
                            overlapped, so troubleshooting from the audit log was difficult. Additional features like
                            syncing and reverting would also be tough to integrate in this UI.
                        </p><br/>
                        <h5>Redesign</h5><br/>
                        <p>The primary focus of the redesign was to separate artifact types into their own copy workflows.<br/>
                            <br/>I followed existing design patterns found throughout Experience Platform.</p><br/>
                        <Flex direction="row">
                            <Flex direction="column">
                                <img id="half-width" key="aep" src="/project_images/AEPArtifactCopyApp/sketch1.jpg" alt="aep"/><br/><br/><br/>
                            </Flex>
                            <Flex direction="column">
                                <img id="half-width" key="figma" src="/project_images/AEPArtifactCopyApp/sketch3.jpg" alt="figma"/><br/><br/><br/>
                            </Flex>
                        </Flex>
                            <a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Link to redesign in Figma</a><br/><br/>
                            <p>Instead of copying all artifact types at once, the user can now select an artifact from the
                            left panel. The following steps then apply to all artifacts to copy:
                            <ul>
                                <li>Choose a source sandbox</li>
                                <li>Select up to ten artifacts from the list</li>
                                <li>Hit Copy. Instead of directly starting the copy process, a dialog window will appear
                                    for the user to select the destination sandbox and verify dependencies.</li>
                                <li>After the user hits Copy, the job status of each artifact and its dependencies will
                                    update in real-time to indicate a success or otherwise.</li>
                            </ul>
                            Scalability<br/>
                            For additional artifact types, we simply create a new tab that follows the template logic of
                            the other tabs. The redesign also allowed us to easily integrate additional features such as
                            sync, revert, and cross IMS organization copy.
                        </p><br/>
                        <h5>Conclusion</h5><br/>
                        <p>From the audit log, we've tracked over 100 internal Adobe consultants and solution architects
                            using our app to copy, sync, and revert artifacts. Through continuous iteration and
                            improvement based on customer feedback, we were able to design and build an application that
                            simplifies and streamlines sandbox management in Adobe Experience Platform.</p>
                        <br></br><br></br>
                    </div>
                    <br></br><br></br>
                    <p>• • • • • • •</p>
                </div>
            </div>
        )
    }
}

export default UXDesign;
