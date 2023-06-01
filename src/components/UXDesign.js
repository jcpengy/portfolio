import React, { Component } from 'react';
import Contact from './Contact';

import Footer from './Footer';

class UXDesign extends Component {
    render() {
        return (
            <div>
                <div className="content-container portfolio">
                    <h4 key="AEP-Copy-App">Adobe Experience Platform Artifact Copy App</h4><br></br>
                    <div className="row">
                        <h4>The Story</h4><br/>
                        <p>The team and I were challenged to think, design, and build an internal app to easily move
                            Adobe Experience Platform (AEP) and Adobe Journey Optimizer (AJO) artifacts between sandboxes.<br/>
                            Adobe Experience Platform allows customers to store, manage, and monitor configurations of
                            data referred to as <b>artifacts</b> in sandboxes. Transferring complex artifacts can be
                            time-consuming and error prone for multi-sandbox environments. Our primary objective was to
                            create a simple UI to copy artifacts for faster sandbox set up and deployments between
                            environments.<br/>
                            <b>My role was Lead Front End Developer in a team of five.</b><br/>
                            The app was developed using React Spectrum, App Builder (UI template), and SPA Pipeline
                            for deployment to Unified Shell.<br/>
                        </p><br/>
                        <h4>Design Process</h4><br/>
                        <p>We worked with solution architects and consultants to outline the list of requirements for the app below:</p><br/>
                        <ul>
                            <li>Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                                first level dependencies </li>
                            <li>Sync - compare artifacts between the source and destination sandbox, allow user to sync
                                the destination artifact </li>
                            <li>Rollback - allow user to revert any changes made after sync </li>
                            <li>Audit Logs - log all actions in the app for documentation and troubleshooting</li>
                        </ul>
                        <h5>Initial Design</h5><br/>
                        <p>The first design consisted of two pages: the copy page and confirmation page.<br/>
                            On the copy page, the user can select the source and destination sandbox and artifacts to
                            display from the left panel. All artifacts are listed on the right. When the user selects an
                            artifact, the dependency graph updates below. Once the user confirms all artifacts to be
                            copied, an audit log shows the progress of backend calls in real time.<br/>
                            The user is then directed to the confirmation page, which lists all successes and failures
                            and artifacts in the destination sandbox.<br/>
                            Setbacks<br/>
                            After we demoed the app to internal consultants and solution architects, we narrowed down
                            our main issues to troubleshooting and scalability. Users who want to copy multiple
                            artifacts cannot view all dependencies at once. Backend calls for artifact types often
                            overlapped, so troubleshooting from the audit log was difficult. Additional features like
                            syncing and reverting would also be tough to integrate in this UI.<br/>
                            <b>The primary focus of the redesign was to separate artifacts into their own copy workflows.</b>
                        </p>
                        <h5>Final Design</h5><br/>
                        <p>In the redesign, I followed existing design layouts found throughout Experience Platform.
                            <a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Figma</a><br/>
                            Improvements<br/>
                            Instead of copying all artifact types at once, the user can now select an artifact from the
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
