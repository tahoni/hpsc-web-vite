import {ImageSourceDescription} from "../model/ImageSourceDescription.ts";
import ladyShooterOnIpscRangeImage from '../assets/images/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from '../assets/images/ipsc-target-with-bullet-holes.png';

export class Images {
    static underCoverLadyImage: ImageSourceDescription =
        {source: ladyShooterOnIpscRangeImage,
            description: 'Lady shooter on IPSC range'};
    static underCoverTargetImage: ImageSourceDescription =
        {source: ipscTargetWithBulletHoles,
            description: 'IPSC target with bullet holes'};
}
