import {ImageSourceDescription} from "../model/ImageSourceDescription.ts";
import ladyShooterOnIpscRangeImage from '../assets/images/cover/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from '../assets/images/cover/ipsc-target-with-bullet-holes.png';

export class ImageUtils {
    static underCoverLadyImage: ImageSourceDescription =
        {source: ladyShooterOnIpscRangeImage,
            description: 'Lady shooter on IPSC range'};
    static underCoverTargetImage: ImageSourceDescription =
        {source: ipscTargetWithBulletHoles,
            description: 'IPSC target with bullet holes'};
}
