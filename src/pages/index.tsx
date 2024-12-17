import {Page} from "./Page.tsx";
import {AboutContent, HomeContent} from "../content";

export const HomePage = () => (<Page child={<HomeContent/>}/>);
export const AboutUsPage = () => (<Page child={<AboutContent/>}/>);
